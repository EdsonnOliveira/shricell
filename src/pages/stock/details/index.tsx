import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { OptionsType } from "@atomic/constants/select";

import brands from "@api/stock/brands";
import models from "@api/stock/models";
import colors from "@api/stock/colors";
import grades from "@api/stock/grades";
import storages from "@api/stock/storages";
import { BrandProps } from "@api/stock/brands/models";
import { ModelsProps } from "@api/stock/models/models";
import { ColorsProps } from "@api/stock/colors/models";
import { GradesProps } from "@api/stock/grades/models";
import { StoragesProps } from "@api/stock/storages/models";

import View from "./view";

const StockDetails: React.FC = ({
}) => {
    const router = useRouter().query

    const [brand, setBrand] = useState<string>('')
    const [brandsItems, setBrandsItems] = useState<OptionsType[]>([{ label: 'Select the Brand', value: '-1' }])

    const [model, setModel] = useState<string>('')
    const [modelsItems, setModelsItems] = useState<OptionsType[]>([{ label: 'Select the Model', value: '-1' }])

    const [color, setColor] = useState<string>('')
    const [colorsItems, setColorsItems] = useState<OptionsType[]>([{ label: 'Select the Color', value: '-1' }])

    const [grade, setGrade] = useState<string>('')
    const [gradesItems, setGradesItems] = useState<OptionsType[]>([{ label: 'Select the Grade', value: '-1' }])

    const [storage, setStorage] = useState<string>('')
    const [storagesItems, setStoragesItems] = useState<OptionsType[]>([{ label: 'Select the Storage', value: '-1' }])

    const [price, setPrice] = useState<string>('')
    const [cost, setCost] = useState<string>('')
    const [quantity, setQuantity] = useState<string>('')

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        brands.listAll()
        .then((data: BrandProps[]) => {
            let options: OptionsType[] = [{ label: 'Select the Brand', value: '-1' }]
            let array = data.map(item => (
                {
                    label: item.brand,
                    value: String(item.brandId)
                }
            ))
            setBrandsItems([...options, ...array])
        })

        grades.listAll()
        .then((data: GradesProps[]) => {
            let options: OptionsType[] = [{ label: 'Select the Grade', value: '-1' }]
            let array = data.map(item => (
                {
                    label: item.gradeDescription,
                    value: String(item.gradeId)
                }
            ))
            setGradesItems([...options, ...array])
        })

        storages.listAll()
        .then((data: StoragesProps[]) => {
            let options: OptionsType[] = [{ label: 'Select the Storages', value: '-1' }]
            let array = data.map(item => (
                {
                    label: item.storage,
                    value: String(item.storageId)
                }
            ))
            setStoragesItems([...options, ...array])
        })
    }

    useEffect(() => {
        loadModels()
    }, [brand])

    const loadModels = () => {
        if (brand === '-1' || brand.length <= 0)
            return

        setModelsItems([{label: 'Loading...', value: '-1'}])
        setModel('-1')
        
        models.listAll({ brandId: brand })
        .then((data: ModelsProps[]) => {
            let options: OptionsType[] = [{ label: 'Select the Model', value: '-1' }]
            let array = data.map(item => (
                {
                    label: item.model,
                    value: String(item.modelId)
                }
            ))
            setModelsItems([...options, ...array])
        })
    }

    useEffect(() => {
        loadColors()
    }, [model])

    const loadColors = () => {
        if (model === '-1' || model.length <= 0)
            return

        setColorsItems([{label: 'Loading...', value: '-1'}])
        setColor('-1')
        
        colors.listAll({ brandId: brand, modelId: model })
        .then((data: ColorsProps[]) => {
            let options: OptionsType[] = [{ label: 'Select the Color', value: '-1' }]
            let array = data.map(item => (
                {
                    label: item.color,
                    value: String(item.colorId)
                }
            ))
            setColorsItems([...options, ...array])
        })
    }

    return (
        <View
            isEdit={!!router.isEdit}
            stock={{
                name: String(router.stockName) || null
            }}
            brandItems={brandsItems}
            brand={brand}
            setBrand={setBrand}
            modelItems={modelsItems}
            model={model}
            setModel={setModel}
            colorItems={colorsItems}
            color={color}
            setColor={setColor}
            gradeItems={gradesItems}
            grade={grade}
            setGrade={setGrade}
            storageItems={storagesItems}
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