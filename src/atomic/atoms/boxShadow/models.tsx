import { Size } from "@types/size";
import { Margins } from "@atomic/constants/spacing";
import { StyledProps } from "styled-components";

export interface IndexProps extends Margins {
    title?: string;
    children: React.ReactNode | React.ReactNode[] | undefined;
    size?: Size;
    onClick?: () => void;
}

export type IndexStyledProps = StyledProps<{
    size?: Size
}>