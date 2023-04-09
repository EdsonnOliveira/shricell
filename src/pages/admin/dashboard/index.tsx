import React from "react";

import { TR } from "@atomic/constants/table";
import { green } from "@atomic/constants/colors";
import { HeaderItemsPreview } from "@atomic/constants/header";

import View from "./view";

const latestSales: TR[] = [
    {
        td: [
            {
                description: 'Ramon Raniere',
                textAlign: 'left',
                textWeight: '500',
                type: 'text'
            },
            {
                description: '4 cellphones',
                textAlign: 'center',
                textWeight: '300',
                type: 'text'
            },
            {
                description: 'Today, 13:02',
                textAlign: 'center',
                textWeight: '300',
                type: 'text'
            },
            {
                description: '$ 1350',
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
                description: 'Edson Pinheiro',
                textAlign: 'left',
                textWeight: '500',
                type: 'text'
            },
            {
                description: '1 cellphone',
                textAlign: 'center',
                textWeight: '300',
                type: 'text'
            },
            {
                description: 'Today, 15:06',
                textAlign: 'center',
                textWeight: '300',
                type: 'text'
            },
            {
                description: '$ 1000',
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

const Dashboard: React.FC = ({
}) => {
    return (
        <View
            latestSales={latestSales}
            itemsPreview={itemsPreview}
        />
    )
}

export default Dashboard;