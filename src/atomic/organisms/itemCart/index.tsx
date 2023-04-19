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

import { IndexProps } from "./models";
import { CartProps } from "~/services/api/sales/cart/models";

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
    showItems
}) => {
    const [open, setOpen] = useState<boolean>(false)

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
        .then((data: CartProps[]) => {
            let qtDefault = {}
            let itemsUpdate:[string] = ['']

            colors.map((item, index) => {
                let obj = data.findIndex(value => value.deviceId === item.deviceId && value.colorId === item.colorId)
                if (obj >= 0) {
                    qtDefault[`i${String(item.deviceId) + String(item.colorId)}`] = data[obj]?.quantity
                    itemsUpdate.push(`i${String(item.deviceId) + String(item.colorId)}`)
                } else {
                    qtDefault[`i${String(item.deviceId) + String(item.colorId)}`] = '0'
                }
            })

            setQt(qtDefault)
            setItemUpdate(itemsUpdate)
        })
    }

    const configButton = (deviceId: string, colorId: string) => {
        let obj = itemUpdate.findIndex(value => value === `i${String(deviceId) + String(colorId)}`)
        if (Number(qt[`i${String(deviceId) + String(colorId)}`]) > 0) {
            if (obj >= 0) {
                return 'Update'
            } else {
                return 'Buy'
            }
        } else {
            return 'Delete'
        }

    }

    return (
        <BoxShadow size={{ width: '100%', height: 'max-content' }}>
            <BoxCommon width='100%' height='100%' justifyContent='space-between' gap='20px'>
                <BoxCommon width='100%' flexDirection='row' justifyContent='space-between' onClick={() => showItems && setOpen(!open)}>
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
                                    colors.map(item => (
                                        <BoxCommon
                                            flexDirection='row'
                                            gap='40px'
                                            alignItems='center'
                                            justifyContent='space-between'
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
                                                    text={configButton(item.deviceId, item.colorId)}
                                                    type={configButton(item.deviceId, item.colorId) != 'Delete' ? 'secundarySmall' : 'redLightSmall'}
                                                    onClick={() => onClickBuy(item.deviceId, qt[`i${String(item.deviceId) + String(item.colorId)}`], item.price)}
                                                    disabled={Number(qt[`i${String(item.deviceId) + String(item.colorId)}`]) > Number(item.quantity) }
                                                />
                                                <Button text='Offer' type='primarySmall' onClick={() => null} />
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
                    onClick={() => showItems && setOpen(!open)}
                >
                    {
                        !open && (
                            <BoxCommon flexDirection='row' alignItems='center' gap='15px'>
                                <Colors items={colors} />
                                <Stamp bgColor={primary} value={quantity} color='fontWhite' />
                            </BoxCommon>
                        )
                    }
                    <BoxCommon mb='-13px'>
                        <Arrow
                            direction={open ? 'top' : 'bottom'}
                            onClick={() => showItems && setOpen(!open)}
                        />
                    </BoxCommon>
                    { !open && <h3 className="fontW500">$ { price }</h3> }
                </BoxCommon>
            </BoxCommon>
        </BoxShadow>
    )
}

export default ItemCart;