import { Size } from "@types/size";
import { StyledProps } from "styled-components";

export interface IndexProps {
    title?: string;
    children: React.ReactNode | React.ReactNode[] | undefined;
    size?: Size
}

export type IndexStyledProps = StyledProps<{
    size?: Size
}>