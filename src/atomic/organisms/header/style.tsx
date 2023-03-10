import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

import { primary, secondary, white } from "@atomic/constants/colors";

import { IndexStyledProps } from "./models";

export const Main = styled.section`
    width: 100%;
    height: ${( props: IndexStyledProps ) => ( props.size == 'large' ? '350px' : 'max-content' )};
    background-color: ${( props: IndexStyledProps ) => ( props.bgColor == 'primary' ? `${primary}` : `${secondary}` )};
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Nav = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 35px;
    margin-top: -20px;
`

export const NavMobile = styled.div`
    width: 100%;
    height: 100%;
    display: ${(props: IndexStyledProps) => ( props.mobile ? 'flex' : 'none' )};
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 20px;
    background-color: ${( props: IndexStyledProps ) => ( props.bgColor == 'primary' ? `${primary}` : `${secondary}` )};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const Logo = styled(Image)`
    width: 50px;
    height: 50px;
    object-fit: contain;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
`

export const Hamburguer = styled.button`
    all: unset;
    cursor: pointer;
    width: 27px;
    height: 20px;
    position: absolute;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    right: 0;
    top: 0;
    top: 10px;

    @media only screen and (max-width: 800px) {
        display: flex;
    }
`

export const HamburguerBar = styled.div`
    width: 100%;
    height: 3px;
    background-color: ${white};
`

export const Ul = styled.ul`
    display: flex;
    gap: 40px;
    margin-top: -20px;
    flex-direction: ${(props: IndexStyledProps) => ( props.mobile ? 'column' : 'row' )};

    @media only screen and (max-width: 800px) {
        display: ${(props: IndexStyledProps) => ( props.mobile ? 'flex' : 'none' )};
    }
`

export const Li = styled(Link)`
    color: ${( props: IndexStyledProps ) => ( props.bgColor == 'primary' && props.pageCurrent
        ? secondary
        : props.bgColor == 'secondary' && props.pageCurrent
        ? primary
        : white )};
    transition: 0.3s;
    display: flex;
    position: relative;
    justify-content: center;
    font-weight: 200;
    font-size: 18px;
    padding: 15px 0;

    &::after {
        content: '';
        width: ${( props: IndexStyledProps ) => ( props.pageCurrent ? '50%' : '0px' )};
        height: 3px;
        background-color: ${( props: IndexStyledProps ) => ( props.bgColor == 'primary' && props.pageCurrent
            ? `${secondary}`
            : props.bgColor == 'secondary' && props.pageCurrent
            ? `${primary}` : 'transparent' )};
        position: absolute;
        bottom: 0;
        transition: 0.5s;
    }

    &:hover {
        color: ${( props: IndexStyledProps ) => ( props.bgColor == 'primary' ? `${secondary}` : `${primary}` )};

        &::after {
            width: 50%;
            background-color: ${( props: IndexStyledProps ) => ( props.bgColor == 'primary' ? `${secondary}` : `${primary}` )};
        }
    }
`

export const BoxInfo = styled.section`
    width: 100%;
    gap: 20px;
    margin-top: -30px;
`

export const BoxValues = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 100px;
`