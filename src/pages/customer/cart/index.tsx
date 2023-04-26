import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { LoginTypes } from "@redux/reducers/login/models";

import Alert from "@atomic/atoms/alert";
import { AlertType } from "@atomic/constants/alert";

import { ItemsCart } from "@types/itemsCart";

import cart from "@api/sales/cart";
import { CartProps } from "@api/sales/cart/models";

import { IndexProps } from "./models";
import View from "./view";

const Cart: React.FC<IndexProps> = ({
    dataUser
}) => {
    const router = useRouter();

    const [devicesItems, setDevicesItems] = useState<ItemsCart[]>([])
    const [totalQuantity, setTotalQuantity] = useState<string>('0')
    const [totalValue, setTotalValue] = useState<string>('0,00')

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        cart.listAll({ customerId: dataUser.id })
        .then((dataCart: CartProps[]) => {
            let array = dataCart.map(item => (
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
        .catch(() => null)

        cart.total({ customerId: dataUser.id })
        .then((dataCart: CartProps) => {
            setTotalQuantity(String(dataCart?.totalQuantity) || '0')
            setTotalValue(String(dataCart?.totalValue) || '0')
        })
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
                    loadData()
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
                    loadData()
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
                    loadData()
                })
                .catch(() => {
                    setAlertType('error')
                    setAlertText('Item removing error!')
                    setAlertVisible(true)
                })
                break;
        }
    }

    const finishCart = () => {
        router.push('/customer/finish/')
    }

    return (
        <>
            <View
                idUser={String(dataUser.id)}
                totalQuantity={totalQuantity}
                totalValue={totalValue}
                devicesItems={devicesItems}
                onClickBuy={onClickBuy}
                fieldRequired={fieldRequired}
                modalRequired={modalRequired}
                setModalRequired={setModalRequired}
                finishCart={finishCart}
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);