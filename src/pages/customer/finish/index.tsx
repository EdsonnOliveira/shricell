import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { LoginTypes } from "@redux/reducers/login/models";

import { HeaderItemsPreview } from "@atomic/constants/header";
import Alert from "@atomic/atoms/alert";
import { AlertType } from "@atomic/constants/alert";

import cart from "@api/sales/cart";
import bank from "@api/bank";
import sales from "@api/sales";
import { CartProps } from "@api/sales/cart/models";
import { BankProps } from "@api/bank/models";

import { IndexProps } from "./models";
import View from "./view";

const Dashboard: React.FC<IndexProps> = ({
    dataUser
}) => {
    const route = useRouter()
    const [itemsPreview, setItemsPreview] = useState<HeaderItemsPreview[]>([])

    useEffect(() => {
        loadStock()
        loadBanks()
    }, [])

    const loadStock = () => {
        cart.total({ customerId: dataUser.id })
        .then((data: CartProps) => {
            setItemsPreview([
                {
                    icon: '',
                    title: 'Items',
                    value: String(data?.totalQuantity) || '0'
                },
                {
                    icon: '',
                    title: 'Total',
                    value: `$ ${String(data?.totalValue) || '0'}`
                },
            ])
        })
        .catch(() => null)
    }

    const [banks, setBanks] = useState<BankProps[]>([])

    const loadBanks = () => {
        bank.listAll()
        .then((data: BankProps[]) => {
            setBanks(data)
        })
    }

    const [payment, setPayment] = useState<FileList | null>(null)

    const [fieldRequired, setFieldRequired] = useState<string>('')
    const [modalRequired, setModalRequired] = useState<boolean>(false)

    const [alertVisible, setAlertVisible] = useState<boolean>(false)
    const [alertType, setAlertType] = useState<AlertType>('error')
    const [alertText, setAlertText] = useState<string>('')

    const finishCart = () => {
        if (!payment) {
            setFieldRequired('Payment Receipt')
            setModalRequired(true)
            return
        }

        sales.insert({ customerId: dataUser.id, paymentReceipt: payment[0] })
        .then((data) => {
            setAlertText(String(data))
            setAlertType('success')
            setAlertVisible(true)
        })
        .catch((data) => {
            setAlertText(data.message)
            setAlertType('error')
            setAlertVisible(true)
        })
    }

    return (
        <>
            <View
                itemsPreview={itemsPreview}
                banks={banks}
                fieldRequired={fieldRequired}
                modalRequired={modalRequired}
                setModalRequired={setModalRequired}
                payment={payment}
                setPayment={setPayment}
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);