import styled from "styled-components";
import { primary, white } from "@atomic/constants/colors";
import Image from "next/image";

export const Backdrop = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(1, 18,36, 0.5);
    justify-content: center;
    align-items: center;
    padding: 50px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    @media only screen and (max-width: 1000px) {
        & { padding: 15px; }
    }
`

export const Main = styled.div`
    width: max-content;
    height: max-content;
    background-color: ${white};
    border-radius: 20px;
    position: relative;
    
    @media only screen and (max-width: 1000px) {
        & {
            overflow: auto;
            max-width: calc(100% - 20px);
            max-height: 550px;
        }
    }
`

export const Header = styled.header`
    width: 100%;
    height: 60px;
    border-radius: 20px 20px 0 0;
    background-color: ${primary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`

export const ButtonClose = styled(Image)`
    width: 35px;
    height: 35px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        opacity: 0.6;
    }
`

export const Container = styled.div`
    width: max-content;
    height: max-content;
    padding: 15px;
`

export const Footer = styled.div`
    width: 100%;
    flex-direction: row;
    gap: 20px;
    padding: 0 20px 20px 20px;

    @media only screen and (max-width: 1000px) {
        & { flex-direction: column; }
    }
`