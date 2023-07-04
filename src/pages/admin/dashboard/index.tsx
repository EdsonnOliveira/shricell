import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TR } from "@atomic/constants/table";
import { green } from "@atomic/constants/colors";
import { HeaderItemsPreview } from "@atomic/constants/header";

import { getDateCurrent } from "@constants/date";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { LoginTypes } from "@redux/reducers/login/models";
import { SalesTypes } from "@redux/reducers/sales/models";

import stock from "@api/stock";
import sales from "@api/sales";
import { StockProps } from "@api/stock/models";
import { SaleProps } from "@api/sales/models";

import { IndexProps } from "./models";
import View from "./view";

const Dashboard: React.FC<IndexProps> = ({
    dataUser,
    setDataSale
}) => {
    const router = useRouter();

    const [itemsPreview, setItemsPreview] = useState<HeaderItemsPreview[]>([])
    const [billedAmount, setBilledAmount] = useState<string>('0,00')
    const [cost, setCost] = useState<string>('0,00')
    const [profit, setProfit] = useState<string>('0,00')
    const [latestSales, setLatestSales] = useState<TR[]>([])
    const [pendingSales, setPendingSales] = useState<TR[]>([])
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
        ]

        sales.listAll()
        // @ts-ignore
        .then((data: SaleProps[]) => {
            itemsPreview[0].value = String(data.length)
        })

        sales.listAllPending()
        // @ts-ignore
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
                        // @ts-ignore
                        setDataSale(data[index])
                        router.push('/admin/sales/details')
                    }
                }
            ))
            // @ts-ignore
            setPendingSales(array)
        })

        // @ts-ignore
        setItemsPreview(itemsPreview)

        sales.totalSold({ dateStart: getDateCurrent(), dateEnd: getDateCurrent() })
        .then((data) => {
            setBilledAmount(String(data || '0,00'))
        })

        sales.cost({ dateStart: getDateCurrent(), dateEnd: getDateCurrent() })
        .then((data) => {
            setCost(String(data || '0,00'))
        })

        sales.profit({ dateStart: getDateCurrent(), dateEnd: getDateCurrent() })
        .then((data) => {
            setProfit(String(data || '0,00'))
        })

        sales.currentWeek()
        // @ts-ignore
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
                        // @ts-ignore
                        setDataSale(data[index])
                        router.push('/admin/sales/details')
                    }
                }
            ))
            // @ts-ignore
            setLatestSales(array)
        })

        stock.outOfStock()
        // @ts-ignore
        .then((data: StockProps[]) => {
            setOutOfStock(data)
        })
    }

    return (
        <View
            nameUser={dataUser.name || 'Shri'}
            latestSales={latestSales}
            pendingSales={pendingSales}
            itemsPreview={itemsPreview}
            billedAmount={billedAmount}
            cost={cost}
            profit={profit}
            outOfStock={outOfStock}
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