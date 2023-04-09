import React from "react";
import Head from "next/head";

import { green } from "@atomic/constants/colors";
import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import BoxCommon from "@atomic/atoms/boxCommon";
import Stamp from "@atomic/atoms/stamp";
import Table from "@atomic/mocelules/table";
import Modal from "@atomic/mocelules/modal";
import Input from "@atomic/atoms/input";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    isEdit,
    data,
    latestSales,
    modalDetails,
    setModalDetails
}) => (
    <>
        <Head>
            <title>Customer Details - ShriCell</title>
        </Head>
        <Header title={isEdit ? data.name : 'Add Stock'} />
        <main className="main">
            <BoxCommon
                flex={1}
                mt={useMediaQuery('(max-width: 1100px)') ? '0' : '-100px'}
                alignItems='center'
                gap='20px'
                flexDirection='row'
                flexWrap='wrap'
            >
                <BoxShadow
                    size={{ width: useMediaQuery('(max-width: 1100px)') ? '100%' : '400px' }}
                    onClick={() => setModalDetails(true)}
                >
                    <BoxCommon alignItems='center' justifyContent='center' gap='10px' flex='1'>
                        <h3 className="fontW500">{ data.name }</h3>
                        <h6 className='fontW300'>{ data.phone }</h6>
                        <h6 className='fontW300'>{ data.email }</h6>
                        <Stamp value={data.status.description} bgColor={data.status.bgColor} />
                        <h6 className='fontGray fontW300'>Click to show details</h6>
                    </BoxCommon>
                </BoxShadow>
                {
                    isEdit && (
                        <BoxShadow title='Billed amount' size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}>
                            <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                                <h2>$ 4239,12</h2>
                                <Stamp value='+7.3%' bgColor={green} />
                            </BoxCommon>
                        </BoxShadow>
                    )
                }
                <BoxShadow title='Latest sales' size={{ width: '100%' }}>
                    <Table
                        tr={latestSales}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
            <Modal
                title='Details customer'
                visible={modalDetails}
                onClose={() => setModalDetails(false)}
                firstButton={
                    {
                        type: 'redLightLarge',
                        text: 'Delete',
                        onClick: () => console.log('click')
                    }
                }
                secondButton={
                    {
                        type: 'primaryLarge',
                        text: 'Update',
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