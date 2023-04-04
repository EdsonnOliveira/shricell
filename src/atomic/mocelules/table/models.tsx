import { StyledProps } from "styled-components";
import { Margins } from "@atomic/constants/spacing";
import { TR, TDStyledProps } from "@atomic/constants/table";

export interface IndexProps extends Margins {
    tr: TR[];
}

export type IndexStyledProps = StyledProps<{
    td: TDStyledProps;
}>