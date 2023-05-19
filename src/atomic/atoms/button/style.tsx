import styled from "styled-components";
import { borderRadius, borderRadiusSmall, transition } from "@atomic/constants/button";
import { gray, green, grey, greyDark, primary, red, secondary, white } from "@atomic/constants/colors";
import { MarginsStyledProps } from "@atomic/constants/spacing";
import { IndexStyledProps } from "./models";

export const PrimaryLarge = styled.button`
    width: 100%;
    height: 65px;
    justify-content: center;
    align-items: center;
    background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${primary}` )};
    border-radius: ${borderRadius};
    transition: ${transition};
    text-align: center;

    cursor: ${( props: IndexStyledProps ) => ( props.disabled ? 'not-allowed' : 'pointer' )};

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};

    &:hover {
        background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${secondary}` )};
    }
`

export const PrimaryMedium = styled.button`
    width: 225px;
    height: 65px;
    justify-content: center;
    align-items: center;
    background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${primary}` )};
    border-radius: ${borderRadius};
    transition: ${transition};
    text-align: center;

    cursor: ${( props: IndexStyledProps ) => ( props.disabled ? 'not-allowed' : 'pointer' )};

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};

    &:hover {
        background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${secondary}` )};
    }
`

export const PrimarySmall = styled.button`
    width: 100px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${primary}` )};
    border-radius: ${borderRadiusSmall};
    transition: ${transition};
    text-align: center;

    cursor: ${( props: IndexStyledProps ) => ( props.disabled ? 'not-allowed' : 'pointer' )};

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};

    &:hover {
        background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${secondary}` )};
    }
`

export const SecundaryLarge = styled.button`
    width: 100%;
    height: 65px;
    justify-content: center;
    align-items: center;
    background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${secondary}` )};
    border-radius: ${borderRadius};
    transition: ${transition};
    text-align: center;

    cursor: ${( props: IndexStyledProps ) => ( props.disabled ? 'not-allowed' : 'pointer' )};

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};

    &:hover {
        background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${primary}` )};
    }
`

export const SecundaryMedium = styled.button`
    width: 225px;
    height: 65px;
    justify-content: center;
    align-items: center;
    background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${secondary}` )};
    border-radius: ${borderRadius};
    transition: ${transition};
    text-align: center;

    cursor: ${( props: IndexStyledProps ) => ( props.disabled ? 'not-allowed' : 'pointer' )};

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};

    &:hover {
        background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${primary}` )};
    }
`

export const SecundarySmall = styled.button`
    width: 100px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${secondary}` )};
    border-radius: ${borderRadiusSmall};
    transition: ${transition};
    text-align: center;

    cursor: ${( props: IndexStyledProps ) => ( props.disabled ? 'not-allowed' : 'pointer' )};

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};

    &:hover {
        background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${primary}` )};
    }
`

export const GreenLarge = styled.button`
    width: 100%;
    height: 65px;
    justify-content: center;
    align-items: center;
    background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${greyDark}` : `${green}` )};
    border-radius: ${borderRadius};
    transition: ${transition};
    text-align: center;

    cursor: ${( props: IndexStyledProps ) => ( props.disabled ? 'not-allowed' : 'pointer' )};

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export const RedLightLarge = styled.button`
    width: 100%;
    height: 65px;
    justify-content: center;
    align-items: center;
    background-color: ${grey};
    border: 2px solid ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${red}` )};
    border-radius: ${borderRadius};
    transition: ${transition};
    text-align: center;

    cursor: ${( props: IndexStyledProps ) => ( props.disabled ? 'not-allowed' : 'pointer' )};

    &:hover {
        background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${red}` )};

        & > h4 {
            color: ${white}
        }
    }

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export const RedLightSmall = styled.button`
    width: 100px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: ${grey};
    border: 2px solid ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${red}` )};
    border-radius: ${borderRadiusSmall};
    transition: ${transition};
    text-align: center;

    cursor: ${( props: IndexStyledProps ) => ( props.disabled ? 'not-allowed' : 'pointer' )};

    &:hover {
        background-color: ${( props: IndexStyledProps ) => ( props.disabled ? `${grey}` : `${red}` )};

        & > h4 {
            color: ${white}
        }
    }

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export const GhostSmall = styled.button`
    flex: ${( props: IndexStyledProps ) => (props.flex ? 1 : 'none')};
    padding: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;

    cursor: ${( props: IndexStyledProps ) => ( props.disabled ? 'not-allowed' : 'pointer' )};

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`