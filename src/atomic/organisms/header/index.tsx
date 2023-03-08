import React from "react";
import { useRouter } from "next/router";

import LogoImg from '@assets/logo/Logo2.png'

import Bubble from "@atomic/atoms/bubble";

import { IndexProps } from "./models";
import { BoxInfo, BoxValues, Li, Logo, Main, Nav, Ul } from "./style";

const Header: React.FC<IndexProps> = ({
    bgColor = 'secondary',
    size = 'large'
}) => {
    const router = useRouter()

    return (
        <Main bgColor={bgColor} size={size}>
            <Nav>
                <Logo src={LogoImg} alt='Logo' />
                <Ul>
                    <Li href='/dashboard' bgColor={bgColor} pageCurrent={router.pathname == '/dashboard'}>Dashboard</Li>
                    <Li href='/sales' bgColor={bgColor} pageCurrent={router.pathname == '/sales'}>Sales</Li>
                    <Li href='/stock' bgColor={bgColor} pageCurrent={router.pathname == '/stock'}>Stock</Li>
                    <Li href='/customers' bgColor={bgColor} pageCurrent={router.pathname == '/customers'}>Customers</Li>
                    <Li href='/reports' bgColor={bgColor} pageCurrent={router.pathname == '/reports'}>Reports</Li>
                </Ul>
            </Nav>
            <BoxInfo>
                <h2 className='fontWhite'>Hello, Shri!</h2>
                <BoxValues>
                    <Bubble title='Sales' value='34' />
                    <Bubble title='Unfinished' value='5' />
                    <Bubble title='Addition' value='7.3%' />
                    <Bubble title='Visits' value='61' />
                </BoxValues>
            </BoxInfo>
        </Main>
    )
}

export default Header;