import React from "react";
import { useRouter } from "next/router";

import { TR } from "@atomic/constants/table";
import { green } from "@atomic/constants/colors";

import View from "./view";
import { ItemStep } from "~/atomic/constants/steps";

const SalesDetails: React.FC = ({
}) => {
    const router = useRouter()

    const items: TR[] = [
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
    ]

    const steps: ItemStep[] = [
        {
            index: 0,
            description: 'Order placed',
            label: '28/03/2023 10:43',
            icon: ''
        },
        {
            index: 1,
            description: 'Waiting confirmation',
            label: '',
            icon: ''
        },
        {
            index: 2,
            description: `Success`,
            label: '',
            icon: ''
        },
    ]

    return (
        <View items={items} steps={steps} />
    )
}

export default SalesDetails;