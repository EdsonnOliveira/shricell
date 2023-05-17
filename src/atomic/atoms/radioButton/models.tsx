import { SetIndex } from "@typing/set";
import { StyledProps } from "styled-components";
import { Margins } from "@atomic/constants/spacing";
import { RadioButtonType } from "@atomic/constants/radioButton";

export interface IndexProps extends Margins {
    title: string;
    itemDefault: number;
    items: RadioButtonType[];
    setItemSelected: SetIndex;
}

export type IndexStyledProps = StyledProps<{
    selected: boolean;
}>