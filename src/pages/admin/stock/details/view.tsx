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
import ModalRequired from "@atomic/mocelules/modalRequired";

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
    setQuantity,
    save,
    fieldRequired,
    modalRequired,
    setModalRequired
}) => (
    <>
        <Head>
            <title>Stock Details - ShriCell</title>
        </Head>
        <Header title={isEdit ? stock.model : 'Add Stock'} />
        <main className="main">
            <BoxCommon flex={1} mt={useMediaQuery('(max-width: 1100px)') ? '0' : '-100px'} alignItems='center' gap='20px'>
                <BoxShadow size={{ width: useMediaQuery('(max-width: 1000px)') ? '100%' : 'max-content', height: 'max-content' }}>
                    <BoxCommon gap='20px' alignItems='center'>
                        <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                            <Select label='Brand' options={brandItems} value={brand} onChange={setBrand} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '277px'} />
                            <Select label='Model' options={modelItems} value={model} onChange={setModel} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '277px'} />
                            <Select label='Color' options={colorItems} value={color} onChange={setColor} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '277px'} />
                            <Select label='Grade' options={gradeItems} value={grade} onChange={setGrade} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '277px'} />
                        </BoxCommon>
                        <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                            <Select label='Storage' options={storageItems} value={storage} onChange={setStorage} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '277px'} />
                            {
                                isEdit && (
                                    <>
                                        <Input label='Price' value={price} onChangeText={setPrice} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '277px'} />
                                        <Input label='Cost' value={cost} onChangeText={setCost} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '277px'} />
                                        <Input label='Quantity' value={quantity} onChangeText={setQuantity} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '277px'} />
                                    </>
                                )
                            }
                        </BoxCommon>
                        <Button text='Save' onClick={save} />
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
            <ModalRequired field={fieldRequired} visible={modalRequired} onClose={() => setModalRequired(false)} />
        </main>
    </>
)

export default View;