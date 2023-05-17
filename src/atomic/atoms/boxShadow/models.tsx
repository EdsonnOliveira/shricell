import { StyledProps } from "styled-components";
import { Size } from "@typing/size";
import { SetVoid } from "@typing/set";
import { Margins } from "@atomic/constants/spacing";

export interface IndexProps extends Margins {
    title?: string;
    action?: ActionType;
    children: React.ReactNode | React.ReactNode[] | undefined;
    size?: Size;
    onClick?: () => void;
}

type ActionType = {
    name: string;
    onClick: SetVoid;
}

export type IndexStyledProps = StyledProps<{
    size?: Size
    onClick?: boolean;
}>