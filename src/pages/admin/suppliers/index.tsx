import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SuppliersTypes } from "@redux/reducers/suppliers/models";

import { TR } from "@atomic/constants/table";
import { HeaderItemsPreview } from "@atomic/constants/header";

import supplier from "@api/supplier";
import { SupplierProps } from "@api/supplier/models";

import View from "./view";
import { IndexProps } from "./models";

const Supplier: React.FC<IndexProps> = ({
    setDataSupplier
}) => {
    const router = useRouter();

    const [itemsPreview, setItemsPreview] = useState<HeaderItemsPreview[]>([])
    const [data, setData] = useState<TR[]>([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        supplier.listAll()
        // @ts-ignore
        .then((data: SupplierProps[]) => {
            setItemsPreview([
                {
                    icon: '',
                    title: 'Suppliers',
                    value: String(data.length)
                },
            ])

            let array = data.map((item, index) => (
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
                        setDataSupplier({
                            id: data[index].supplierId,
                            name: data[index].supplierName,
                            email: data[index].supplierEmail,
                            phone: data[index].supplierPhone,
                            city: data[index].supplierCity,
                            state: data[index].supplierState,
                            zipCode: data[index].supplierZipCode,
                            address: data[index].supplierAddress
                        })
                        router.push({
                            pathname: '/admin/suppliers/details',
                            query: {
                                isEdit: true,
                            }}
                        )
                    }
                }
            ))
            // @ts-ignore
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
            setFieldRequired('Phone')
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

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setDataSupplier: (data: SuppliersTypes['data']) => dispatch({ type: 'SET_SUPPLIER_DATA', payload: { data } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Supplier);