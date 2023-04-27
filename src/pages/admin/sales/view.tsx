import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";
import BoxShadow from "@atomic/atoms/boxShadow";
import BoxCommon from "@atomic/atoms/boxCommon";
import Table from "@atomic/mocelules/table";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    data,
    itemsPreview
}) => (
    <>
        <Head>
            <title>Sales - ShriCell</title>
        </Head>
        <Header itemsPreview={itemsPreview} />
        <main className="main">
            <BoxCommon
                flex={1}
                gap='20px'
            >
                <BoxShadow title='Items' size={{ width: '100%', height: 'max-content' }}>
                    <Table
                        tr={data}
                        mt='10px'
                    />
                </BoxShadow>
            </BoxCommon>
        </main>
    </>
)

export default View;