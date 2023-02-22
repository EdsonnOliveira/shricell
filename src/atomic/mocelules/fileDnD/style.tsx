import styled from "styled-components";
import { black, grey, lightBlue } from "@atomic/constants/colors";
import { MarginsStyledProps } from "@atomic/constants/spacing";
import { IndexStyledProps } from "./models";

export const Main = styled.div`
    width: 100%;
    height: 180px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${( props: IndexStyledProps ) => (props.drag ? `${lightBlue}` : `${grey}`)};
    border-radius: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 3px dashed ${black};
    text-align: center;

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export const FileInput = styled.input`
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
`