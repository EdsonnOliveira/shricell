import React from "react";
import Head from "next/head";

import { primary, terciary } from "@atomic/constants/colors";
import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import BoxCommon from "@atomic/atoms/boxCommon";
import Stamp from "@atomic/atoms/stamp";
import Table from "@atomic/mocelules/table";
import Input from "@atomic/atoms/input";
import Select from "@atomic/atoms/select";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";
import { BarElement, CategoryScale, Chart, Legend, LinearScale, PointElement, Title, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
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
    router,
    dataBestCustomers,
    dateStart,
    setDateStart,
    dateEnd,
    setDateEnd,
    filterDevices,
    setFilterDevices,
    devicesItems,

    devicesSelecteds,
    setDevicesSelecteds,
    removeDeviceSelected,
    
    dataGraphByTime,
    dataBestSuppliers,
    dataBrands,
    dataDevices,
    stampSelected,
    setStampSelected,
}) => (
    <>
        <Head>
            <title>Supplier - ShriCell</title>
        </Head>
        <Header />
        <main className="main">
            <BoxCommon
                flex={1}
                gap='20px'
            >
                <BoxShadow title='Price of phones' size={{ width: '100%', height: 'max-content' }}>
                    <BoxCommon
                        gap='10px'
                        mt='10px'
                        pt='12px'
                        pb='12px'
                        borderRadius='10px'
                        flexDirection={useMediaQuery('(max-width: 1000px)') ? 'column' : 'row'}
                    >
                        <Input
                            type='date'
                            label='Date Start'
                            value={dateStart}
                            onChangeText={(value) => setDateStart(value)}
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : 'max-content'}
                        />
                        <Input
                            type='date'
                            label='Date End'
                            value={dateEnd}
                            onChangeText={(value) => setDateEnd(value)}
                            width={useMediaQuery('(max-width: 1000px)') ? '100%' : 'max-content'}
                        />
                        <Select
                            label='Devices'
                            options={devicesItems}
                            isSearch
                            value={filterDevices}
                            // @ts-ignore
                            onChange={(label: string, value: string) => setDevicesSelecteds({ label, value })}
                            onChangeText={setFilterDevices}
                        />
                        {
                            devicesSelecteds?.map(item => (
                                <BoxCommon
                                    bgColor={primary}
                                    borderRadius='5px'
                                    pt='5px'
                                    pr='5px'
                                    pb='5px'
                                    pl='5px'
                                    onClick={() => removeDeviceSelected(item.value)}
                                >
                                    <h6 className="fontSmall fontWhite fontW400">{ item.label } X</h6>
                                </BoxCommon>
                            ))
                        }
                    </BoxCommon>
                    <Table
                        tr={dataGraphByTime}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
            <BoxCommon
                flex={1}
                gap='20px'
            >
                <BoxShadow title='Best buyers' size={{ width: '100%', height: 'max-content' }}>
                    <Table
                        tr={dataBestCustomers}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
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
            <BoxCommon
                flex={1}
                gap='20px'
            >
                <BoxShadow title='Best suppliers' size={{ width: '100%', height: 'max-content' }}>
                    <Table
                        tr={dataBestSuppliers}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
        </main>
    </>
)

export default View;