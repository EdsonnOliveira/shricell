import React from "react";
import Head from "next/head";

import { primary, green } from "@atomic/constants/colors";
import Header from "@atomic/organisms/header";
import BoxCommon from "@atomic/atoms/boxCommon";
import ItemCart from "@atomic/organisms/itemCart";
import BoxShadow from "@atomic/atoms/boxShadow";
import ModalRequired from "@atomic/mocelules/modalRequired";
import Stamp from "@atomic/atoms/stamp";
import Button from "@atomic/atoms/button";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    idUser,
    totalQuantity,
    totalValue,
    devicesItems,
    onClickBuy,
    fieldRequired,
    modalRequired,
    setModalRequired,
    finishCart,
}) => (
    <>
        <Head>
            <title>Cart - ShriCell</title>
        </Head>
        <Header bgColor='primary' size='small' />
        <main className="main">
            <BoxCommon
                flex={useMediaQuery('(max-width: 1100px)') ? 'unset' : '1'}
                // @ts-ignore
                width={useMediaQuery('(max-width: 1100px)') && '100%'}
                alignItems='center'
                flexDirection='column'
                gap='20px'
            >
                <BoxCommon
                    width='100%'
                    flexDirection={useMediaQuery('(max-width: 1100px)') ? 'column' : 'row'}
                    justifyContent='center'
                    gap='20px'
                >
                    <BoxShadow
                        // @ts-ignore
                        size={useMediaQuery('(max-width: 1100px)') && { width: '100%' }}
                    >
                        <BoxCommon alignItems='center' justifyContent='center' gap='10px' flex='1'>
                            <h3 className="fontW500">Items</h3>
                            <Stamp value={totalQuantity} bgColor={primary} />
                            <h6 className='fontGray fontW300'>Quantity of items</h6>
                        </BoxCommon>
                    </BoxShadow>
                    <BoxShadow
                        // @ts-ignore
                        size={useMediaQuery('(max-width: 1100px)') && { width: '100%' }}
                    >
                        <BoxCommon alignItems='center' justifyContent='center' gap='10px' flex='1'>
                            <h3 className="fontW500">Price</h3>
                            <Stamp value={`$ ${totalValue}`} bgColor={green} />
                            <h6 className='fontGray fontW300'>Sale price</h6>
                        </BoxCommon>
                    </BoxShadow>
                </BoxCommon>
                <BoxCommon
                    width='100%'
                    alignItems='center'
                >
                    <BoxCommon
                        width={useMediaQuery('(max-width: 1100px)') ? '100%' : '500px'}
                    >
                        <Button
                            text='Finish'
                            type='greenLarge'
                            onClick={() => finishCart()}
                            disabled={Number(totalQuantity) > 0 ? false : true}
                        />
                    </BoxCommon>
                </BoxCommon>
                <BoxCommon
                    flex={useMediaQuery('(max-width: 1100px)') ? 'unset' : '1'}
                    // @ts-ignore
                    width={useMediaQuery('(max-width: 1100px)') && '100%'}
                    gap='20px'
                >
                    {
                        devicesItems.map((item, index) => (
                            <ItemCart
                                idUser={idUser}
                                brand={item.brand}
                                name={item.name}
                                storage={item.storage}
                                grade={item.grade}
                                colors={item.colors}
                                quantity={item.quantity}
                                price={item.price}
                                onClickBuy={onClickBuy}
                                expandable={false}
                                key={index}
                            />
                        ))
                    }
                </BoxCommon>
            </BoxCommon>
            <ModalRequired field={fieldRequired} visible={modalRequired} onClose={() => setModalRequired(false)} />
        </main>
    </>
)

export default View;