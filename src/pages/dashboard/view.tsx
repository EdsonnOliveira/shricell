import React from "react";
import Head from "next/head";

import Header from "@atomic/organisms/header";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
}) => (
    <>
        <Head>
            <title>Dashboard - ShriCell</title>
        </Head>
        <Header />
    </>
)

export default View;