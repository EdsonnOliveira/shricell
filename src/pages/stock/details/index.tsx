import React, { useState } from "react";
import { useRouter } from "next/router";

import View from "./view";

const StockDetails: React.FC = ({
}) => {
    const router = useRouter().query

    const [brand, setBrand] = useState<string>('')

    const brandsItems = [
        {
            label: 'teste',
            value: 'teste'
        },
        {
            label: 'teste2',
            value: 'teste2'
        },
    ]

    const [model, setModel] = useState<string>('')

    const modelItems = [
        {
            label: 'teste',
            value: 'teste'
        },
        {
            label: 'teste2',
            value: 'teste2'
        },
    ]

    const [color, setColor] = useState<string>('')

    const colorItems = [
        {
            label: 'teste',
            value: 'teste'
        },
        {
            label: 'teste2',
            value: 'teste2'
        },
    ]

    const [grade, setGrade] = useState<string>('')

    const gradeItems = [
        {
            label: 'teste',
            value: 'teste'
        },
        {
            label: 'teste2',
            value: 'teste2'
        },
    ]

    const [storage, setStorage] = useState<string>('')

    const storageItems = [
        {
            label: 'teste',
            value: 'teste'
        },
        {
            label: 'teste2',
            value: 'teste2'
        },
    ]

    const [price, setPrice] = useState<string>('')
    const [cost, setCost] = useState<string>('')
    const [quantity, setQuantity] = useState<string>('')

    return (
        <View
            isEdit={!!router.isEdit}
            stock={{
                name: String(router.stockName) || null
            }}
            brandItems={brandsItems}
            brand={brand}
            setBrand={setBrand}
            modelItems={modelItems}
            model={model}
            setModel={setModel}
            colorItems={colorItems}
            color={color}
            setColor={setColor}
            gradeItems={gradeItems}
            grade={grade}
            setGrade={setGrade}
            storageItems={storageItems}
            storage={storage}
            setStorage={setStorage}
            price={price}
            setPrice={setPrice}
            cost={cost}
            setCost={setCost}
            quantity={quantity}
            setQuantity={setQuantity}
        />
    )
}

export default StockDetails;