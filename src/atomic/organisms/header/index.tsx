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
        page: '/customers',
        name: 'Customers',
    },
    {
        page: '/reports',
        name: 'Reports',
    },
]

const Header: React.FC<IndexProps> = ({
    title,
    bgColor = 'secondary',
    size = 'large',
    itemsPreview
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
                bgColor == 'secondary' && size == 'large' && (
                    <BoxInfo>
                        <h2 className='fontWhite txtHello'>
                            { title ?? optionsComponents.find(page => page.page == router.pathname)?.name }
                        </h2>
                        <BoxValues>
                            { itemsPreview?.map((item, index) => <Bubble title={item.title} value={item.value} icon={item.icon} />) }
                        </BoxValues>
                    </BoxInfo>
                )
            }
        </Main>
    )
}

export default Header;