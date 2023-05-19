import React, { useEffect, useState } from "react";

import { primary } from "@atomic/constants/colors";
import BoxCommon from "@atomic/atoms/boxCommon";
import BoxShadow from "@atomic/atoms/boxShadow";
import Brand from "@atomic/atoms/brand";
import Colors from "@atomic/atoms/colors";
import Stamp from "@atomic/atoms/stamp";
import Arrow from "@atomic/atoms/arrow";
import Button from "@atomic/atoms/button";
import Input from "@atomic/atoms/input";

import cart from "@api/sales/cart";
import { CartProps } from "@api/sales/cart/models";

import { IndexProps } from "./models";

const ItemCart:React.FC<IndexProps> = ({
    idUser,
    brand,
    name,
    storage,
    grade,
    colors,
    quantity,
    onClickBuy,
    price,
    expandable = true
}) => {
    const [open, setOpen] = useState<boolean>(!!!expandable)

    const [itemUpdate, setItemUpdate] = useState<[string]>([''])
    const [qt, setQt] = useState({})

    const changeQt = (e: any) => {
        setQt({ ...qt, [e.target.id]: e.target.value })
    }

    useEffect(() => {
        findQt()
    }, [])

    const findQt = () => {
        cart.listAll({ customerId: idUser })
        // @ts-ignore
        .then((data: CartProps[]) => {
            let qtDefault = {}
            let itemsUpdate:[string] = ['']
            
            colors && colors.map(item => {
                let obj = data.findIndex(value => value.deviceId === item.deviceId && value.colorId === item.colorId)
                if (obj >= 0) {
                    // @ts-ignore
                    qtDefault[`i${String(item.deviceId) + String(item.colorId)}`] = data[obj]?.quantity
                    itemsUpdate.push(`i${String(item.deviceId) + String(item.colorId)}`)
                } else
                // @ts-ignore
                    qtDefault[`i${String(item.deviceId) + String(item.colorId)}`] = '0'
            })
            
            console.log(qtDefault)
            setQt(qtDefault)
            setItemUpdate(itemsUpdate)
        })
        .catch(() => null)
    }

    const configButton = (deviceId: string, colorId: string) => {
        let obj = itemUpdate.findIndex(value => value === `i${String(deviceId) + String(colorId)}`)
        // @ts-ignore
        if (Number(qt[`i${String(deviceId) + String(colorId)}`]) > 0)
            return obj >= 0 ? { text: 'Update', index: obj } : { text: 'Buy', index: obj }
        else
            return obj >= 0 ? { text: 'Delete', index: obj } : { text: 'Buy', index: obj }
    }

    return (
        <BoxShadow size={{ width: '100%', height: 'max-content', maxWidth: '1000px' }}>
            <BoxCommon width='100%' height='100%' justifyContent='space-between' gap='20px'>
                <BoxCommon width='100%' flexDirection='row' justifyContent='space-between' onClick={() => expandable && setOpen(!open)}>
                    <BoxCommon flexDirection='row' alignItems='center' gap='15px'>
                        <Brand type={brand} />
                        <h3 className="fontW500">{`${name} - ${storage}`}</h3>
                    </BoxCommon>
                    <Stamp bgColor='transparent' value={`Grade ${grade}`} color='fontGray' borderColor={primary} />
                </BoxCommon>
                {
                    open && (
                        <BoxCommon
                            width='100%'
                            justifyContent='center'
                            alignItems='center'
                            gap='10px'
                        >
                                {
                                    colors && colors.map((item, index) => (
                                        <BoxCommon
                                            flexDirection='row'
                                            gap='40px'
                                            alignItems='center'
                                            justifyContent='space-between'
                                            key={index}
                                        >
                                            <BoxCommon width='150px' flexDirection='row' gap='10px'>
                                                <Colors color={item.color} />
                                                <h5 className="fontW400">{ item.name }</h5>
                                            </BoxCommon>
                                            <BoxCommon>
                                                <Stamp bgColor='transparent' value={item.quantity} color='fontGray' borderColor={primary} />
                                            </BoxCommon>
                                            <BoxCommon width='80px' alignItems='center'>
                                                <h5 className="fontW500">${ item.price }</h5>
                                            </BoxCommon>
                                            <BoxCommon>
                                                <Input
                                                    id={`i${String(item.deviceId) + String(item.colorId)}`}
                                                    // @ts-ignore
                                                    value={qt[`i${String(item.deviceId) + String(item.colorId)}`] || '0'}
                                                    onChangeText={changeQt}
                                                    changeComplete
                                                    width='100px'
                                                    textAlign='center'
                                                    type='number'
                                                    max={Number(item.quantity)}
                                                    min={0}
                                                />
                                            </BoxCommon>
                                            <BoxCommon alignItems='center' flexDirection='row' gap='10px'>
                                                <Button
                                                    text={configButton(item.deviceId, item.colorId).text}
                                                    type={configButton(item.deviceId, item.colorId).text == 'Delete' &&
                                                        Number(configButton(item.deviceId, item.colorId).index) >= 0 ? 'redLightSmall' : 'secundarySmall'}
                                                        // @ts-ignore
                                                    onClick={() => onClickBuy(item.deviceId, qt[`i${String(item.deviceId) + String(item.colorId)}`], item.price, configButton(item.deviceId, item.colorId).text)}
                                                    // @ts-ignore
                                                    disabled={Number(qt[`i${String(item.deviceId) + String(item.colorId)}`]) > Number(item.quantity) }
                                                />
                                                { expandable && <Button text='Offer' type='primarySmall' onClick={() => null} /> }
                                            </BoxCommon>
                                        </BoxCommon>
                                    ))
                                }
                        </BoxCommon>
                    )
                }
                <BoxCommon
                    width='100%'
                    flexDirection='row'
                    justifyContent={open ? 'center' : 'space-between'}
                    alignItems='flex-end'
                    onClick={() => expandable && setOpen(!open)}
                >
                    {
                        !open && (
                            <BoxCommon flexDirection='row' alignItems='center' gap='15px'>
                                <Colors items={colors} />
                                <Stamp bgColor={primary} value={quantity} color='fontWhite' />
                            </BoxCommon>
                        )
                    }
                    {
                        expandable && (
                            <BoxCommon mb='-13px'>
                                <Arrow
                                    direction={open ? 'top' : 'bottom'}
                                    onClick={() => expandable && setOpen(!open)}
                                />
                            </BoxCommon>
                        )
                    }
                    { !open && <h3 className="fontW500">$ { price }</h3> }
                </BoxCommon>
            </BoxCommon>
        </BoxShadow>
    )
}

export default ItemCart;