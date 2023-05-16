import { StyledProps } from "styled-components";
import { Icons } from "@atomic/constants/icon";

export interface IndexProps {
    name: Icons;
    size: number;
    color: string;
}

type ViewBox = {
    width: number;
    height: number;
}

export type IndexStyledProps = StyledProps<{
    size: number;
}>