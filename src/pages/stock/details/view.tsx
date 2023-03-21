import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import BoxCommon from "@atomic/atoms/boxCommon";
import Input from "@atomic/atoms/input";
import Button from "@atomic/atoms/button";
import Stamp from "@atomic/atoms/stamp";
import { green } from "@atomic/constants/colors";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({}) => (
    <>
        <Head>
            <title>Stock - ShriCell</title>
        </Head>
        <Header title='iPhone 14 Pro Max' />
        <main className="main">
            <BoxCommon flex={1} mt={useMediaQuery('(max-width: 1100px)') ? '0' : '-100px'} alignItems='center' gap='20px'>
                <BoxShadow size={{ width: 'max-content', height: 'max-content' }}>
                    <BoxCommon gap='20px' alignItems='center'>
                        <BoxCommon flexDirection='row' gap='20px'>
                            <Input placeholder='Brand' label='Brand' />
                            <Input placeholder='Model' label='Model' />
                            <Input placeholder='Color' label='Color' />
                        </BoxCommon>
                        <BoxCommon flexDirection='row' gap='20px'>
                            <Input placeholder='Storage' label='Storage' />
                            <Input placeholder='Price' label='Price' />
                            <Input placeholder='Cost' label='Cost' />
                            <Input placeholder='Quantity' label='Quantity' />
                        </BoxCommon>
                        <Button text='Save' />
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow title='Billed amount' size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}>
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                        <h2>$ 4239,12</h2>
                        <Stamp value='+7.3%' bgColor={green} />
                    </BoxCommon>
                </BoxShadow>
            </BoxCommon>
        </main>
    </>
)

export default View;