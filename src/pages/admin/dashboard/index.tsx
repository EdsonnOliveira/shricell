import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TR } from "@atomic/constants/table";
import { green, primary } from "@atomic/constants/colors";
import { HeaderItemsPreview } from "@atomic/constants/header";

import { getDateCurrent, getFirstLastDay } from "@constants/date";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { LoginTypes } from "@redux/reducers/login/models";
import { SalesTypes } from "@redux/reducers/sales/models";

import stock from "@api/stock";
import sales from "@api/sales";
import { StockProps } from "@api/stock/models";
import { BrandProps, DevicesProps, SaleProps } from "@api/sales/models";

import { IndexProps } from "./models";
import View from "./view";

const Dashboard: React.FC<IndexProps> = ({
    dataUser,
    setDataSale
}) => {
    const router = useRouter();

    const [itemsPreview, setItemsPreview] = useState<HeaderItemsPreview[]>([])
    const [billedAmount, setBilledAmount] = useState<string>('0,00')
    const [dataDevices, setDataDevices] = useState<Object>({})
    const [dataBrands, setDataBrands] = useState<Object>({})
    const [latestSales, setLatestSales] = useState<TR[]>([])
    const [outOfStock, setOutOfStock] = useState<StockProps[]>([])
    
    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        let itemsPreview = [
            {
                icon: 'cart',
                title: 'Sales',
                value: '0'
            },
            {
                icon: 'unfinished',
                title: 'Unfinished',
                value: '0'
            },
            {
                icon: '$',
                title: 'Profit',
                value: '0'
            },
        ]

        sales.listAll()
        .then((data: SaleProps[]) => {
            itemsPreview[0].value = String(data.length)
        })

        sales.listAllPending()
        .then((data: SaleProps[]) => {
            itemsPreview[1].value = String(data.length)
        })

        sales.profit({ dateStart: getDateCurrent(), dateEnd: getDateCurrent() })
        .then((data) => {
            itemsPreview[2].value = String(data || '0,00')
        })
        
        setItemsPreview(itemsPreview)

        sales.totalSold({ dateStart: getDateCurrent(), dateEnd: getDateCurrent() })
        .then((data) => {
            setBilledAmount(String(data || '0,00'))
        })
        
        sales.bestSellerDevices({ dateStart: getFirstLastDay().first, dateEnd: getFirstLastDay().last })
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

        sales.currentWeek()
        .then((data: SaleProps[]) => {
            let array = data.map((item, index) => (
                {
                    td: [
                            {
                                description: `#${item.saleId}`,
                                textAlign: 'left',
                                textWeight: '500',
                                type: 'text'
                            },
                            {
                                description: item.companyName,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: `$ ${item.saleValue}`,
                                textAlign: 'center',
                                textWeight: '500',
                                type: {
                                    color: 'fontWhite',
                                    bgColor: green
                                }
                            },
                    ],
                    onClick: () => {
                        setDataSale(data[index])
                        router.push('/admin/sales/details')
                    }
                }
            ))
            setLatestSales(array)
        })

        stock.outOfStock()
        .then((data: StockProps[]) => {
            setOutOfStock(data)
        })
    }

    const [stampSelected, setStampSelected] = useState<number>(0)

    return (
        <View
            nameUser={dataUser.name || 'Shri'}
            latestSales={latestSales}
            itemsPreview={itemsPreview}
            billedAmount={billedAmount}
            dataDevices={dataDevices}
            dataBrands={dataBrands}
            outOfStock={outOfStock}
            stampSelected={stampSelected}
            setStampSelected={setStampSelected}
        />
    )
}

const mapStateToProps = ({
    loginReducer
}: {
    loginReducer: LoginTypes
}) => ({
    token: loginReducer.token,
    dataUser: loginReducer.data
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setDataSale: (data: SalesTypes['data']) => dispatch({ type: 'SET_SALE_DATA', payload: { data } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);