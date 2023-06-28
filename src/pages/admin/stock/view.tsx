import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import BoxCommon from "@atomic/atoms/boxCommon";
import Button from "@atomic/atoms/button";
import Table from "@atomic/mocelules/table";
import Modal from "@atomic/mocelules/modal";
import Input from "@atomic/atoms/input";
import ModalRequired from "@atomic/mocelules/modalRequired";
import Select from "@atomic/atoms/select";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    router,
    data,
    itemsPreview,
    modalSupplier,
    setModalSupplier,
    saveSupplier,
    nameSupplier,
    setNameSupplier,
    phoneSupplier,
    setPhoneSupplier,
    emailSupplier,
    setEmailSupplier,
    addressSupplier,
    setAddressSupplier,
    citySupplier,
    setCitySupplier,
    stateSupplier,
    setStateSupplier,
    zipCodeSupplier,
    setZipCodeSupplier,
    fieldRequired,
    modalRequired,
    setModalRequired,
    modalStock,
    setModalStock,
    supplierStock,
    setSupplierStock,
    setFilterNameSupplierStock,
    suppliersItems,
    quantityStock,
    setQuantityStock,
    unitPriceStock,
    setUnitPriceStock,
    annotationStock,
    setAnnotationStock,
    saveStock
}) => (
    <>
        <Head>
            <title>Stock - ShriCell</title>
        </Head>
        <Header itemsPreview={itemsPreview} />
        <main className="main">
            <BoxCommon
                flex={1}
                gap='20px'
            >
                <BoxCommon flexDirection='row' gap='20px' width='100%'>
                    <Button
                        text='Add device'
                        type={useMediaQuery('(max-width: 1000px)') ? 'primaryLarge' : 'primaryMedium'}
                        onClick={() => router.push('/admin/stock/details')}
                    />
                    <Button
                        text='Add supplier'
                        type={useMediaQuery('(max-width: 1000px)') ? 'primaryLarge' : 'primaryMedium'}
                        onClick={() => setModalSupplier(true)}
                    />
                </BoxCommon>
                <BoxShadow title='Devices' size={{ width: '100%', height: 'max-content' }}>
                    <Table
                        tr={data}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
            <Modal
                title='Add new supplier'
                visible={modalSupplier}
                onClose={() => setModalSupplier(false)}
                firstButton={
                    {
                        type: 'primaryLarge',
                        text: 'Save',
                        onClick: () => saveSupplier()
                    }
                }
            >
                <BoxCommon gap='20px'>
                    <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input label='Name' value={nameSupplier} onChangeText={setNameSupplier} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                        <Input label='Phone' value={phoneSupplier} onChangeText={setPhoneSupplier} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                        <Input label='Email' value={emailSupplier} onChangeText={setEmailSupplier} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                    </BoxCommon>
                    <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input label='Address' value={addressSupplier} onChangeText={setAddressSupplier} width='100%' />
                    </BoxCommon>
                    <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input label='City' value={citySupplier} onChangeText={setCitySupplier} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                        <Input label='State' value={stateSupplier} onChangeText={setStateSupplier} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                        <Input label='ZIP Code' value={zipCodeSupplier} onChangeText={setZipCodeSupplier} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                    </BoxCommon>
                </BoxCommon>
            </Modal>
            <Modal
                title='Add stock'
                visible={modalStock}
                onClose={() => setModalStock(false)}
                firstButton={
                    {
                        type: 'primaryLarge',
                        text: 'Save',
                        onClick: () => saveStock()
                    }
                }
            >
                <BoxCommon gap='20px'>
                    <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Select
                            label='Supplier'
                            options={suppliersItems}
                            isSearch
                            value={supplierStock?.label}
                            // @ts-ignore
                            onChange={(label: string, value: string) => setSupplierStock({label, value})}
                            onChangeText={setFilterNameSupplierStock}
                            width="100%"
                        />
                    </BoxCommon>
                    <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input label='Quantity' value={quantityStock} onChangeText={setQuantityStock} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                        <Input label='Unit Price' value={unitPriceStock} onChangeText={setUnitPriceStock} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                    </BoxCommon>
                    <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input label='Annotation' value={annotationStock} onChangeText={setAnnotationStock} width='100%' />
                    </BoxCommon>
                </BoxCommon>
            </Modal>
            <ModalRequired field={fieldRequired} visible={modalRequired} onClose={() => setModalRequired(false)} />
        </main>
    </>
)

export default View;