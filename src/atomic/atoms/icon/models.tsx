import { StyledProps } from "styled-components";
import { Icons } from "@atomic/constants/icon";

export interface IndexProps {
    name: Icons;
    size: number;
    color: string;
}

export type IndexStyledProps = StyledProps<{
    size: number;
}>