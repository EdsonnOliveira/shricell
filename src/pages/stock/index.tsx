import React from "react";

import { TR } from "@atomic/constants/table";
import { green, red } from "@atomic/constants/colors";
import { HeaderItemsPreview } from "@atomic/constants/header";

import View from "./view";
import { useRouter } from "next/router";

const itemsPreview: HeaderItemsPreview[] = [
    {
        icon: '',
        title: 'Items',
        value: '432'
    },
    {
        icon: '',
        title: 'Low Stock',
        value: '2'
    },
]

const Stock: React.FC = ({
}) => {
    const router = useRouter();

    const latestSales: TR[] = [
        {
            td: [
                    {
                        description: 'iPhone 14',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '128GB',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Blue',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '13',
                        textAlign: 'center',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '$ 799',
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
                        stockName: 'iPhone 14 Pro Max'
                    }}
                )
            }
        },
        {
            td: [
                    {
                        description: 'iPhone 14',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '128GB',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Blue',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '13',
                        textAlign: 'center',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '$ 799',
                        textAlign: 'center',
                        textWeight: '500',
                        type: {
                            color: 'fontWhite',
                            bgColor: green
                        }
                    },
            ]
        },
        {
            td: [
                    {
                        description: 'iPhone 14',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '128GB',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Blue',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '13',
                        textAlign: 'center',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '$ 799',
                        textAlign: 'center',
                        textWeight: '500',
                        type: {
                            color: 'fontWhite',
                            bgColor: green
                        }
                    },
            ]
        },
        {
            td: [
                    {
                        description: 'iPhone 14',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '128GB',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Blue',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '13',
                        textAlign: 'center',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '$ 799',
                        textAlign: 'center',
                        textWeight: '500',
                        type: {
                            color: 'fontWhite',
                            bgColor: green
                        }
                    },
            ]
        },
        {
            td: [
                    {
                        description: 'iPhone 14',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '128GB',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Blue',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '13',
                        textAlign: 'center',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '$ 799',
                        textAlign: 'center',
                        textWeight: '500',
                        type: {
                            color: 'fontWhite',
                            bgColor: green
                        }
                    },
            ]
        },
        {
            td: [
                    {
                        description: 'iPhone 14',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '128GB',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Blue',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '13',
                        textAlign: 'center',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '$ 799',
                        textAlign: 'center',
                        textWeight: '500',
                        type: {
                            color: 'fontWhite',
                            bgColor: green
                        }
                    },
            ]
        },
        {
            td: [
                    {
                        description: 'iPhone 14',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '128GB',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Blue',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '4',
                        textAlign: 'center',
                        textWeight: '500',
                        type: {
                            color: 'fontWhite',
                            bgColor: red
                        }
                    },
                    {
                        description: '$ 799',
                        textAlign: 'center',
                        textWeight: '500',
                        type: {
                            color: 'fontWhite',
                            bgColor: green
                        }
                    },
            ]
        },
        {
            td: [
                    {
                        description: 'iPhone 14',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '128GB',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Blue',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '13',
                        textAlign: 'center',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '$ 799',
                        textAlign: 'center',
                        textWeight: '500',
                        type: {
                            color: 'fontWhite',
                            bgColor: green
                        }
                    },
            ]
        },
        {
            td: [
                    {
                        description: 'iPhone 14',
                        textAlign: 'left',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '128GB',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: 'Purple',
                        textAlign: 'center',
                        textWeight: '300',
                        type: 'text'
                    },
                    {
                        description: '13',
                        textAlign: 'center',
                        textWeight: '500',
                        type: 'text'
                    },
                    {
                        description: '$ 799',
                        textAlign: 'center',
                        textWeight: '500',
                        type: {
                            color: 'fontWhite',
                            bgColor: green
                        }
                    },
            ]
        },
    ]

    return (
        <View
            router={router}
            latestSales={latestSales}
            itemsPreview={itemsPreview}
        />
    )
}

export default Stock;