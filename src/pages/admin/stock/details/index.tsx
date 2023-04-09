import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { OptionsType } from "@atomic/constants/select";

import brands from "@api/stock/brands";
import models from "@api/stock/models";
import colors from "@api/stock/colors";
import grades from "@api/stock/grades";
import storages from "@api/stock/storages";
import devices from "@api/stock/devices";
import { BrandProps } from "@api/stock/brands/models";
import { ModelsProps } from "@api/stock/models/models";
import { ColorsProps } from "@api/stock/colors/models";
import { GradesProps } from "@api/stock/grades/models";
import { StoragesProps } from "@api/stock/storages/models";

import View from "./view";

const StockDetails: React.FC = ({
}) => {
    const router = useRouter()

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
                    label: item.gradeName,
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

    const [fieldRequired, setFieldRequired] = useState<string>('')
    const [modalRequired, setModalRequired] = useState<boolean>(false)

    const save = () => {
        if (brand === '-1' || brand.length <= 0) {
            setFieldRequired('Brand')
            setModalRequired(true)
            return
        }

        if (model === '-1' || model.length <= 0) {
            setFieldRequired('Model')
            setModalRequired(true)
            return
        }

        if (color === '-1' || color.length <= 0) {
            setFieldRequired('Color')
            setModalRequired(true)
            return
        }

        if (grade === '-1' || grade.length <= 0) {
            setFieldRequired('Grade')
            setModalRequired(true)
            return
        }

        if (storage === '-1' || storage.length <= 0) {
            setFieldRequired('Storage')
            setModalRequired(true)
            return
        }

        if (!!!router.query.isEdit) {
            devices.insert({ brandId: brand, modelId: model, colorId: color, gradeId: grade, storageId: storage })
            .then(() => router.push('/stock'))
        } else {
            if (price === '-1' || price.length <= 0) {
                setFieldRequired('Price')
                setModalRequired(true)
                return
            }

            if (cost === '-1' || cost.length <= 0) {
                setFieldRequired('Cost')
                setModalRequired(true)
                return
            }

            if (quantity === '-1' || quantity.length <= 0) {
                setFieldRequired('Quantity')
                setModalRequired(true)
                return
            }
        }
    }

    return (
        <View
            isEdit={!!router.query.isEdit}
            stock={{
                name: String(router.query.stockName) || null
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
            save={save}
            fieldRequired={fieldRequired}
            modalRequired={modalRequired}
            setModalRequired={setModalRequired}
        />
    )
}

export default StockDetails;