import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SuppliersTypes } from "@redux/reducers/suppliers/models";

import { IndexProps } from "./models";
import View from "./view";

const SupplierDetails: React.FC<IndexProps> = ({
    dataSupplier
}) => {
    const [nameSupplier, setNameSupplier] = useState<string>('')
    const [phoneSupplier, setPhoneSupplier] = useState<string>('')
    const [emailSupplier, setEmailSupplier] = useState<string>('')
    const [addressSupplier, setAddressSupplier] = useState<string>('')
    const [citySupplier, setCitySupplier] = useState<string>('')
    const [stateSupplier, setStateSupplier] = useState<string>('')
    const [zipCodeSupplier, setZipCodeSupplier] = useState<string>('')

    return (
        <View
            supplier={dataSupplier}
            nameSupplier={nameSupplier}
            setNameSupplier={setNameSupplier}
            addressSupplier={addressSupplier}
            setAddressSupplier={setAddressSupplier}
            phoneSupplier={phoneSupplier}
            setPhoneSupplier={setPhoneSupplier}
            emailSupplier={emailSupplier}
            setEmailSupplier={setEmailSupplier}
            citySupplier={citySupplier}
            setCitySupplier={setCitySupplier}
            stateSupplier={stateSupplier}
            setStateSupplier={setStateSupplier}
            zipCodeSupplier={zipCodeSupplier}
            setZipCodeSupplier={setZipCodeSupplier}
        />
    )
}

const mapStateToProps = ({
    supplierReducer
}: {
    supplierReducer: SuppliersTypes
}) => ({
    dataSupplier: supplierReducer.data
})

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SupplierDetails);