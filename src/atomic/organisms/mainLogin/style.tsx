import Image from "next/image";
import styled from "styled-components"
import { white } from '@atomic/constants/colors'
import { IndexStyledProps } from './models'

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    flex-direction: row;
`

export const Test = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
`

export const Container = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${( props: IndexStyledProps ) => ( props.bgColor ?? `${white}` )};
    position: relative;
    padding: 20px;

    @media only screen and (max-width: 800px) {
        &:first-child {
            display: none
        }
    }
`

export const Background = styled(Image)`
    width: 700px;
    height: 100%;
    object-fit: contain;
    position: absolute;
    margin-top: -400px;
    margin-left: -550px;
`

export const Logo = styled(Image)`
    width: 200px;
    height: max-content;
    object-fit: contain;
    margin-bottom: 30px;
`