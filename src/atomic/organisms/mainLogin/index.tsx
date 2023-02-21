import React from "react";

import ImgLogo from '@assets/logo/Logo1.png';
import ImgBg1 from '@assets/background/Background1.png'
import ImgBg2 from '@assets/background/Background2.png'

import { primary, secondary } from "@atomic/constants/colors";
import Input from "@atomic/atoms/input";
import BoxCommon from "@atomic/atoms/boxCommon";
import Button from "@atomic/atoms/button";

import { IndexProps } from "./models";
import { Background, Container, Logo, Main } from "./style";

const MainLogin: React.FC<IndexProps> = ({
    children,
    title,
    type,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    clickRegister
}) => {
    return (
        <Main>
            <Container bgColor={type === 'admin' ? secondary : primary}>
                <Background
                    src={type === 'admin' ? ImgBg1 : ImgBg2}
                    alt='Background'
                />
            </Container>
            <Container>
                { !children && <Logo src={ImgLogo} alt='Logo' /> }
                <h1>{ title }</h1>
                {
                    children ?? (
                        <BoxCommon gap='10px'>
                            <BoxCommon width='100%' gap='10px'>
                                <Input width='100%' value={email} onChangeText={onChangeEmail} placeholder='Email' mt='20px' />
                                <Input width='100%' value={password} onChangeText={onChangePassword} placeholder='Password' />
                            </BoxCommon>
                            <BoxCommon width='100%' flexDirection='row' justifyContent='space-between' alignItems='center'>
                                <Button text='Forgot password?' type='ghost' onClick={() => null} />
                                <Button text='Login' type={type === 'admin' ? 'primaryMedium' : 'secundaryMedium'} onClick={() => null} />
                            </BoxCommon>
                            {
                                type === 'customer' && (
                                    <BoxCommon width='100%'>
                                        <Button text='Create an account' type='primaryLarge' onClick={clickRegister} />
                                    </BoxCommon>
                                )
                            }
                        </BoxCommon>
                    ) 
                }
            </Container>
        </Main>
    )
}

export default MainLogin;