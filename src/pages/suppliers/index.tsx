import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TR } from "@atomic/constants/table";
import { green } from "@atomic/constants/colors";
import { HeaderItemsPreview } from "@atomic/constants/header";

import { currency } from "@constants/formats";

import supplier from "~/services/api/supplier";
import { SupplierProps } from "~/services/api/supplier/models";

import View from "./view";

const Supplier: React.FC = ({
}) => {
    const router = useRouter();

    const [itemsPreview, setItemsPreview] = useState<HeaderItemsPreview[]>([])
    const [data, setData] = useState<TR[]>([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        supplier.listAll()
        .then((data: SupplierProps[]) => {
            setItemsPreview([
                {
                    icon: '',
                    title: 'Suppliers',
                    value: String(data.length)
                },
            ])

            let array = data.map(item => (
                {
                    td: [
                            {
                                description: item.supplierName,
                                textAlign: 'left',
                                textWeight: '500',
                                type: 'text'
                            },
                            {
                                description: item.supplierPhone,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: item.supplierEmail,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: item.supplierAddress,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: item.supplierCity,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                    ],
                    onClick: () => {
                        router.push({
                            pathname: '/suppliers/details',
                            query: {
                                isEdit: true,
                                supplierName: item.supplierName
                            }}
                        )
                    }
                }
            ))
            setData(array)
        })
    }

    const [modalSupplier, setModalSupplier] = useState<boolean>(false)
    const [nameSupplier, setNameSupplier] = useState<string>('')
    const [phoneSupplier, setPhoneSupplier] = useState<string>('')
    const [emailSupplier, setEmailSupplier] = useState<string>('')
    const [addressSupplier, setAddressSupplier] = useState<string>('')
    const [citySupplier, setCitySupplier] = useState<string>('')
    const [stateSupplier, setStateSupplier] = useState<string>('')
    const [zipCodeSupplier, setZipCodeSupplier] = useState<string>('')

    const [fieldRequired, setFieldRequired] = useState<string>('')
    const [modalRequired, setModalRequired] = useState<boolean>(false)

    const saveSupplier = () => {
        if (nameSupplier.length <= 0) {
            setFieldRequired('Name')
            setModalRequired(true)
            return
        }

        if (phoneSupplier.length <= 0) {
            setFieldRequired('Name')
            setModalRequired(true)
            return
        }
        
        supplier.insert({
                name: nameSupplier,
                phone: phoneSupplier,
                email: emailSupplier,
                address: addressSupplier,
                city: citySupplier,
                state: stateSupplier,
                zipCode: zipCodeSupplier
            })
        .then(() => router.reload())
    }

    return (
        <View
            router={router}
            data={data}
            itemsPreview={itemsPreview}
            modalSupplier={modalSupplier}
            setModalSupplier={setModalSupplier}
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
            saveSupplier={saveSupplier}
            fieldRequired={fieldRequired}
            modalRequired={modalRequired}
            setModalRequired={setModalRequired}
        />
    )
}

export default Supplier;