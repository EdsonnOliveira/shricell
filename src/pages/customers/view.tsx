import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import BoxCommon from "@atomic/atoms/boxCommon";
import Button from "@atomic/atoms/button";
import Table from "@atomic/mocelules/table";
import Modal from "@atomic/mocelules/modal";
import Input from "@atomic/atoms/input";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    router,
    data,
    itemsPreview,
    modalAdd,
    setModalAdd
}) => (
    <>
        <Head>
            <title>Customers - ShriCell</title>
        </Head>
        <Header itemsPreview={itemsPreview} />
        <main className="main">
            <BoxCommon
                flex={1}
                gap='20px'
            >
                <Button
                    text='Add'
                    type={useMediaQuery('(max-width: 1000px)') ? 'primaryLarge' : 'primaryMedium'}
                    onClick={() => setModalAdd(true)}
                />
                <BoxShadow title='Items' size={{ width: '100%', height: 'max-content' }}>
                    <Table
                        tr={data}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
            <Modal
                title='Add new customer'
                visible={modalAdd}
                onClose={() => setModalAdd(false)}
                firstButton={
                    {
                        type: 'primaryLarge',
                        text: 'Save',
                        onClick: () => console.log('click')
                    }
                }
            >
                <BoxCommon gap='20px'>
                    <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input label='DUNS' width={useMediaQuery('(max-width: 1000px)') ? '100%' : '140px'} />
                        <Input label='Tax ID' width={useMediaQuery('(max-width: 1000px)') ? '100%' : '140px'} />
                        <Input label='Business ID' width={useMediaQuery('(max-width: 1000px)') ? '100%' : '140px'} placeholder="Business" />
                        <Input label='Phone' placeholder="+00 00000-0000" width={useMediaQuery('(max-width: 1000px)') ? '100%' : '275px'} />
                    </BoxCommon>
                    <BoxCommon flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input label='Company Legal Name' width="400px" />
                        <Input label='E-Mail' width="335px" />
                    </BoxCommon>
                    <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input label='ZIP Code' width={useMediaQuery('(max-width: 1000px)') ? '100%' : '140px'} />
                        <Input label='Address' width={useMediaQuery('(max-width: 1000px)') ? '100%' : '240px'} />
                        <Input label='State' width={useMediaQuery('(max-width: 1000px)') ? '100%' : '140px'} />
                        <Input label='City' width={useMediaQuery('(max-width: 1000px)') ? '100%' : '175px'}  />
                    </BoxCommon>
                    <BoxCommon width='100%' flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'} gap='20px'>
                        <Input label='Country' width={useMediaQuery('(max-width: 1000px)') ? '100%' : '140px'} />
                        <Input label='Web Site' width={useMediaQuery('(max-width: 1000px)') ? '100%' : '240px'} />
                        <Input label='Type Industry' width={useMediaQuery('(max-width: 1000px)') ? '100%' : '150px'} placeholder="Type" />
                        <Input label='State Corp.' width={useMediaQuery('(max-width: 1000px)') ? '100%' : '165px'}  />
                    </BoxCommon>
                </BoxCommon>
            </Modal>
        </main>
    </>
)

export default View;