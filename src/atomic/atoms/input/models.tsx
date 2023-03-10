import { HTMLInputTypeAttribute } from "react";
import { StyledProps } from "styled-components";
import { Margins } from "@atomic/constants/spacing";
import { TextAlign } from "@atomic/constants/text";

export interface IndexProps extends Margins {
    width?: string;
    value: string;
    onChangeText: (e: string) => void
    placeholder: string;
    textAlign?: TextAlign;
    type?: HTMLInputTypeAttribute;
    actionButton?: Button | undefined;
    autoFocus?: boolean;
}

type Button = {
    onPress?: () => void;
}

export type IndexStyledProps = StyledProps<IndexProps>