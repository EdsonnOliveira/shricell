import styled from "styled-components";

import { MarginsStyledProps } from "@atomic/constants/spacing";
import { grey, lightBlue, white } from "@atomic/constants/colors";

import { IndexStyledProps } from "./models";

export const Main = styled.div`
    width: ${( props: IndexStyledProps ) => ( props.width ?? 'null' )};
`

export const SelectBox = styled.div`
    width: ${( props: IndexStyledProps ) => ( props.width ?? 'null' )};
    height: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${grey};
    border-radius: 15px;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export const SelectOption = styled.select`
    all: unset;
    flex: 1;
    text-align: ${( props: IndexStyledProps ) => ( props.textAlign ?? 'left' )};
    font-size: 21px;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px) {
        font-size: 17px;
    }
`

export const BoxInputDrop = styled.div`
    position: relative;
`

export const Drop = styled.div`
    width: 100%;
    overflow: auto;
    padding: 10px 0;
    top: 65px;
    position: absolute;
    background-color: ${white};
    border-radius: 14px;
    -webkit-box-shadow: 0px 3px 11px -1px rgba(0,0,0 ,0.62);
    -moz-box-shadow: 0px 3px 11px -1px rgba(0,0,0 ,0.62);
    box-shadow: 0px 3px 11px -1px rgba(0,0,0 ,0.62);
    cursor: 'pointer';
`

export const Option = styled.li`
    list-style-type: none;
    font-size: 16px;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover { background-color: ${lightBlue} }
`