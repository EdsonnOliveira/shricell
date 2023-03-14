import React, { useState } from "react";
import { useRouter } from "next/router";

import LogoPrimary from '@assets/logo/Logo2.png'
import LogoSecondary from '@assets/logo/Logo3.png'

import Bubble from "@atomic/atoms/bubble";
import Button from "@atomic/atoms/button";

import { IndexProps } from "./models";
import { BoxInfo, BoxValues, Hamburguer, HamburguerBar, Li, Logo, Main, Nav, NavMobile, Ul } from "./style";

const optionsComponents = [
    {
        page: '/dashboard',
        name: 'Dashboard',
    },
    {
        page: '/sales',
        name: 'Sales',
    },
    {
        page: '/stock',
        name: 'Stock',
    },
    {
        page: '/Customers',
        name: 'Customers',
    },
    {
        page: '/Reports',
        name: 'Reports',
    },
]

const Header: React.FC<IndexProps> = ({
    bgColor = 'secondary',
    size = 'large'
}) => {
    const router = useRouter()
    const [mobile, setMobile] = useState<boolean>(false)

    return (
        <Main bgColor={bgColor} size={size}>
            <Nav size={size}>
                { bgColor == 'primary' ? <Logo src={LogoSecondary} alt='Logo' /> : <Logo src={LogoPrimary} alt='Logo' /> }
                <Ul size={size}>
                    {
                        optionsComponents.map(option => (
                            <Li href={option.page} bgColor={bgColor} pageCurrent={router.pathname == option.page}>{ option.name }</Li>
                        ))
                    }
                </Ul>
                <Hamburguer bgColor={bgColor} onClick={() => setMobile(true)}>
                    <HamburguerBar />
                    <HamburguerBar />
                    <HamburguerBar />
                </Hamburguer>
            </Nav>
            <NavMobile bgColor={bgColor} mobile={mobile}>
                <Ul mobile={mobile}>
                    {
                        optionsComponents.map(option => (
                            <Li href={option.page} bgColor={bgColor} pageCurrent={router.pathname == option.page}>{ option.name }</Li>
                        ))
                    }
                </Ul>
                <Button type={bgColor == 'primary' ? 'secundaryMedium' : 'primaryMedium'} text='Close Menu' onClick={() => setMobile(false)} />
            </NavMobile>
            {
                bgColor == 'secondary' && (
                    <BoxInfo>
                        <h2 className='fontWhite txtHello'>Hello, Shri!</h2>
                        <BoxValues>
                            <Bubble title='Sales' value='34' />
                            <Bubble title='Unfinished' value='5' />
                            <Bubble title='Addition' value='7.3%' />
                            <Bubble title='Visits' value='61' />
                        </BoxValues>
                    </BoxInfo>
                )
            }
        </Main>
    )
}

export default Header;