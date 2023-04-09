import styled from "styled-components";
import { primary } from "~/atomic/constants/colors";
import { IndexStyledProps } from "./models";

export const Radio = styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid ${primary};
    transition: 0.4s;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const RadioSelected = styled.div`
    width: 14px;
    height: 14px;
    background-color: ${( props: IndexStyledProps ) => ( props.selected ? `${primary}` : 'transparent' )};
    border-radius: 100%;
    transition: 0.4s;
`