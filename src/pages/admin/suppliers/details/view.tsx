import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import BoxCommon from "@atomic/atoms/boxCommon";
import Input from "@atomic/atoms/input";
import Button from "@atomic/atoms/button";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";
import ModalRequired from "~/atomic/mocelules/modalRequired";

const View: React.FC<ViewProps> = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    address,
    setAddress,
    city,
    setCity,
    state,
    setState,
    zipCode,
    setZipCode,
    save,
    fieldRequired,
    modalRequired,
    setModalRequired
}) => (
    <>
        <Head>
            <title>Supplier Details - ShriCell</title>
        </Head>
        <Header title={name} />
        <main className="main">
            <BoxCommon flex={1} mt={useMediaQuery('(max-width: 1100px)') ? '0' : '-100px'} alignItems='center' gap='20px'>
                <BoxShadow size={{ width: useMediaQuery('(max-width: 1000px)') ? '100%' : 'max-content', height: 'max-content' }}>
                    <BoxCommon gap='20px' alignItems='center'>
                        <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                            <Input label='Name' value={name} onChangeText={setName} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                            <Input label='Phone' value={phone} onChangeText={setPhone} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                            <Input label='Email' value={email} onChangeText={setEmail} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                        </BoxCommon>
                        <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                            <Input label='Address' value={address} onChangeText={setAddress} width='100%' />
                        </BoxCommon>
                        <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                            <Input label='City' value={city} onChangeText={setCity} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                            <Input label='State' value={state} onChangeText={setState} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                            <Input label='ZIP Code' value={zipCode} onChangeText={setZipCode} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                        </BoxCommon>
                        <Button text='Save' onClick={save} />
                    </BoxCommon>
                </BoxShadow>
            </BoxCommon>
            <ModalRequired field={fieldRequired} visible={modalRequired} onClose={() => setModalRequired(false)} />
        </main>
    </>
)

export default View;