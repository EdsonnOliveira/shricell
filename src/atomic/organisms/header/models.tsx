import { StyledProps } from "styled-components";
import { HeaderItemsPreview } from "@atomic/constants/header";

export interface IndexProps {
    title?: string;
    bgColor?: BGColorType;
    size?: SizeType;
    itemsPreview?: HeaderItemsPreview[]
}

type BGColorType = 'primary' | 'secondary' | 'green'
type SizeType = 'small' | 'large'

export type IndexStyledProps = StyledProps<{
    bgColor?: BGColorType;
    size?: SizeType;
    pageCurrent?: boolean;
    mobile?: boolean;
}>