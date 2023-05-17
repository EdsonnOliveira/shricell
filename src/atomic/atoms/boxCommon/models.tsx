import { StyledProps } from "styled-components";
import { SetVoid } from "@typing/set";
import { Alignments } from "@atomic/constants/align";
import { Margins, Padding, Position } from "@atomic/constants/spacing";
import { Display } from "@typing/display";

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
    display?: Display;
}

export type IndexStyledProps = StyledProps<IndexProps>;