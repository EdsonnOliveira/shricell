import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import Table from "@atomic/mocelules/table";

import useMediaQuery from "@hooks/useMediaQuery";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    itemsPreview,
    data,
}) => (
    <>
        <Head>
            <title>Orders - ShriCell</title>
        </Head>
        <Header title='Orders' itemsPreview={itemsPreview} bgColor='primary' />
        <main className="main">
            <BoxShadow title='Items' size={{ width: '100%', height: 'max-content' }}>
                <Table
                    tr={data}
                    mt='10px'
                />
            </BoxShadow>
        </main>
    </>
)

export default View;