import styled from "styled-components";
import { MarginsStyledProps } from "@atomic/constants/spacing";
import { grey, lightBlue } from "@atomic/constants/colors";
import { IndexStyledProps } from "./models";

export const Main = styled.table`
    width: 100%;
    border-collapse: collapse;

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export const TBody = styled.tbody`
    width: 100%;
`

export const TR = styled.tr`
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &:nth-child(even) { background-color: ${grey} }
    &:hover { background-color: ${lightBlue} }
    &:last-child { border-radius: 0 12px }

    @media only screen and (max-width: 800px) {
        & {
            height: max-content;
            flex-direction: column;
            gap: 10px;
            padding: 20px 0;
        }
    }
`

export const TD = styled.td`
    padding: 0 10px;
    text-align: ${( props: IndexStyledProps ) => ( props.td.textAlign ?? 'left' )};
    font-weight: ${( props: IndexStyledProps ) => ( props.td.textWeight ?? '300' )};
    flex: 1;
`