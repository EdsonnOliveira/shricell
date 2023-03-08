import { StyledProps } from "styled-components";

export interface IndexProps {
    bgColor?: BGColorType;
    size?: SizeType
}

type BGColorType = 'primary' | 'secondary'
type SizeType = 'small' | 'large'

export type IndexStyledProps = StyledProps<{
    bgColor?: BGColorType;
    size?: SizeType;
    pageCurrent?: boolean;
}>