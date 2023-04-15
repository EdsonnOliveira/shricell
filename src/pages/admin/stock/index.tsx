import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StockTypes } from "@redux/reducers/stock/models";

import { TR } from "@atomic/constants/table";
import { green, primary } from "@atomic/constants/colors";
import { HeaderItemsPreview } from "@atomic/constants/header";
import { OptionsType } from "@atomic/constants/select";

import { currency } from "@constants/formats";

import devices from "@api/stock/devices";
import supplier from "@api/supplier";
import stock from "@api/stock";
import { DevicesProps } from "@api/stock/devices/models";
import { SupplierProps } from "@api/supplier/models";

import View from "./view";
import { IndexProps } from "./models";

const Stock: React.FC<IndexProps> = ({
    setDataStock
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

            let array = data.map((item, index) => (
                {
                    td: [
                            {
                                description: '+',
                                type: {
                                    bgColor: 'transparent',
                                    borderColor: primary,
                                    color: 'fontPrimary',
                                    action: () => setModalStock(true),
                                }
                            },
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
                        setDataStock(data[index])
                        router.push({
                            pathname: '/admin/stock/details',
                            query: {
                                isEdit: true
                            }
                        })
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

    const [modalStock, setModalStock] = useState<boolean>(false)
    const [supplierItems, setSupplierItems] = useState<OptionsType[]>([{ label: 'Select the Supplier', value: '-1' }])
    const [supplierStock, setSupplierStock] = useState<OptionsType>({ label: '', value: '-1' })
    const [filterNameSupplierStock, setFilterNameSupplierStock] = useState<string>('')

    const [quantityStock, setQuantityStock] = useState<string>('')
    const [unitPriceStock, setUnitPriceStock] = useState<string>('')
    const [annotationStock, setAnnotationStock] = useState<string>('')

    useEffect(() => {
        loadSuppliers()
    }, [filterNameSupplierStock])

    const loadSuppliers = () => {
        setSupplierStock({label: filterNameSupplierStock, value: '-1'})

        if (filterNameSupplierStock.length <= 0) {
            supplier.listAll()
            .then((data: SupplierProps[]) => {
                let options: OptionsType[] = [{ label: 'Select the Supplier', value: '-1' }]
                let array = data.map(item => (
                    {
                        label: item.supplierName,
                        value: String(item.supplierId)
                    }
                ))
                setSupplierItems([...options, ...array])
            })
        } else {
            supplier.autoComplete({ name: filterNameSupplierStock })
            .then((data: SupplierProps[]) => {
                let options: OptionsType[] = [{ label: 'Select the Supplier', value: '-1' }]
                let array = data.map(item => (
                    {
                        label: item.supplierName,
                        value: String(item.supplierId)
                    }
                ))
                setSupplierItems([...options, ...array])
            })
        }
    }

    const saveStock = () => {
        if (supplierStock.value == '-1' || supplierStock.label.length <= 0) {
            setFieldRequired('Supplier')
            setModalRequired(true)
            return
        }

        if (quantityStock.length <= 0) {
            setFieldRequired('Quantity')
            setModalRequired(true)
            return
        }

        if (unitPriceStock.length <= 0) {
            setFieldRequired('Unit Price')
            setModalRequired(true)
            return
        }

        stock.insert({
            supplierId: supplierStock.value,
            deviceId: '1',
            quantity: quantityStock,
            unitPrice: unitPriceStock,
            annotation: annotationStock
        })
        .then(() => setModalStock(false))
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
            modalStock={modalStock}
            setModalStock={setModalStock}

            supplierStock={supplierStock}
            setSupplierStock={setSupplierStock}
            setFilterNameSupplierStock={setFilterNameSupplierStock}
            suppliersItems={supplierItems}
            quantityStock={quantityStock}
            setQuantityStock={setQuantityStock}
            unitPriceStock={unitPriceStock}
            setUnitPriceStock={setUnitPriceStock}
            annotationStock={annotationStock}
            setAnnotationStock={setAnnotationStock}
            saveStock={saveStock}
        />
    )
}

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setDataStock: (data: StockTypes['data']) => dispatch({ type: 'SET_STOCK_DATA', payload: { data } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Stock);