import styled from "styled-components";
import { primary } from "@atomic/constants/colors";
import { IndexStyledProps } from "./models";

export const Main = styled.div`
    min-width: 80px;
    max-width: max-content;
    height: 30px;
    padding: 15px;
    border-radius: 30px;
    background-color: ${( props: IndexStyledProps ) => ( props.bgColor ?? `${primary}` )};
    justify-content: center;
    align-items: center;
`