import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxCommon from "@atomic/atoms/boxCommon";
import ItemCart from "@atomic/organisms/itemCart";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    itemsPreview,
    itemsCart
}) => (
    <>
        <Head>
            <title>Dashboard - ShriCell</title>
        </Head>
        <Header title='Hello, Customer!' itemsPreview={itemsPreview} bgColor='primary' />
        <main className="main">
            <BoxCommon
                flex={useMediaQuery('(max-width: 1100px)') ? 'unset' : '1'}
                width={useMediaQuery('(max-width: 1100px)') && '100%'}
                flexDirection='row'
                gap='20px'
                flexWrap='wrap'
            >
                {
                    itemsCart.map(item => (
                        <ItemCart
                            brand={item.brand}
                            name={item.name}
                            storage={item.storage}
                            grade={item.grade}
                            colors={item.colors}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    ))
                }
            </BoxCommon>
        </main>
    </>
)

export default View;