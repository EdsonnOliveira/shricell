import { StyledProps } from "styled-components";
import { SetVoid } from "@typing/set";
import { Alignments } from "@atomic/constants/align";
import { Margins, Padding, Position } from "@atomic/constants/spacing";

export interface IndexProps extends Margins, Padding, Position, Alignments {
    width?: string;
    width800?: string | number;
    height?: string | number;

    flex?: string | number;
    bgColor?: string | undefined;
    scroll?: string;
    borderRadius?: string | number;
    children: React.ReactNode | React.ReactNode[] | undefined;

    onClick?: SetVoid;
}

export type IndexStyledProps = StyledProps<IndexProps>;