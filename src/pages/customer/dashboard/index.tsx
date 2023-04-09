import React, { useState } from "react";

import { HeaderItemsPreview } from "@atomic/constants/header";
import { black, white, yellow } from "@atomic/constants/colors";

import { ItemsCart } from "@types/itemsCart";

import View from "./view";
import { RadioButtonType } from "~/atomic/constants/radioButton";

const itemsPreview: HeaderItemsPreview[] = [
    {
        icon: '',
        title: 'Cart',
        value: '34'
    },
]

const itemsCart: ItemsCart[] = [
    {
        brand: 'apple',
        name: 'iPhone 11',
        storage: '64GB',
        grade: 'A',
        price: '315+',
        quantity: '13',
        colors: [
            {
                color: yellow,
                name: 'Yellow',
                quantity: '2',
                price: '315'
            },
            {
                color: black,
                name: 'Black',
                quantity: '4',
                price: '315'
            },
            {
                color: white,
                name: 'White',
                quantity: '7',
                price: '315'
            }
        ]
    },
]

const Dashboard: React.FC = ({
}) => {
    const [selectedIncludeOutStock, setSelectedIncludeOutStock] = useState<boolean>(false)

    return (
        <View
            itemsPreview={itemsPreview}
            itemsCart={itemsCart}
            selectedIncludeOutStock={selectedIncludeOutStock}
            setSelectedIncludeOutStock={setSelectedIncludeOutStock}
        />
    )
}

export default Dashboard;