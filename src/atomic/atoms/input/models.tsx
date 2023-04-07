import { HTMLInputTypeAttribute } from "react";
import { StyledProps } from "styled-components";
import { Margins } from "@atomic/constants/spacing";
import { TextAlign } from "@atomic/constants/text";
import { SetBoolean, SetVoid } from "@types/set";

export interface IndexProps extends Margins {
    width?: string;
    value: string;
    onChangeText: (e: string) => void
    label?: string;
    placeholder?: string;
    textAlign?: TextAlign;
    type?: HTMLInputTypeAttribute;
    actionButton?: Button | undefined;
    autoFocus?: boolean;
    onFocus?: SetBoolean
    onBlur?: SetVoid;
}

type Button = {
    onPress?: () => void;
}

export type IndexStyledProps = StyledProps<IndexProps>