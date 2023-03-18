import React from "react";
import Head from "next/head";

import { green, red } from "@atomic/constants/colors";
import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import Stamp from "@atomic/atoms/stamp";
import BoxCommon from "@atomic/atoms/boxCommon";
import Table from "@atomic/mocelules/table";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    latestSales
}) => (
    <>
        <Head>
            <title>Dashboard - ShriCell</title>
        </Head>
        <Header />
        <main className="main">
            <BoxCommon flex='1' flexDirection='row' gap='20px' flexWrap='wrap'>
                <BoxShadow title='Billed amount'>
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                        <h2>$ 4239,12</h2>
                        <Stamp value='+7.3%' bgColor={green} />
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow title='Cellphones sold' size={{ width: '630px', height: '440px' }}>

                </BoxShadow>
                <BoxShadow title='Cellphones'>
                <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                    <h2>78</h2>
                    <Stamp value='+10.1%' />
                </BoxCommon>
                </BoxShadow>
                <BoxShadow title='Latest sales' size={{ width: '100%' }}>
                    <Table
                        tr={latestSales}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
            <BoxCommon flex='0.3' gap='20px' mt='-100px'>
                <BoxShadow>
                    <BoxCommon alignItems='center' justifyContent='center' gap='10px' flex='1'>
                        <h3 className="fontW500">iPhone 14 Pro</h3>
                        <Stamp value='4' bgColor={red} />
                        <h6 className='fontGray fontW300'>Low stock</h6>
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow size={{height: '80px'}}>
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='center' gap='20px' flex='1'>
                        <h3 className="fontW500">Galaxy 22</h3>
                        <Stamp value='sold off' bgColor={red} />
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow size={{height: '80px'}}>
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