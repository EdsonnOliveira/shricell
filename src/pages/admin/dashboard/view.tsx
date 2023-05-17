import React from "react";
import Head from "next/head";

import { primary, red, terciary } from "@atomic/constants/colors";
import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import Stamp from "@atomic/atoms/stamp";
import BoxCommon from "@atomic/atoms/boxCommon";
import Table from "@atomic/mocelules/table";
import Icon from "@atomic/atoms/icon";

import useMediaQuery from "@hooks/useMediaQuery";

import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

import { ViewProps } from "./models";

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const options = {
    indexAxis: 'y' as const,
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
    },
};

const View: React.FC<ViewProps> = ({
    nameUser,
    latestSales,
    itemsPreview,
    outOfStock,
    stampSelected,
    setStampSelected,
    billedAmount,
    dataDevices,
    dataBrands
}) => (
    <>
        <Head>
            <title>Dashboard - ShriCell</title>
        </Head>
        <Header title={`Hello, ${nameUser}!`} itemsPreview={itemsPreview} />
        <main className="main">
            <BoxCommon
                flex={useMediaQuery('(max-width: 1100px)') ? 'unset' : '1'}
                width={useMediaQuery('(max-width: 1100px)') && '100%'}
                flexDirection='row'
                gap='20px'
                flexWrap='wrap'
            >
                <BoxShadow title='Billed amount' size={useMediaQuery('(max-width: 1000px)') && { width: '100%' }}>
                    <BoxCommon flexDirection='row' alignItems='center' justifyContent='space-between' flex='1'>
                        <h2>$ { billedAmount }</h2>
                    </BoxCommon>
                </BoxShadow>
                <BoxShadow title='Best sellers' size={{ width: '100%', height: 700 }}>
                    <BoxCommon flexDirection='row' gap='5px' mt='-25px' justifyContent='flex-end'>
                        <Stamp
                            value='DEVICE'
                            bgColor={stampSelected == 0 ? primary : terciary}
                            onClick={() => setStampSelected(0)}
                        />
                        <Stamp
                            value='BRAND'
                            bgColor={stampSelected == 1 ? primary : terciary}
                            onClick={() => setStampSelected(1)}
                        />
                    </BoxCommon>
                    {
                        dataDevices?.labels && stampSelected === 0 && (
                            <Bar
                                options={options}
                                data={dataDevices}
                            />
                        )
                    }
                    {
                        dataBrands?.labels && stampSelected === 1 && (
                            <Bar
                                options={options}
                                data={dataBrands}
                            />
                        )
                    }
                </BoxShadow>
                <BoxShadow title='Latest sales' size={{ width: '100%', height: 'max-content' }}>
                    <Table
                        tr={latestSales}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
            <BoxCommon
                flex={useMediaQuery('(max-width: 1100px)') ? '1' : '0.4'}
                gap='20px'
                mt={useMediaQuery('(max-width: 1100px)') ? '0' : '-100px'}
            >
                {
                    outOfStock.map((item, index) => (
                        <BoxShadow size={{ width: '100%', height: '80px' }} key={index}>
                            <BoxCommon flexDirection='row' alignItems='center' justifyContent='center' gap='20px' flex='1'>
                                <h3 className="fontW500">{ item.model }</h3>
                                <Stamp value='sold off' bgColor={red} />
                            </BoxCommon>
                        </BoxShadow>
                    ))
                }
            </BoxCommon>
        </main>
    </>
)

export default View;