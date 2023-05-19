import React from "react";
import Head from "next/head";

import { green, red } from "@atomic/constants/colors";
import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import BoxCommon from "@atomic/atoms/boxCommon";
import Stamp from "@atomic/atoms/stamp";
import Table from "@atomic/mocelules/table";
import Modal from "@atomic/mocelules/modal";
import Input from "@atomic/atoms/input";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    isEdit,
    dataCustomer,
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
    latestSales,
    modalDetails,
    setModalDetails,
    billedAmount
}) => (
    <>
        <Head>
            <title>Customer Details - ShriCell</title>
        </Head>
        <Header title={isEdit ? dataCustomer.companyName : 'Add Stock'} />
        <main className="main">
            <BoxCommon
                flex={1}
                mt={useMediaQuery('(max-width: 1100px)') ? '0' : '-100px'}
                alignItems='center'
                gap='20px'
                flexDirection='row'
                flexWrap='wrap'
            >
                <BoxShadow
                    size={{ width: useMediaQuery('(max-width: 1100px)') ? '100%' : '400px' }}
                    onClick={() => setModalDetails(true)}
                >
                    <BoxCommon alignItems='center' justifyContent='center' gap='10px' flex='1'>
                        <h3 className="fontW500">{ dataCustomer?.companyName }</h3>
                        <h6 className='fontW300'>{ dataCustomer?.phone }</h6>
                        <h6 className='fontW300'>{ dataCustomer?.email }</h6>
                        <Stamp value={dataCustomer?.status} bgColor={dataCustomer?.status ? green : red} />
                        <h6 className='fontGray fontW300'>Click to show details</h6>
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow
                    title='Billed amount in the month'
                    // @ts-ignore
                    size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}
                >
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                        <h2>$ { billedAmount }</h2>
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow title='Latest sales' size={{ width: '100%', height: 'max-content' }}>
                    <Table
                        tr={latestSales}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
            <Modal
                title='Details customer'
                visible={modalDetails}
                onClose={() => setModalDetails(false)}
                firstButton={
                    {
                        type: 'redLightLarge',
                        text: 'Delete',
                        onClick: () => console.log('click')
                    }
                }
                secondButton={
                    {
                        type: 'primaryLarge',
                        text: 'Update',
                        onClick: () => console.log('click')
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
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : '140px'} placeholder="Business"
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
                    <BoxCommon flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input
                            label='Company Legal Name' width="400px"
                            value={companyLegal}
                            onChangeText={setCompanyLegal}
                        />
                        <Input
                            label='E-Mail'
                            width="335px"
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