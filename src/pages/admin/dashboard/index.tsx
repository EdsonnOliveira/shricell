import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TR } from "@atomic/constants/table";
import { green } from "@atomic/constants/colors";
import { HeaderItemsPreview } from "@atomic/constants/header";

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

const itemsPreview: HeaderItemsPreview[] = [
    {
        icon: '',
        title: 'Sales',
        value: '34'
    },
    {
        icon: '',
        title: 'Unfinished',
        value: '5'
    },
    {
        icon: '',
        title: 'Addition',
        value: '7.3%'
    },
    {
        icon: '',
        title: 'Visits',
        value: '61'
    },
]

const Dashboard: React.FC<IndexProps> = ({
    dataUser,
    setDataSale
}) => {
    const router = useRouter();

    const [latestSales, setLatestSales] = useState<TR[]>([])
    const [outOfStock, setOutOfStock] = useState<StockProps[]>([])
    
    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
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