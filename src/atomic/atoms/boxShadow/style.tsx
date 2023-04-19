import styled from "styled-components";

import { gray, white } from "@atomic/constants/colors";
import { MarginsStyledProps } from "@atomic/constants/spacing";

import { IndexStyledProps } from "./models";

export const Main = styled.div`
    width: ${( props: IndexStyledProps ) => ( props.size?.width ?? '350px' )};
    max-width: ${( props: IndexStyledProps ) => ( props.size?.maxWidth ?? props.size?.width )};
    height: ${( props: IndexStyledProps ) => ( props.size?.height ?? '200px' )};
    flex: ${( props: IndexStyledProps ) => ( props.size?.flex ?? 'unset' )};
    background-color: ${white};
    padding: 15px;
    border-radius: 22px;
    -webkit-box-shadow: 0px 3px 11px -1px rgba(176,176,176,0.62);
    -moz-box-shadow: 0px 3px 11px -1px rgba(176,176,176,0.62);
    box-shadow: 0px 3px 11px -1px rgba(176,176,176,0.62);
    cursor: ${( props: IndexStyledProps ) => ( props.onClick ? 'pointer' : 'default' )};

    margin-top: ${( props: MarginsStyledProps ) => (props.mt ?? 0)};
    margin-left: ${( props: MarginsStyledProps ) => (props.ml ?? 0)};
    margin-right: ${( props: MarginsStyledProps ) => (props.mr ?? 0)};
    margin-bottom: ${( props: MarginsStyledProps ) => (props.mb ?? 0)};
`

export const Action = styled.h4`
    font-size: 16px;
    color: ${gray};
    cursor: pointer;
`