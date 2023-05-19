import React from "react";

import ImgLogo from '@assets/logo/Logo1.png';
import ImgBg1 from '@assets/background/Background1.png'
import ImgBg2 from '@assets/background/Background2.png'

import { primary, secondary, white } from "@atomic/constants/colors";
import Input from "@atomic/atoms/input";
import BoxCommon from "@atomic/atoms/boxCommon";
import Button from "@atomic/atoms/button";

import { IndexProps } from "./models";
import { Background, Container, Logo, Main } from "./style";
import Image from "next/image";
import useMediaQuery from "~/hooks/useMediaQuery";

const MainLogin: React.FC<IndexProps> = ({
    children,
    title,
    type,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    clickLogin,
    clickRegister
}) => {
    return (
        <section style={{ width: '100vw', height: '100vh', flexDirection: 'row' }}>
            <div
                style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: type === 'admin' ? secondary : primary,
                        position: 'relative',
                        padding: 20,
                }}
                id="mainLoginFirstContainer"
            >
                <Image
                    src={type === 'admin' ? ImgBg1 : ImgBg2}
                    alt='Background'
                    style={{
                        width: 700,
                        height: '100%',
                        objectFit: 'contain',
                        position: 'absolute',
                        marginTop: -400,
                        marginLeft: -550
                    }}
                />
            </div>
            <div
                style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: white,
                        position: 'relative',
                        padding: 20,
                }}
            >
                { !children && <Image src={ImgLogo} alt='Logo' style={{ width: 200, height: 'max-content', objectFit: 'contain', marginBottom: 30 }} /> }
                <h1>{ title }</h1>
                {
                    children ?? (
                        <BoxCommon gap='10px'>
                            <BoxCommon width='100%' gap='10px'>
                                {/* @ts-ignore */}
                                <Input width='100%' value={String(email)} onChangeText={onChangeEmail} placeholder='Email' mt='20px' />
                                {/* @ts-ignore */}
                                <Input width='100%' type='password' value={String(password)} onChangeText={onChangePassword} placeholder='Password' />
                            </BoxCommon>
                            <BoxCommon width='100%' flexDirection='row' justifyContent='space-between' alignItems='center'>
                                <Button text='Forgot password?' type='ghost' onClick={() => null} />
                                {/* @ts-ignore */}
                                <Button text='Login' type={type === 'admin' ? 'primaryMedium' : 'secundaryMedium'} onClick={clickLogin} />
                            </BoxCommon>
                            {
                                type === 'customer' && (
                                    <BoxCommon width='100%'>
                                        {/* @ts-ignore */}
                                        <Button text='Create an account' type='primaryLarge' onClick={clickRegister} />
                                    </BoxCommon>
                                )
                            }
                        </BoxCommon>
                    ) 
                }
            </div>
        </section>
    )
}

export default MainLogin;