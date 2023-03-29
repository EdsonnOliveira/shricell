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
    items,
    steps
}) => (
    <>
        <Head>
            <title>Sales Details - ShriCell</title>
        </Head>
        <Header title='#134' />
        <main className="main">
            <BoxCommon
                flex={useMediaQuery('(max-width: 1100px)') ? 'unset' : '1'}
                width={useMediaQuery('(max-width: 1100px)') && '100%'}
                flexDirection='row'
                gap='20px'
                flexWrap='wrap'
                mt={useMediaQuery('(max-width: 1100px)') ? '0' : '-100px'}
            >
                <BoxShadow size={{ width: useMediaQuery('(max-width: 1600px)') ? '100%' : '800px', height: 'max-content'}}>
                    <BoxCommon alignItems='center' justifyContent='center' gap='25px' flex='1'>
                        <Steps items={steps} currentStep={1} />
                        <Button type='greenLarge' text='Confirm payment' />
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}>
                    <BoxCommon alignItems='center' justifyContent='center' gap='10px' flex='1'>
                        <h3 className="fontW500">iTech</h3>
                        <Stamp value='4' bgColor={primary} />
                        <h6 className='fontGray fontW300'>This month</h6>
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow title='Amount' size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}>
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                        <h2>$ 1598,00</h2>
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow title='Items' size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}>
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                        <h2>2</h2>
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow title='Items' size={{ width: '100%', height: 'max-content' }}>
                    <Table
                        tr={items}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
        </main>
    </>
)

export default View;