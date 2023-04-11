import React, { useEffect, useState } from "react";

import { HeaderItemsPreview } from "@atomic/constants/header";
import { OptionsType } from "@atomic/constants/select";

import { ItemsCart } from "@types/itemsCart";

import grades from "@api/stock/grades";
import devices from "@api/stock/devices";
import { GradesProps } from "@api/stock/grades/models";
import { DevicesProps } from "@api/stock/devices/models";

import View from "./view";

const itemsPreview: HeaderItemsPreview[] = [
    {
        icon: '',
        title: 'Cart',
        value: '34'
    },
]

const Dashboard: React.FC = ({
}) => {
    const [selectedIncludeOutStock, setSelectedIncludeOutStock] = useState<boolean>(false)
    
    const [gradesItems, setGradesItems] = useState<OptionsType[]>([])
    const [gradesSelecteds, setGradesSelecteds] = useState<OptionsType[]>([])

    const [devicesItems, setDevicesItems] = useState<ItemsCart[]>([])

    useEffect(() => {
        loadFilter()
        loadDevices()
    }, [])

    const loadFilter = () => {
        grades.listAll()
        .then((data: GradesProps[]) => {
            let array = data.map(item => (
                {
                    label: item.gradeName,
                    value: String(item.gradeId)
                }
            ))
            setGradesItems(array)
        })
    }

    const loadDevices = () => {
        devices.toSellCardList()
        .then((dataSell: DevicesProps[]) => {
            devices.listAll()
            .then((dataDevices: DevicesProps[]) => {
                let colors = dataDevices.map(itemColor => (
                    {
                        color: itemColor.color,
                        name: itemColor.color,
                        quantity: itemColor.quantityStock,
                        price: itemColor.salePrice
                    }
                ))

                let array = dataSell.map(item => (
                    {
                        brand: item.brand,
                        name: item.model,
                        storage: item.storage,
                        grade: item.gradeName,
                        quantity: item.quantityStock,
                        price: item.salePrice,
                        colors
                    }
                ))
                
                setDevicesItems(array)
            })
        })
    }

    return (
        <View
            itemsPreview={itemsPreview}
            selectedIncludeOutStock={selectedIncludeOutStock}
            setSelectedIncludeOutStock={setSelectedIncludeOutStock}
            gradesItems={gradesItems}
            gradesSelecteds={gradesSelecteds}
            setGradesSelecteds={setGradesSelecteds}
            devicesItems={devicesItems}
        />
    )
}

export default Dashboard;