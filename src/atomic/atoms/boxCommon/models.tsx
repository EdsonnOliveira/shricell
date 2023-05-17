import { StyledProps } from "styled-components";
import { SetVoid } from "@typing/set";
import { Alignments } from "@atomic/constants/align";

export type IndexStyledProps = StyledProps<{
    width?: string | number;
    width800?: string | number;

    height?: string | number;
    flex?: string | number;
    bgColor?: string | undefined;
    scroll?: string;
    borderRadius: string | number;

    onClick?: SetVoid;
}> & Alignments;