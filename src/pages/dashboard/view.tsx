import React from "react";
import Head from "next/head";

import { green, red } from "@atomic/constants/colors";
import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import Stamp from "@atomic/atoms/stamp";
import BoxCommon from "@atomic/atoms/boxCommon";
import Table from "@atomic/mocelules/table";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    latestSales,
    itemsPreview
}) => (
    <>
        <Head>
            <title>Dashboard - ShriCell</title>
        </Head>
        <Header itemsPreview={itemsPreview} />
        <main className="main">
            <BoxCommon
                flex={useMediaQuery('(max-width: 1100px)') ? 'unset' : '1'}
                width={useMediaQuery('(max-width: 1100px)') && '100%'}
                flexDirection='row'
                gap='20px'
                flexWrap='wrap'
            >
                <BoxShadow title='Billed amount' size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}>
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                        <h2>$ 4239,12</h2>
                        <Stamp value='+7.3%' bgColor={green} />
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow title='Cellphones' size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}>
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                        <h2>78</h2>
                        <Stamp value='+10.1%' />
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow title='Cellphones sold' size={{ width: '100%' }}>

                </BoxShadow>
                <BoxShadow title='Latest sales' size={{ width: '100%' }}>
                    <Table
                        tr={latestSales}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
            <BoxCommon
                flex={useMediaQuery('(max-width: 1100px)') ? '1' : '0.4'}
                gap='20px'
                mt={useMediaQuery('(max-width: 1100px)') ? '0' : '-100px'}
            >
                <BoxShadow size={{ width: '100%' }}>
                    <BoxCommon alignItems='center' justifyContent='center' gap='10px' flex='1'>
                        <h3 className="fontW500">iPhone 14 Pro</h3>
                        <Stamp value='4' bgColor={red} />
                        <h6 className='fontGray fontW300'>Low stock</h6>
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow size={{ width: '100%', height: '80px' }}>
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='center' gap='20px' flex='1'>
                        <h3 className="fontW500">Galaxy 22</h3>
                        <Stamp value='sold off' bgColor={red} />
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow size={{ width: '100%', height: '80px' }}>
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='center' gap='20px' flex='1'>
                        <h3 className="fontW500">iPhone 11</h3>
                        <Stamp value='sold off' bgColor={red} />
                    </BoxCommon>
                </BoxShadow>
            </BoxCommon>
        </main>
    </>
)

export default View;