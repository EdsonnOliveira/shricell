import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { StyledProps } from "styled-components";
import { Margins } from "../../constants/spacing";
import { TextAlign } from "../../constants/text";

export interface IndexProps extends Margins {
    width?: string;
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
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