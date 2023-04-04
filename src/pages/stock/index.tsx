import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TR } from "@atomic/constants/table";
import { green } from "@atomic/constants/colors";
import { HeaderItemsPreview } from "@atomic/constants/header";

import { currency } from "@constants/formats";

import devices from "@api/stock/devices";
import { DevicesProps } from "@api/stock/devices/models";

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

    return (
        <View
            router={router}
            data={data}
            itemsPreview={itemsPreview}
        />
    )
}

export default Stock;