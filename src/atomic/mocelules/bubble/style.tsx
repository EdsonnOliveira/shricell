import styled from "styled-components";

import { BlueCian, blue } from "@atomic/constants/colors";
import { IndexStyledProps } from "./models";

export const Main = styled.div`
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const Round = styled.div`
    width: 65px;
    height: 65px;
    background-color: ${( props: IndexStyledProps ) => ( props.type === 'secondary' ? `${blue}` : `${BlueCian}` )};
    border-radius: 70px;
    justify-content: center;
    align-items: center;
`

export const Text = styled.hgroup`
    gap: 5px;
`