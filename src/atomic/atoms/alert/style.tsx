import styled from "styled-components";
import { borderRadius } from "@atomic/constants/button";
import { IndexStyledProps } from "./models";
import { green, red } from "@atomic/constants/colors";

export const Main = styled.div`
    background-color: ${( props: IndexStyledProps ) => ( props.type === 'error'
                                                            ? `${red}`
                                                            : `${green}`)};
    padding: 14px;
    border-radius: ${borderRadius};
    position: fixed;
    bottom: 20px;
    right: 20px;
    -webkit-box-shadow: 0px 3px 11px -1px rgba(176,176,176,0.62);
    -moz-box-shadow: 0px 3px 11px -1px rgba(176,176,176,0.62);
    box-shadow: 0px 3px 11px -1px rgba(176,176,176,0.62);
`