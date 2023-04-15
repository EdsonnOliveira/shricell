import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxCommon from "@atomic/atoms/boxCommon";
import ItemCart from "@atomic/organisms/itemCart";
import BoxShadow from "@atomic/atoms/boxShadow";
import CheckBox from "@atomic/atoms/checkBox";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    nameCustomer,
    itemsPreview,
    selectedIncludeOutStock,
    setSelectedIncludeOutStock,
    gradesItems,
    gradesSelecteds,
    setGradesSelecteds,
    manufacturerItems,
    manufacturerSelecteds,
    setManufacturerSelecteds,
    devicesItems
}) => (
    <>
        <Head>
            <title>Dashboard - ShriCell</title>
        </Head>
        <Header title={`Hello, ${nameCustomer}!`} itemsPreview={itemsPreview} bgColor='primary' />
        <main className="main">
            <BoxCommon
                flex={useMediaQuery('(max-width: 1100px)') ? 'unset' : '1'}
                width={useMediaQuery('(max-width: 1100px)') && '100%'}
                flexDirection={useMediaQuery('(max-width: 1100px)') ? 'column' : 'row'}
                gap='20px'
            >
                <BoxShadow
                    title='Filters'
                    action={{ name: 'Clear', onClick: () => null }}
                    size={{ height: 'max-content', ...useMediaQuery('(max-width: 1100px)') && { width: '100%' } }}
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
                            {
                                gradesItems.map(item => (
                                    <CheckBox
                                        name={`Grade ${item.label}`}
                                        value={item.value}
                                        mt='10px'
                                        selected={!!(gradesSelecteds && gradesSelecteds.find(grade => grade == item.label))}
                                        setSelected={() => setGradesSelecteds(item.label, 'G')}
                                    />
                                ))
                            }
                        </BoxCommon>
                        <BoxCommon>
                            <h5 className='fontW400'>Manufacturer</h5>
                            {
                                manufacturerItems.map(item => (
                                    <CheckBox
                                        name={`${item.label.toLowerCase()}`}
                                        value={item.value}
                                        mt='10px'
                                        selected={!!(manufacturerSelecteds && manufacturerSelecteds.find(manufacturer => manufacturer == item.label))}
                                        setSelected={() => setManufacturerSelecteds(item.label, 'M')}
                                    />
                                ))
                            }
                        </BoxCommon>
                    </BoxCommon>
                </BoxShadow>
                <BoxCommon
                    flex={useMediaQuery('(max-width: 1100px)') ? 'unset' : '1'}
                    width={useMediaQuery('(max-width: 1100px)') && '100%'}
                    gap='20px'
                >
                    {
                        devicesItems.map(item => (
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
            </BoxCommon>
        </main>
    </>
)

export default View;