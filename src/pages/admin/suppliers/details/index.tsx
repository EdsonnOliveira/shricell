import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import View from "./view";

const SupplierDetails: React.FC = ({
}) => {
    const router = useRouter()

    const [nameSupplier, setNameSupplier] = useState<string>('')
    const [phoneSupplier, setPhoneSupplier] = useState<string>('')
    const [emailSupplier, setEmailSupplier] = useState<string>('')
    const [addressSupplier, setAddressSupplier] = useState<string>('')
    const [citySupplier, setCitySupplier] = useState<string>('')
    const [stateSupplier, setStateSupplier] = useState<string>('')
    const [zipCodeSupplier, setZipCodeSupplier] = useState<string>('')

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        
    }

    return (
        <View
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

export default SupplierDetails;