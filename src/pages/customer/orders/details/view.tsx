import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import Table from "@atomic/mocelules/table";
import BoxCommon from "@atomic/atoms/boxCommon";
import Steps from "@atomic/mocelules/steps";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    steps,
    dataSale,
    dataItems,
    totalQuantity
}) => (
    <>
        <Head>
            <title>Order Details - ShriCell</title>
        </Head>
        <Header title={`#${dataSale.saleId}`} bgColor='primary' />
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
                        <Steps items={steps} currentStep={dataSale.status === 'APPROVED' ? 3 : 1} />
                    </BoxCommon>
                </BoxShadow>
                {/* @ts-ignore */}
                <BoxShadow title='Amount' size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}>
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                        <h2>$ { dataSale.saleValue }</h2>
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