import { StyledProps } from "styled-components";

export interface IndexProps {
    value: string;
    color?: string | undefined;
    bgColor?: string | undefined
    borderColor?: string | undefined
}

export type IndexStyledProps = StyledProps<{
    bgColor?: string | undefined;
    borderColor?: string | undefined
}>