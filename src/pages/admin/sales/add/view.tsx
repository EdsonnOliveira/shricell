import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import BoxCommon from "@atomic/atoms/boxCommon";
import ItemCart from "@atomic/organisms/itemCart";
import Select from "@atomic/atoms/select";
import ModalRequired from "@atomic/mocelules/modalRequired";

import useMediaQuery from "@hooks/useMediaQuery";
import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    setUser,
    user,
    userItems,
    devicesItems,
    onClickBuy,
    fieldRequired,
    modalRequired,
    setModalRequired
}) => (
    <>
        <Head>
            <title>Sales Details - ShriCell</title>
        </Head>
        <Header title='New sale' />
        <main className="main">
            <BoxCommon
                flex={useMediaQuery('(max-width: 1100px)') ? 'unset' : '1'}
                // @ts-ignore
                width={useMediaQuery('(max-width: 1100px)') && '100%'}
                flexDirection={useMediaQuery('(max-width: 1100px)') ? 'column' : 'row'}
                gap='20px'
                justifyContent='center'
            >
                <BoxShadow
                    title='User'
                    size={{ height: 'max-content', ...useMediaQuery('(max-width: 1100px)') && { width: '100%' } }}
                >
                    <Select label='Select the User' options={userItems} value={user} onChange={setUser} width={useMediaQuery('(max-width: 1000px)') ? '100%' : '277px'} />
                </BoxShadow>
                <BoxCommon
                    width={useMediaQuery('(max-width: 1100px)') ? '100%' : '900px'}
                    gap='20px'
                >
                    {
                        devicesItems && devicesItems.map((item, index) => (
                            <ItemCart
                                idUser={user}
                                brand={item.brand}
                                name={item.name}
                                storage={item.storage}
                                grade={item.grade}
                                colors={item.colors}
                                quantity={item.quantity}
                                price={item.price}
                                onClickBuy={onClickBuy}
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