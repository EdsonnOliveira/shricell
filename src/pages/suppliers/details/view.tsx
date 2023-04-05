import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import BoxCommon from "@atomic/atoms/boxCommon";
import Input from "@atomic/atoms/input";
import Button from "@atomic/atoms/button";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
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
}) => (
    <>
        <Head>
            <title>Supplier Details - ShriCell</title>
        </Head>
        <Header title='Supplier' />
        <main className="main">
            <BoxCommon flex={1} mt={useMediaQuery('(max-width: 1100px)') ? '0' : '-100px'} alignItems='center' gap='20px'>
                <BoxShadow size={{ width: useMediaQuery('(max-width: 1000px)') ? '100%' : 'max-content', height: 'max-content' }}>
                    <BoxCommon gap='20px' alignItems='center'>
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
                        <Button text='Save' onClick={() => null} />
                    </BoxCommon>
                </BoxShadow>
            </BoxCommon>
        </main>
    </>
)

export default View;