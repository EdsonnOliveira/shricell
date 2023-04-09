import React, { useState } from "react";

import { primary } from "@atomic/constants/colors";
import BoxCommon from "@atomic/atoms/boxCommon";
import BoxShadow from "@atomic/atoms/boxShadow";
import Brand from "@atomic/atoms/brand";
import Colors from "@atomic/atoms/colors";
import Stamp from "@atomic/atoms/stamp";
import Arrow from "@atomic/atoms/arrow";
import Button from "@atomic/atoms/button";

import { IndexProps } from "./models";

const ItemCart:React.FC<IndexProps> = ({
    brand,
    name,
    storage,
    grade,
    colors,
    quantity,
    price
}) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <BoxShadow size={{ flex: '1', height: 'max-content' }} onClick={() => setOpen(!open)}>
            <BoxCommon width='100%' height='100%' justifyContent='space-between' gap='20px'>
                <BoxCommon width='100%' flexDirection='row' justifyContent='space-between'>
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
                                    colors.map((item, index) => (
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
                                            <BoxCommon alignItems='center' flexDirection='row' gap='10px'>
                                                <Button text='Buy' type='secundarySmall' onClick={() => null} />
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
                            onClick={() => null}
                        />
                    </BoxCommon>
                    { !open && <h3 className="fontW500">$ { price }</h3> }
                </BoxCommon>
            </BoxCommon>
        </BoxShadow>
    )
}

export default ItemCart;