import { StyledProps } from "styled-components";

export interface IndexProps {
    value: string;
    title: string;
    icon: string
    type: ColorType
}

type ColorType = 'primary' | 'secondary'

export type IndexStyledProps = StyledProps<{
    type?: ColorType;
}>