import React, { useState } from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SuppliersTypes } from "@redux/reducers/suppliers/models";

import { IndexProps } from "./models";
import View from "./view";
import supplier from "~/services/api/supplier";
import { useRouter } from "next/router";
import Alert from "~/atomic/atoms/alert";
import { AlertType } from "~/atomic/constants/alert";

const SupplierDetails: React.FC<IndexProps> = ({
    dataSupplier
}) => {
    const router = useRouter()

    const [name, setName] = useState<string>(dataSupplier?.name || '')
    const [phone, setPhone] = useState<string>(dataSupplier?.phone || '')
    const [email, setEmail] = useState<string>(dataSupplier?.email || '')
    const [address, setAddress] = useState<string>(dataSupplier?.address || '')
    const [city, setCity] = useState<string>(dataSupplier?.city || '')
    const [state, setState] = useState<string>(dataSupplier?.state || '')
    const [zipCode, setZipCode] = useState<string>(dataSupplier?.zipCode || '')

    const [fieldRequired, setFieldRequired] = useState<string>('')
    const [modalRequired, setModalRequired] = useState<boolean>(false)

    const [alertVisible, setAlertVisible] = useState<boolean>(false)
    const [alertType, setAlertType] = useState<AlertType>('error')
    const [alertText, setAlertText] = useState<string>('')

    const save = () => {
        if (name.length <= 0) {
            setFieldRequired('Name')
            setModalRequired(true)
            return
        }

        if (phone.length <= 0) {
            setFieldRequired('Phone')
            setModalRequired(true)
            return
        }

        supplier.update({
            id: String(dataSupplier.id),
            name,
            email,
            phone,
            address,
            city,
            state,
            zipCode
        })
        .then(() => {
            setAlertType('success')
            setAlertText('Supplier updated successfully!')
            setAlertVisible(true)
            setTimeout(() => {
                router.push('/admin/suppliers')
            }, 1500);
        })
    }

    return (
        <>
            <View
                name={name}
                setName={setName}
                address={address}
                setAddress={setAddress}
                phone={phone}
                setPhone={setPhone}
                email={email}
                setEmail={setEmail}
                city={city}
                setCity={setCity}
                state={state}
                setState={setState}
                zipCode={zipCode}
                setZipCode={setZipCode}
                save={save}
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
    suppliersReducer
}: {
    suppliersReducer: SuppliersTypes
}) => ({
    dataSupplier: suppliersReducer.data
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SupplierDetails);