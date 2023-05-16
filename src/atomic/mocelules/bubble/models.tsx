import { StyledProps } from "styled-components";
import { Icons } from "@atomic/constants/icon";

export interface IndexProps {
    value: string;
    title: string;
    icon: Icons
    type: ColorType
}

type ColorType = 'primary' | 'secondary'

export type IndexStyledProps = StyledProps<{
    type?: ColorType;
}>