import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SuppliersTypes } from "@redux/reducers/suppliers/models";
import { CustomersTypes } from "@redux/reducers/customers/models";

import { getDateCurrent, getFirstLastDay } from "@constants/date";

import { TR } from "@atomic/constants/table";
import { green, primary } from "@atomic/constants/colors";
import { OptionsType } from "@atomic/constants/select";

import supplier from "@api/supplier";
import sales from "@api/sales";
import customer from "@api/customer";
import devices from "@api/stock/devices";
import { SupplierProps } from "@api/supplier/models";
import { CustomerProps } from "@api/customer/models";
import { DevicesProps } from "@api/sales/models";
import { PriceProps } from "@api/stock/devices/models";

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

    const [dateStart, setDateStart] = useState<string>(getDateCurrent())
    const [dateEnd, setDateEnd] = useState<string>(getDateCurrent())
    const [devicesId, setDevicesId] = useState<OptionsType[]>([{ label: 'Select the Device', value: '-1' }])
    const [filterDevices, setFilterDevices] = useState<string>('')

    useEffect(() => {
        loadDevices()
    }, [filterDevices])

    const loadDevices = () => {
        devices.autoComplete({ model: filterDevices })
        // @ts-ignore
        .then((data: DevicesProps[]) => {
            let options: OptionsType[] = [{ label: 'Select the Device', value: '-1' }]
            let array = data.map(item => (
                {
                    label: `${item.model} - ${item.color} - ${item.storage} - ${item.gradeName}`,
                    value: String(item.deviceId)
                }
            ))
            setDevicesId([...options, ...array])
        })
        .catch(() => setDevicesId([{ label: 'Select the Device', value: '-1' }]))
    }

    const [devicesSelecteds, setDevicesSelecteds] = useState<any>()

    const loadDevicesSelecteds = (device: { label: string, value: string }) => {
        if (devicesSelecteds != null && devicesSelecteds.findIndex((val: { label: string, value: string }) => val.value === device.value) >= 0)
            return
        
        setDevicesSelecteds(devices => ([...devices || [], device]))
    }

    const removeDevice = (value: string) => {
        let device = devicesSelecteds.findIndex((val: { label: string, value: string }) => val.value === value)
        let array = devicesSelecteds
        array.splice(device, 1)
        setDevicesSelecteds(array)
    }

    const [dataGraphByTime, setDataGraphByTime] = useState<TR[]>([])

    useEffect(() => {
        loadGraphByTime()
    }, [devicesSelecteds])

    const loadGraphByTime = () => {
        let devicesId = devicesSelecteds?.map(item => item.value) || []
        devices.prices({ dateStart, dateEnd, devicesId })
        // @ts-ignore
        .then((data: PriceProps[]) => {
            let array = data.map((item, index) => (
                {
                    td: [
                            {
                                description: item.model,
                                textAlign: 'left',
                                textWeight: '500',
                                type: 'text'
                            },
                            {
                                description: item.color,
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
                                description: item.gradeName,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: `${item.year}/${item.month.padStart(2, '0')}`,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: `$ ${item.averagePrice.substring(0, 6)}`,
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

            setDataGraphByTime(array)
        })
    }

    return (
        <View
            router={router}
            dataBestCustomers={dataBestCustomers}
            dateStart={dateStart}
            setDateStart={setDateStart}
            dateEnd={dateEnd}
            setDateEnd={setDateEnd}
            filterDevices={filterDevices}
            setFilterDevices={setFilterDevices}
            devicesItems={devicesId}

            devicesSelecteds={devicesSelecteds}
            setDevicesSelecteds={loadDevicesSelecteds}
            removeDeviceSelected={removeDevice}

            dataGraphByTime={dataGraphByTime}
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