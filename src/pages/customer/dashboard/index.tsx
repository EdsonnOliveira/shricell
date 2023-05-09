import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { LoginTypes } from "@redux/reducers/login/models";

import { HeaderItemsPreview } from "@atomic/constants/header";
import { OptionsType } from "@atomic/constants/select";
import Alert from "@atomic/atoms/alert";
import { AlertType } from "@atomic/constants/alert";

import { ItemsCart } from "@types/itemsCart";

import grades from "@api/stock/grades";
import devices from "@api/stock/devices";
import brands from "@api/stock/brands";
import cart from "@api/sales/cart";
import { GradesProps } from "@api/stock/grades/models";
import { DevicesProps } from "@api/stock/devices/models";
import { BrandProps } from "@api/stock/brands/models";
import { CartProps } from "@api/sales/cart/models";

import { IndexProps } from "./models";
import View from "./view";

const Dashboard: React.FC<IndexProps> = ({
    dataUser
}) => {
    const route = useRouter()
    const [itemsPreview, setItemsPreview] = useState<HeaderItemsPreview[]>([])

    useEffect(() => {
        loadStock()
    }, [])

    const loadStock = () => {
        cart.total({ customerId: dataUser.id })
        .then((data: CartProps) => {
            setItemsPreview([
                {
                    icon: '',
                    title: 'Cart',
                    value: String(data?.totalQuantity || '0')
                },
            ])
        })
        .catch(() => null)
    }

    const [selectedIncludeOutStock, setSelectedIncludeOutStock] = useState<boolean>(false)
    
    const [gradesItems, setGradesItems] = useState<OptionsType[]>([])
    const [gradesSelecteds, setGradesSelecteds] = useState<string[]>([])
    const [manufacturerItems, setManufacturerItems] = useState<OptionsType[]>([])
    const [manufacturerSelecteds, setManufacturerSelecteds] = useState<string[]>([])

    const [devicesItems, setDevicesItems] = useState<ItemsCart[]>([])

    useEffect(() => {
        loadFilter()
        loadDevices()
    }, [])

    const loadFilter = () => {
        grades.listAll()
        .then((data: GradesProps[]) => {
            let array = data.map(item => (
                {
                    label: item.gradeName,
                    value: String(item.quantityStock)
                }
            ))
            setGradesItems(array)
        })

        brands.listAll()
        .then((data: BrandProps[]) => {
            let array = data.map(item => (
                {
                    label: item.brand,
                    value: String(item.quantityStock)
                }
            ))
            setManufacturerItems(array)
        })
    }

    const loadDevices = () => {
        devices.toSellCardList()
        .then((dataSell: DevicesProps[]) => {
            let array = dataSell.map(item => (
                {
                    brand: item.brand,
                    name: item.model,
                    storage: item.storage,
                    grade: item.gradeName,
                    quantity: item.quantityStock,
                    price: item.salePrice,
                    colors: item.color,
                }
            ))
            
            setDevicesItems(array)
        })
    }

    const updateFilter = (label: string, type: string) => {
        switch (type) {
            case 'G':
                let grade = gradesSelecteds.findIndex(grade => grade == label)
                if (grade < 0) {
                    setGradesSelecteds(grades => [...grades, label])
                } else {
                    setGradesSelecteds(grades => grades.slice(grade, 0))
                }
                break;
            case 'M':
                let manufacturer = manufacturerSelecteds.findIndex(manufacturer => manufacturer == label)
                if (manufacturer < 0) {
                    setManufacturerSelecteds(manufacturers => [...manufacturers, label])
                } else {
                    setManufacturerSelecteds(manufacturers => manufacturers.slice(manufacturer, 0))
                }
                break;
        }
    }

    const [fieldRequired, setFieldRequired] = useState<string>('')
    const [modalRequired, setModalRequired] = useState<boolean>(false)

    const [alertVisible, setAlertVisible] = useState<boolean>(false)
    const [alertType, setAlertType] = useState<AlertType>('error')
    const [alertText, setAlertText] = useState<string>('')

    const onClickBuy = (deviceId: string, qt: string, salePrice: string, action: 'Buy' | 'Update' | 'Delete') => {
        if ((qt == undefined ||
            qt == null ||
            qt.length <= 0 ||
            qt == '' ||
            Number(qt) <= 0) && action != 'Delete') {
            setFieldRequired('Quantity')
            setModalRequired(true)
            return
        }

        switch (action) {
            case 'Buy':
                cart.insert({
                    customerId: dataUser.id,
                    deviceId: deviceId,
                    quantity: qt,
                    salePrice
                })
                .then(() => {
                    setAlertType('success')
                    setAlertText('Item added successfully!')
                    setAlertVisible(true)
                    route.push('/customer/cart')
                })
                .catch(() => {
                    setAlertType('error')
                    setAlertText('Item added error!')
                    setAlertVisible(true)
                })
                break;
            case 'Update':
                cart.update({
                    customerId: dataUser.id,
                    deviceId: deviceId,
                    quantity: qt,
                })
                .then(() => {
                    setAlertType('success')
                    setAlertText('Item updated successfully!')
                    setAlertVisible(true)
                    route.push('/customer/cart')
                })
                .catch(() => {
                    setAlertType('error')
                    setAlertText('Item updated error!')
                    setAlertVisible(true)
                })
                break;
            case 'Delete':
                cart.remove({
                    customerId: dataUser.id,
                    deviceId: deviceId,
                })
                .then(() => {
                    setAlertType('success')
                    setAlertText('Item removing successfully!')
                    setAlertVisible(true)
                    route.push('/customer/cart')
                })
                .catch(() => {
                    setAlertType('error')
                    setAlertText('Item removing error!')
                    setAlertVisible(true)
                })
                break;
        }
    }

    return (
        <>
            <View
                idUser={dataUser.id || '0'}
                nameUser={dataUser.name || 'Customer'}
                itemsPreview={itemsPreview}
                selectedIncludeOutStock={selectedIncludeOutStock}
                setSelectedIncludeOutStock={setSelectedIncludeOutStock}
                gradesItems={gradesItems}
                gradesSelecteds={gradesSelecteds}
                setGradesSelecteds={updateFilter}
                manufacturerItems={manufacturerItems}
                manufacturerSelecteds={manufacturerSelecteds}
                setManufacturerSelecteds={updateFilter}
                devicesItems={devicesItems}
                onClickBuy={onClickBuy}
                fieldRequired={fieldRequired}
                modalRequired={modalRequired}
                setModalRequired={setModalRequired}
            />
            <Alert
                type={alertType}
                text={alertText}
                visible={alertVisible}
                setVisible={setAlertVisible}
            />
        </>
    )
}

const mapStateToProps = ({
    loginReducer
}: {
    loginReducer: LoginTypes
}) => ({
    token: loginReducer.token,
    dataUser: loginReducer.data
})

const mapDispatchToProps = (dispatch: Dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);