import React from "react";
import Head from "next/head";

import { primary } from "@atomic/constants/colors";
import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import BoxCommon from "@atomic/atoms/boxCommon";
import Button from "@atomic/atoms/button";
import Stamp from "@atomic/atoms/stamp";
import Table from "@atomic/mocelules/table";
import Steps from "@atomic/mocelules/steps";

import useMediaQuery from "@hooks/useMediaQuery";
import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    dataItems,
    dataSale,
    steps,
    totalQuantity,
    confirmPayment,
    denyPayment,
    totalSales
}) => (
    <>
        <Head>
            <title>Sales Details - ShriCell</title>
        </Head>
        <Header title={`#${dataSale?.saleId}`} />
        <main className="main">
            <BoxCommon
                flex={useMediaQuery('(max-width: 1100px)') ? 'unset' : '1'}
                // @ts-ignore
                width={useMediaQuery('(max-width: 1100px)') && '100%'}
                flexDirection='row'
                gap='20px'
                flexWrap='wrap'
                mt={useMediaQuery('(max-width: 1100px)') ? '0' : '-100px'}
            >
                <BoxShadow size={{ width: useMediaQuery('(max-width: 1600px)') ? '100%' : '800px', height: 'max-content'}}>
                    <BoxCommon alignItems='center' justifyContent='center' gap='25px' flex='1'>
                        <Steps items={steps} currentStep={dataSale?.status === 'APPROVED' ? 3 : 1} />
                        {
                            dataSale && dataSale?.status === 'PENDING' && (
                                <BoxCommon width='100%' gap='10px'>
                                    <Button type='greenLarge' text='Confirm payment' onClick={() => confirmPayment()} />
                                    <Button type='redLightLarge' text='Deny payment' onClick={() => denyPayment()} />
                                </BoxCommon>
                            )
                        }
                    </BoxCommon>
                </BoxShadow>
                {/* @ts-ignore */}
                <BoxShadow size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}>
                    <BoxCommon alignItems='center' justifyContent='center' gap='10px' flex='1'>
                        <h3 className="fontW500">{ dataSale?.companyName }</h3>
                        <Stamp value={totalSales} bgColor={primary} />
                        <h6 className='fontGray fontW300'>This month</h6>
                    </BoxCommon>
                </BoxShadow>
                {/* @ts-ignore */}
                <BoxShadow title='Amount' size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}>
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                        <h2>$ { dataSale?.saleValue }</h2>
                    </BoxCommon>
                </BoxShadow>
                {/* @ts-ignore */}
                <BoxShadow title='Items' size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}>
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                        <h2>{ totalQuantity }</h2>
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow title='Items' size={{ width: '100%', height: 'max-content' }}>
                    <Table
                        tr={dataItems}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
        </main>
    </>
)

export default View;