import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxCommon from "@atomic/atoms/boxCommon";

import useMediaQuery from "@hooks/useMediaQuery";

const View: React.FC = ({}) => (
    <>
        <Head>
            <title>Order Success - ShriCell</title>
        </Head>
        <Header title='Success !' bgColor='green' />
        <main className="main">
            <BoxCommon
                flex={useMediaQuery('(max-width: 1100px)') ? 'unset' : '1'}
                // @ts-ignore
                width={useMediaQuery('(max-width: 1100px)') && '100%'}
                height='35vh'
                flexDirection={useMediaQuery('(max-width: 1100px)') ? 'column' : 'row'}
                gap='20px'
                justifyContent='center'
                alignItems='center'
            >
                <h3 className="fontBlack fontW400 fontCenter">
                    Your order is already being processed,<br />
                    it will be approved in a few moments.
                </h3>
            </BoxCommon>
        </main>
    </>
)

export default View;