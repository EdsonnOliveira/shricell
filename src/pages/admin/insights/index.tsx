import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SuppliersTypes } from "@redux/reducers/suppliers/models";
import { CustomersTypes } from "@redux/reducers/customers/models";

import { getFirstLastDay } from "@constants/date";

import { TR } from "@atomic/constants/table";
import { green, primary } from "@atomic/constants/colors";

import supplier from "@api/supplier";
import sales from "@api/sales";
import customer from "@api/customer";
import { SupplierProps } from "@api/supplier/models";
import { CustomerProps } from "@api/customer/models";

import View from "./view";
import { IndexProps } from "./models";

const Insights: React.FC<IndexProps> = ({
    setDataSupplier,
    setDataCustomer
}) => {
    const router = useRouter();

    const [dataBestCustomers, setDataBestCustomer] = useState<TR[]>([])
    const [dataBestSuppliers, setDataBestSuppliers] = useState<TR[]>([])
    const [dataDevices, setDataDevices] = useState<Object>({})
    const [dataBrands, setDataBrands] = useState<Object>({})

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        customer.best()
        // @ts-ignore
        .then((data: CustomerProps[]) => {
            let array = data.map((item, index) => (
                {
                    td: [
                            {
                                description: item.customerId,
                                textAlign: 'left',
                                textWeight: '500',
                                type: 'text'
                            },
                            {
                                description: item.companyName,
                                textAlign: 'left',
                                textWeight: '500',
                                type: 'text'
                            },
                            {
                                description: item.email,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: item.phone,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: item.totalOrders,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: `$ ${item.totalValue}`,
                                textAlign: 'center',
                                textWeight: '500',
                                type: {
                                    color: 'fontWhite',
                                    bgColor: green
                                }
                            },
                    ],
                    onClick: () => {
                        // @ts-ignore
                        setDataCustomer(data[index])
                        router.push({
                            pathname: '/admin/customers/details',
                            query: {
                                isEdit: true,
                            }}
                        )
                    }
                }
            ))
            // @ts-ignore
            setDataBestCustomer(array)
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

        supplier.best()
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
                                description: item.totalQuantity,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: `$ ${item.totalBought}`,
                                textAlign: 'center',
                                textWeight: '500',
                                type: {
                                    color: 'fontWhite',
                                    bgColor: green
                                }
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
            setDataBestSuppliers(array)
        })
    }

    const [stampSelected, setStampSelected] = useState<number>(0)

    return (
        <View
            router={router}
            dataBestCustomers={dataBestCustomers}
            dataBestSuppliers={dataBestSuppliers}
            dataDevices={dataDevices}
            dataBrands={dataBrands}
            stampSelected={stampSelected}
            setStampSelected={setStampSelected}
        />
    )
}

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setDataCustomer: (data: CustomersTypes['data']) => dispatch({ type: 'SET_CUSTOMER_DATA', payload: { data } }),
    setDataSupplier: (data: SuppliersTypes['data']) => dispatch({ type: 'SET_SUPPLIER_DATA', payload: { data } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Insights);