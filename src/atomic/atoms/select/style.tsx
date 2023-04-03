import styled from "styled-components";

import { MarginsStyledProps } from "@atomic/constants/spacing";
import { grey } from "@atomic/constants/colors";

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