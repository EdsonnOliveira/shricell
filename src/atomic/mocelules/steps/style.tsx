import styled from "styled-components";
import { gray, primary } from "@atomic/constants/colors";
import { ItemStepStyledProps } from "@atomic/constants/steps";

export const Main = styled.section`
    width: max-content;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media only screen and (max-width: 800px) {
        & {
            flex-direction: column;
        }
    }
`

export const Item = styled.div`
    max-width: 130px;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 7px;
`

export const ItemBoxIcon = styled.div`
    width: 55px;
    height: 55px;
    background-color: ${( props: ItemStepStyledProps ) => ( props.selected ? `${primary}` : 'transparent')};
    border: 2px solid ${( props: ItemStepStyledProps ) => ( props.selected ? 'transparent' : `${gray}`)};
    border-radius: 50px;
`

export const Row = styled.div`
    width: 90px;
    height: 3px;
    background-color: ${( props: ItemStepStyledProps ) => ( props.selected ? `${primary}` : `${gray}`)};

    @media only screen and (max-width: 800px) {
        & {
            width: 3px;
            height: 30px;
        }
    }
`