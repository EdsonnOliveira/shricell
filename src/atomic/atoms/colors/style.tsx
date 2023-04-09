import styled from "styled-components";
import { black, white } from "@atomic/constants/colors";
import { IndexStyledProps } from "./models";

export const Main = styled.section`
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: row;
    gap: 5px;
`

export const Color = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid ${black};
    background-color: ${( props: IndexStyledProps ) => ( props.color ?? `${white}` )};
`