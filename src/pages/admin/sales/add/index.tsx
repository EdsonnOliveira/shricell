import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { LoginTypes } from "@redux/reducers/login/models";
import { SalesTypes } from "@redux/reducers/sales/models";

import { AlertType } from "@atomic/constants/alert";
import { OptionsType } from "@atomic/constants/select";
import Alert from "@atomic/atoms/alert";

import devices from "@api/stock/devices";
import cart from "@api/sales/cart";
import { DevicesProps } from "@api/stock/devices/models";
import { CustomerProps } from "@api/customer/models";

import { ItemsCart } from "@typing/itemsCart";

import { IndexProps } from "./models";
import View from "./view";
import customer from "@api/customer";

const SalesAdd: React.FC<IndexProps> = ({}) => {
    const router = useRouter()

    const [devicesItems, setDevicesItems] = useState<ItemsCart[]>([])
    
    const [fieldRequired, setFieldRequired] = useState<string>('')
    const [modalRequired, setModalRequired] = useState<boolean>(false)
    
    const [alertVisible, setAlertVisible] = useState<boolean>(false)
    const [alertType, setAlertType] = useState<AlertType>('error')
    const [alertText, setAlertText] = useState<string>('')
    
    const [user, setUser] = useState<string>('')
    const [userItems, setUserItems] = useState<OptionsType[]>([{ label: 'Select the User', value: '-1' }])

    useEffect(() => {
        loadData()
        loadDevices()
    }, [])

    const loadData = () => {
        customer.listAll()
        // @ts-ignore
        .then((data: CustomerProps[]) => {
            let options: OptionsType[] = [{ label: 'Select the User', value: '-1' }]

            let array = data.map(item => (
                {
                    label: item.companyName,
                    value: String(item.customerId)
                }
            ))

            setUserItems([...options, ...array])
        })
    }

    const loadDevices = () => {
        devices.toSellCardList()
        // @ts-ignore
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
            // @ts-ignore
            setDevicesItems(array)
        })
    }

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
                    customerId: user,
                    deviceId: deviceId,
                    quantity: qt,
                    salePrice
                })
                .then(() => {
                    setAlertType('success')
                    setAlertText('Item added successfully!')
                    setAlertVisible(true)
                })
                .catch(() => {
                    setAlertType('error')
                    setAlertText('Item added error!')
                    setAlertVisible(true)
                })
                break;
            case 'Update':
                cart.update({
                    customerId: user,
                    deviceId: deviceId,
                    quantity: qt,
                })
                .then(() => {
                    setAlertType('success')
                    setAlertText('Item updated successfully!')
                    setAlertVisible(true)
                })
                .catch(() => {
                    setAlertType('error')
                    setAlertText('Item updated error!')
                    setAlertVisible(true)
                })
                break;
            case 'Delete':
                cart.remove({
                    customerId: user,
                    deviceId: deviceId,
                })
                .then(() => {
                    setAlertType('success')
                    setAlertText('Item removing successfully!')
                    setAlertVisible(true)
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
                devicesItems={devicesItems}
                onClickBuy={onClickBuy}
                setUser={setUser}
                user={user}
                userItems={userItems}
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
    loginReducer,
    salesReducer,
}: {
    loginReducer: LoginTypes
    salesReducer: SalesTypes
}) => ({
    dataUser: loginReducer.data,
    dataSale: salesReducer.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SalesAdd);