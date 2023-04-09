import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxCommon from "@atomic/atoms/boxCommon";
import ItemCart from "@atomic/organisms/itemCart";
import BoxShadow from "@atomic/atoms/boxShadow";
import CheckBox from "@atomic/atoms/checkBox";
import RadioButton from "@atomic/atoms/radioButton";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    itemsPreview,
    itemsCart,
    selectedIncludeOutStock,
    setSelectedIncludeOutStock,
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
                <BoxShadow
                    title='Filters'
                    action={{ name: 'Clear', onClick: () => null }}
                    size={{ height: 'max-content' }}
                >
                    <BoxCommon gap='10px'>
                        <CheckBox
                            name='Include Out of Stock'
                            selected={selectedIncludeOutStock}
                            setSelected={() => setSelectedIncludeOutStock(!selectedIncludeOutStock)}
                            mt='10px'
                        />
                        <BoxCommon>
                            <h5 className='fontW400'>Grade</h5>
                            <CheckBox
                                name='Grade A'
                                value='85'
                                mt='10px'
                            />
                            <CheckBox
                                name='Grade B'
                                value='145'
                                mt='10px'
                            />
                            <CheckBox
                                name='Grade BX'
                                value='29'
                                mt='10px'
                            />
                            <CheckBox
                                name='Grade C'
                                value='131'
                                mt='10px'
                            />
                            <CheckBox
                                name='Grade FINGERPRINT'
                                value='21'
                                mt='10px'
                            />
                            <CheckBox
                                name='Grade PTG'
                                value='49'
                                mt='10px'
                            />
                        </BoxCommon>
                        <BoxCommon>
                            <h5 className='fontW400'>Manufacturer</h5>
                            <CheckBox
                                name='Apple'
                                value='452'
                                mt='10px'
                            />
                            <CheckBox
                                name='Samsung'
                                value='8'
                                mt='10px'
                            />
                        </BoxCommon>
                    </BoxCommon>
                </BoxShadow>
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