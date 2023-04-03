import React from "react";
import Head from "next/head";

import { green } from "@atomic/constants/colors";
import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import BoxCommon from "@atomic/atoms/boxCommon";
import Input from "@atomic/atoms/input";
import Button from "@atomic/atoms/button";
import Stamp from "@atomic/atoms/stamp";
import Select from "@atomic/atoms/select";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    isEdit,
    stock,
    brandItems,
    brand,
    setBrand,
    modelItems,
    model,
    setModel,
    colorItems,
    color,
    setColor,
    gradeItems,
    grade,
    setGrade,
    storageItems,
    storage,
    setStorage,
    price,
    setPrice,
    cost,
    setCost,
    quantity,
    setQuantity
}) => (
    <>
        <Head>
            <title>Stock Details - ShriCell</title>
        </Head>
        <Header title={isEdit ? stock.name : 'Add Stock'} />
        <main className="main">
            <BoxCommon flex={1} mt={useMediaQuery('(max-width: 1100px)') ? '0' : '-100px'} alignItems='center' gap='20px'>
                <BoxShadow size={{ width: useMediaQuery('(max-width: 1000px)') ? '100%' : 'max-content', height: 'max-content' }}>
                    <BoxCommon gap='20px' alignItems='center'>
                        <BoxCommon flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                            <Select label='Brand' options={brandItems} value={brand} onChange={setBrand} width='277px' />
                            <Select label='Model' options={modelItems} value={model} onChange={setModel} width='277px' />
                            <Select label='Color' options={colorItems} value={color} onChange={setColor} width='277px' />
                            <Select label='Grade' options={gradeItems} value={grade} onChange={setGrade} width='277px' />
                        </BoxCommon>
                        <BoxCommon flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                            <Select label='Storage' options={storageItems} value={storage} onChange={setStorage} width='277px' />
                            {
                                isEdit && (
                                    <>
                                        <Input label='Price' value={price} onChangeText={setPrice} />
                                        <Input label='Cost' value={cost} onChangeText={setCost} />
                                        <Input label='Quantity' value={quantity} onChangeText={setQuantity} />
                                    </>
                                )
                            }
                        </BoxCommon>
                        <Button text='Save' />
                    </BoxCommon>
                </BoxShadow>
                {
                    isEdit && (
                        <BoxShadow title='Billed amount' size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}>
                            <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                                <h2>$ 4239,12</h2>
                                <Stamp value='+7.3%' bgColor={green} />
                            </BoxCommon>
                        </BoxShadow>
                    )
                }
            </BoxCommon>
        </main>
    </>
)

export default View;