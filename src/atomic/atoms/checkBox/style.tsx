import styled from "styled-components";
import { primary } from "@atomic/constants/colors";
import { IndexStyledProps } from "./models";
import Image from "next/image";

export const Check = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${( props: IndexStyledProps ) => ( props.selected ? `${primary}` : 'transparent' )};
    border: 2px solid ${primary};
    transition: 0.4s;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const Checked = styled(Image)`
    width: 10px;
    object-fit: contain;
`