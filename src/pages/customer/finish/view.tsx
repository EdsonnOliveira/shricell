import React from "react";
import Head from "next/head";

import { grey } from "@atomic/constants/colors";
import Header from "@atomic/organisms/header";
import BoxCommon from "@atomic/atoms/boxCommon";
import BoxShadow from "@atomic/atoms/boxShadow";
import ModalRequired from "@atomic/mocelules/modalRequired";
import FileDnD from "@atomic/mocelules/fileDnD";
import Button from "@atomic/atoms/button";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    itemsPreview,
    banks,
    payment,
    setPayment,
    finishCart,
    fieldRequired,
    modalRequired,
    setModalRequired
}) => (
    <>
        <Head>
            <title>Finish Order - ShriCell</title>
        </Head>
        <Header title='Finish order' itemsPreview={itemsPreview} bgColor='primary' />
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
                    title='Banks'
                    size={{ height: 'max-content', ...useMediaQuery('(max-width: 1100px)') && { width: '100%' } }}
                >
                    {
                        banks.map((item, index) => (
                            <BoxCommon
                                gap='10px'
                                bgColor={grey}
                                pt='10px'
                                pr='10px'
                                pb='10px'
                                pl='10px'
                                mt='10px'
                                borderRadius='10px'
                                key={index}
                            >
                                <BoxCommon>
                                    <h5>Bank:</h5>
                                    <h5 className='fontW300'>{ item.bank }</h5>
                                </BoxCommon>
                                <BoxCommon>
                                    <h5>Account Number:</h5>
                                    <h5 className='fontW300'>{ item.accountNumber }</h5>
                                </BoxCommon>
                                <BoxCommon>
                                    <h5>Routing Number:</h5>
                                    <h5 className='fontW300'>{ item.routingNumber }</h5>
                                </BoxCommon>
                                <BoxCommon>
                                    <h5>Business Name:</h5>
                                    <h5 className='fontW300'>{ item.businessName }</h5>
                                </BoxCommon>
                                <BoxCommon>
                                    <h5>Business Address:</h5>
                                    <h5 className='fontW300'>{ item.businessAddress }</h5>
                                </BoxCommon>
                            </BoxCommon>
                        ))
                    }
                </BoxShadow>
                <BoxCommon
                    width={useMediaQuery('(max-width: 1100px)') ? '100%' : '900px'}
                    gap='20px'
                >
                    <BoxShadow
                        size={{ width: '100%' }}
                    >
                        <h3 className='fontW500'>Payment Receipt</h3>
                        <FileDnD
                            file={payment}
                            setFile={setPayment}
                            accept='.png, .jpg, .jpeg, .pdf'
                            mt='10px'
                        />
                    </BoxShadow>
                    <Button
                        text='Finish'
                        type='greenLarge'
                        onClick={() => finishCart()}
                        disabled={payment ? false : true}
                    />
                </BoxCommon>
            </BoxCommon>
            <ModalRequired field={fieldRequired} visible={modalRequired} onClose={() => setModalRequired(false)} />
        </main>
    </>
)

export default View;