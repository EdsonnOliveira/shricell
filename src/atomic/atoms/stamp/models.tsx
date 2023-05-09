import { StyledProps } from "styled-components";
import { SetVoid } from "@types/set";

export interface IndexProps {
    value: string;
    color?: string | undefined;
    bgColor?: string | undefined
    borderColor?: string | undefined
    onClick?: SetVoid;
}

export type IndexStyledProps = StyledProps<{
    bgColor?: string | undefined;
    borderColor?: string | undefined
    onClick?: SetVoid;
}>