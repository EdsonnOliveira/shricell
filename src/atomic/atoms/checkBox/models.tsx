import { SetVoid } from "@types/set";
import { StyledProps } from "styled-components";
import { Margins } from "@atomic/constants/spacing";

export interface IndexProps extends Margins {
    name: string;
    value?: string;
    selected: boolean;
    setSelected: SetVoid;
}

export type IndexStyledProps = StyledProps<{
    selected: boolean;
}>