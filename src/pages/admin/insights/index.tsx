import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SuppliersTypes } from "@redux/reducers/suppliers/models";

import { getFirstLastDay } from "@constants/date";

import { TR } from "@atomic/constants/table";
import { primary } from "@atomic/constants/colors";

import supplier from "@api/supplier";
import sales from "@api/sales";
import { SupplierProps } from "@api/supplier/models";

import View from "./view";
import { IndexProps } from "./models";

const Insights: React.FC<IndexProps> = ({
    setDataSupplier
}) => {
    const router = useRouter();

    const [data, setData] = useState<TR[]>([])
    const [dataDevices, setDataDevices] = useState<Object>({})
    const [dataBrands, setDataBrands] = useState<Object>({})

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        supplier.listAll()
        // @ts-ignore
        .then((data: SupplierProps[]) => {
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

        sales.bestSellerDevices({ dateStart: getFirstLastDay().first, dateEnd: getFirstLastDay().last })
        // @ts-ignore
        .then((data: DevicesProps[]) => {
            let labels = data.map(item => `${item.model} - ${item.storage} - ${item.color}`)
            const dataDevices = {
                labels,
                datasets: [
                    {
                        label: 'Total Sold',
                        data: data.map(item => item.totalSold),
                        backgroundColor: primary,
                    },
                ],
            };
            setDataDevices(dataDevices)
        })

        sales.bestSellerBrands({ dateStart: getFirstLastDay().first, dateEnd: getFirstLastDay().last })
        // @ts-ignore
        .then((data: BrandProps[]) => {
            let labels = data.map(item => item.brand)
            const dataBrands = {
                labels,
                datasets: [
                    {
                        label: 'Total Sold',
                        data: data.map(item => item.quantity),
                        backgroundColor: primary,
                    },
                ],
            };
            setDataBrands(dataBrands)
        })
    }

    const [stampSelected, setStampSelected] = useState<number>(0)

    return (
        <View
            router={router}
            data={data}
            dataDevices={dataDevices}
            dataBrands={dataBrands}
            stampSelected={stampSelected}
            setStampSelected={setStampSelected}
        />
    )
}

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setDataSupplier: (data: SuppliersTypes['data']) => dispatch({ type: 'SET_SUPPLIER_DATA', payload: { data } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Insights);