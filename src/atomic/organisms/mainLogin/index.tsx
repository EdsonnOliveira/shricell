import React from "react";

import { primary, secondary } from "@atomic/constants/colors";
import Input from "@atomic/atoms/input";
import BoxCommon from "@atomic/atoms/boxCommon";
import Button from "@atomic/atoms/button";

import { IndexProps } from "./models";
// import { Background, Container, Logo, Main, Test } from "./style";
import styled from "styled-components"

export const Test = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
`

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
    return <Test />
    
}

export default MainLogin;