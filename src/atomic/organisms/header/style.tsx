import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

import { green, primary, secondary, white } from "@atomic/constants/colors";

import { IndexStyledProps } from "./models";

export const Main = styled.section`
    width: 100%;
    height: ${( props: IndexStyledProps ) => ( props.size == 'large' ? '350px' : 'max-content' )};
    background-color: ${( props: IndexStyledProps ) => ( props.bgColor == 'primary'
                                                        ? `${primary}`
                                                        : props.bgColor == 'green'
                                                        ? `${green}`
                                                        : `${secondary}` )};
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media only screen and (max-width: 800px) {
        & {
            height: max-content;
            justify-content: space-between
        }
    }
`

export const Nav = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: ${( props: IndexStyledProps ) => ( props.size == 'large' ? '35px' : '0' )};
    margin-top: ${( props: IndexStyledProps ) => ( props.size == 'large' ? '-20px' : '0' )};

    @media only screen and (max-width: 800px) {
        & {
            height: 100px;
            margin-bottom: 0;
            justify-content: space-between;
        }
    }
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
    top: ${( props: IndexStyledProps ) => ( props.bgColor == 'primary' ? '0px' : '10px' )};
    bottom: 0;

    @media only screen and (max-width: 800px) {
        & { position: relative }
    }
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
    top: ${( props: IndexStyledProps ) => ( props.bgColor == 'primary' ? '25px' : '10px' )};

    @media only screen and (max-width: 800px) {
        display: flex;
        position: relative;
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
    margin-top: ${( props: IndexStyledProps ) => ( props.size == 'large' ? '-20px' : '0' )};
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

    @media only screen and (max-width: 800px) {
        & { display: none }
    }
`

export const BoxValues = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 100px;
`