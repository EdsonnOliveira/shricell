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

export const Logo = styled(Image)`
    width: 50px;
    height: 50px;
    object-fit: contain;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
`

export const Ul = styled.ul`
    display: flex;
    gap: 40px;
    margin-top: -20px;
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