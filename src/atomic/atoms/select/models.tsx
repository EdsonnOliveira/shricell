import { StyledProps } from "styled-components";

import { Margins } from "@atomic/constants/spacing";
import { OptionsType } from "@atomic/constants/select";
import { TextAlign } from "@atomic/constants/text";

export interface IndexProps extends Margins {
    width?: string;
    value: string;
    onChange: (e: string) => void
    label: string;
    options: OptionsType[];
    textAlign?: TextAlign;
}

export type IndexStyledProps = StyledProps<IndexProps>