import React, { useState } from "react";
import { useRouter } from "next/router";

import LogoPrimary from '@assets/logo/Logo2.png'
import LogoSecondary from '@assets/logo/Logo3.png'

import Bubble from "@atomic/mocelules/bubble";
import Button from "@atomic/atoms/button";

import { IndexProps } from "./models";
import { BoxInfo, BoxValues, Hamburguer, HamburguerBar, Li, Logo, Main, Nav, NavMobile, Ul } from "./style";

const optionsPrimary = [
    {
        page: '/customer/dashboard',
        name: 'Dashboard',
    },
    {
        page: '/customer/cart',
        name: 'My Cart',
    },
    {
        page: '/customer/orders',
        name: 'My Orders',
    },
    {
        page: '/customer/account',
        name: 'My Account',
    },
]

const optionsSecondary = [
    {
        page: '/admin/dashboard',
        name: 'Dashboard',
    },
    {
        page: '/admin/sales',
        name: 'Sales',
    },
    {
        page: '/admin/stock',
        name: 'Stock',
    },
    {
        page: '/admin/customers',
        name: 'Customers',
    },
    {
        page: '/admin/suppliers',
        name: 'Suppliers',
    },
    {
        page: '/admin/reports',
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
                        bgColor === 'secondary'
                        ? optionsSecondary.map((option, index) => (
                            <Li href={option.page} bgColor={bgColor} pageCurrent={router.pathname == option.page} key={index}>{ option.name }</Li>
                        ))
                        : optionsPrimary.map((option, index) => (
                            <Li href={option.page} bgColor={bgColor} pageCurrent={router.pathname == option.page} key={index}>{ option.name }</Li>
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
                        bgColor === 'secondary'
                        ? optionsSecondary.map((option, index) => (
                            <Li href={option.page} bgColor={bgColor} pageCurrent={router.pathname == option.page} key={index}>{ option.name }</Li>
                        ))
                        : optionsPrimary.map((option, index) => (
                            <Li href={option.page} bgColor={bgColor} pageCurrent={router.pathname == option.page} key={index}>{ option.name }</Li>
                        ))
                    }
                </Ul>
                <Button type={bgColor == 'primary' ? 'secundaryMedium' : 'primaryMedium'} text='Close Menu' onClick={() => setMobile(false)} />
            </NavMobile>
            {
                size == 'large' && (
                    <BoxInfo>
                        {
                            bgColor == 'green'
                            ? (
                                <h1 className='fontWhite txtHello fontCenter'>
                                    { title }
                                </h1>
                            ) : (
                                <h2 className='fontWhite txtHello'>
                                    { title ?? optionsSecondary.find(page => page.page == router.pathname)?.name }
                                </h2>
                            )
                        }
                        <BoxValues>
                            {/* @ts-ignore */}
                            { itemsPreview?.map((item, index) => <Bubble title={item.title} value={item.value} icon={item.icon} type={bgColor} key={index} />) }
                        </BoxValues>
                    </BoxInfo>
                )
            }
        </Main>
    )
}

export default Header;