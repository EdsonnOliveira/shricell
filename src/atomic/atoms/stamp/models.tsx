import { StyledProps } from "styled-components";

export interface IndexProps {
    value: string;
    bgColor?: string | undefined
}

export type IndexStyledProps = StyledProps<{
    bgColor?: string | undefined;
}>