import styled from "styled-components";
import { white } from "@atomic/constants/colors";
import { IndexStyledProps } from "./models";

export const Main = styled.div`
    width: ${( props: IndexStyledProps ) => ( props.size?.width ?? '350px' )};
    height: ${( props: IndexStyledProps ) => ( props.size?.height ?? '200px' )};
    background-color: ${white};
    padding: 15px;
    border-radius: 22px;
    -webkit-box-shadow: 0px 3px 11px -1px rgba(176,176,176,0.62);
    -moz-box-shadow: 0px 3px 11px -1px rgba(176,176,176,0.62);
    box-shadow: 0px 3px 11px -1px rgba(176,176,176,0.62);
`