import styled from "styled-components";
import { IndexStyledProps } from "./models";

export const Main = styled.div`
    width: ${( props: IndexStyledProps ) => ( props.size )}px;
    height: ${( props: IndexStyledProps ) => ( props.size )}px;
    justify-content: center;
    align-items: center;
`