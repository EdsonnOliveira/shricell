import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TR } from "@atomic/constants/table";
import { green } from "@atomic/constants/colors";
import { HeaderItemsPreview } from "@atomic/constants/header";

import { currency } from "@constants/formats";

import devices from "@api/stock/devices";
import { DevicesProps } from "@api/stock/devices/models";
import supplier from "@api/supplier";

import View from "./view";

const Stock: React.FC = ({
}) => {
    const router = useRouter();

    const [itemsPreview, setItemsPreview] = useState<HeaderItemsPreview[]>([])
    const [data, setData] = useState<TR[]>([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        devices.listAll()
        .then((data: DevicesProps[]) => {
            setItemsPreview([
                {
                    icon: '',
                    title: 'Items',
                    value: String(data.length)
                },
                {
                    icon: '',
                    title: 'Low Stock',
                    value: String(data.reduce((accumulator, value) => Number(accumulator) + Number(value.quantityStock), 0))
                }
            ])

            let array = data.map(item => (
                {
                    td: [
                            {
                                description: item.model,
                                textAlign: 'left',
                                textWeight: '500',
                                type: 'text'
                            },
                            {
                                description: item.storage,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: item.color,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: item.quantityStock || '0',
                                textAlign: 'center',
                                textWeight: '500',
                                type: 'text'
                            },
                            {
                                description: `$ ${currency(Number(item.salePrice || 0), 2, 3, '.', ',')}`,
                                textAlign: 'center',
                                textWeight: '500',
                                type: {
                                    color: 'fontWhite',
                                    bgColor: green
                                }
                            },
                    ],
                    onClick: () => {
                        router.push({
                            pathname: '/stock/details',
                            query: {
                                isEdit: true,
                                stockName: item.model
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
        .then(() => router.push('/suppliers'))
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

export default Stock;