import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SalesTypes } from "@redux/reducers/sales/models";

import { TR } from "@atomic/constants/table";
import { green, red, yellow } from "@atomic/constants/colors";
import { HeaderItemsPreview } from "@atomic/constants/header";

import sales from "@api/sales";
import { SaleProps } from "@api/sales/models";

import { IndexProps } from "./models";
import View from "./view";

const Sales: React.FC<IndexProps> = ({
    setDataSale
}) => {
    const router = useRouter();

    const [itemsPreview, setItemsPreview] = useState<HeaderItemsPreview[]>([])
    const [data, setData] = useState<TR[]>([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        sales.listAll()
        // @ts-ignore
        .then((data: SaleProps[]) => {
            setItemsPreview([
                {
                    icon: 'cart',
                    title: 'Sales',
                    value: String(data.length)
                },
            ])

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
                                description: item.dateTimeInsert,
                                textAlign: 'center',
                                textWeight: '300',
                                type: 'text'
                            },
                            {
                                description: item.status,
                                textAlign: 'center',
                                textWeight: '500',
                                type: {
                                    color: 'fontGray',
                                    bgColor: 'transparent',
                                    borderColor: item.status === 'APPROVED'
                                            ? green
                                            : item.status === 'PENDING'
                                            ? yellow
                                            : red,
                                }
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
            setData(array)
        })
    }

    return (
        <View
            data={data}
            itemsPreview={itemsPreview}
        />
    )
}

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setDataSale: (data: SalesTypes['data']) => dispatch({ type: 'SET_SALE_DATA', payload: { data } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sales);