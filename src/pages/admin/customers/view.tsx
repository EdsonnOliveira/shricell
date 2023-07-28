import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import BoxCommon from "@atomic/atoms/boxCommon";
import Button from "@atomic/atoms/button";
import Table from "@atomic/mocelules/table";
import Modal from "@atomic/mocelules/modal";
import Input from "@atomic/atoms/input";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    data,
    itemsPreview,
    modalAdd,
    setModalAdd,
    dunsNumber,
    setDunsNumber,
    federalTax,
    setFederalTax,
    companyLegal,
    setCompanyLegal,
    phone,
    setPhone,
    zipCode,
    setZipCode,
    companyAddress,
    setCompanyAddress,
    state,
    setState,
    city,
    setCity,
    country,
    setCountry,
    stateCorporation,
    setStateCorporation,
    typeIndustry,
    setTypeIndustry,
    emailCorporation,
    setEmailCorporation,
    businessIdentity,
    setBusinessIdentity,
    webSite,
    setWebSite,
    aboutUs,
    setAboutUs,
    saveCustomer
}) => (
    <>
        <Head>
            <title>Customers - ShriCell</title>
        </Head>
        <Header itemsPreview={itemsPreview} />
        <main className="main">
            <BoxCommon
                flex={1}
                gap='20px'
            >
                <Button
                    text='Add'
                    type={useMediaQuery('(max-width: 1000px)') ? 'primaryLarge' : 'primaryMedium'}
                    onClick={() => setModalAdd(true)}
                />
                <BoxShadow title='Customers' size={{ width: '100%', height: 'max-content' }}>
                    <Table
                        tr={data}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
            <Modal
                title='Add new customer'
                visible={modalAdd}
                onClose={() => setModalAdd(false)}
                firstButton={
                    {
                        type: 'primaryLarge',
                        text: 'Save',
                        onClick: () => saveCustomer()
                    }
                }
            >
                <BoxCommon gap='20px'>
                    <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input
                            label='DUNS'
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '140px'}
                            value={dunsNumber}
                            onChangeText={setDunsNumber}
                        />
                        <Input
                            label='Tax ID'
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '140px'}
                            value={federalTax}
                            onChangeText={setFederalTax}
                        />
                        <Input
                            label='Business ID'
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '140px'}
                            placeholder="Business"
                            value={businessIdentity}
                            onChangeText={setBusinessIdentity}
                        />
                        <Input
                            label='Phone'
                            placeholder="+00 00000-0000"
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'}
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </BoxCommon>
                    <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input
                            label='Company Legal Name'
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '400px'}
                            value={companyLegal}
                            onChangeText={setCompanyLegal}
                        />
                        <Input
                            label='E-Mail'
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '335px'}
                            value={emailCorporation}
                            onChangeText={setEmailCorporation}
                        />
                    </BoxCommon>
                    <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input
                            label='ZIP Code'
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '140px'}
                            value={zipCode}
                            onChangeText={setZipCode}
                        />
                        <Input
                            label='Address'
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '240px'}
                            value={companyAddress}
                            onChangeText={setCompanyAddress}
                        />
                        <Input
                            label='State'
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '140px'}
                            value={state}
                            onChangeText={setState}
                        />
                        <Input
                            label='City'
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '175px'}
                            value={city}
                            onChangeText={setCity}
                        />
                    </BoxCommon>
                    <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input
                            label='Country'
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '140px'}
                            value={country}
                            onChangeText={setCountry}
                        />
                        <Input
                            label='Web Site'
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '240px'}
                            value={webSite}
                            onChangeText={setWebSite}
                        />
                        <Input
                            label='Type Industry'
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '150px'}
                            placeholder="Type"
                            value={typeIndustry}
                            onChangeText={setTypeIndustry}
                        />
                        <Input
                            label='State Corp.'
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '165px'}
                            value={stateCorporation}
                            onChangeText={setStateCorporation}
                        />
                    </BoxCommon>
                </BoxCommon>
            </Modal>
        </main>
    </>
)

export default View;