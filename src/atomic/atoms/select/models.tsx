import { StyledProps } from "styled-components";

import { Margins } from "@atomic/constants/spacing";
import { OptionsType, SetOptionsType } from "@atomic/constants/select";
import { TextAlign } from "@atomic/constants/text";

import { SetText } from "@typing/set";

export interface IndexProps extends Margins {
    width?: string;
    value: string;
    onChange: SetText | SetOptionsType
    onChangeText?: SetText
    label: string;
    options: OptionsType[];
    textAlign?: TextAlign;
    isSearch?: boolean;
}

export type IndexStyledProps = StyledProps<{
    width?: string;
    textAlign?: TextAlign;
}> & Margins