import React from "react";
import Head from "next/head";

import MainLogin from "@atomic/organisms/mainLogin";
import Modal from "@atomic/mocelules/modal";

import { ViewProps } from "./models";

const View: React.FC<ViewProps> = ({
    email,
    setEmail,
    password,
    setPassword,
    clickLogin,
    modalError,
    setModalError,
}) => {
    return (
        <>
            <Head>
                <title>ShriCell</title>
            </Head>
            <MainLogin
                title='Administrator'
                type='admin'
                email={email}
                onChangeEmail={setEmail}
                password={password}
                onChangePassword={setPassword}
                clickLogin={clickLogin}
            />
            <Modal
                title="Incorrect credentials"
                visible={modalError}
                onClose={() => setModalError(false)}
                type='error'
                firstButton={
                    {
                        text: 'Ok',
                        type: 'redLightLarge',
                        onClick: () => setModalError(false)
                    }
                }
            >
                <h4 className="fontCenter">Incorrect <b>username</b> or <b>password</b>. <br />Please try again.</h4>
            </Modal>
        </>
    )
}

export default View;