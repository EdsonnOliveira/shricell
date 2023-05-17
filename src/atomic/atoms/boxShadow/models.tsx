import { StyledProps } from "styled-components";
import { Size } from "@typing/size";
import { SetVoid } from "@typing/set";
import { Display } from "@typing/display";
import { Margins } from "@atomic/constants/spacing";

export interface IndexProps extends Margins {
    title?: string;
    action?: ActionType;
    children: React.ReactNode | React.ReactNode[] | undefined;
    size?: Size;
    display?: Display;
    onClick?: SetVoid;
}

type ActionType = {
    name: string;
    onClick: SetVoid;
}

export type IndexStyledProps = StyledProps<{
    size?: Size
    onClick?: SetVoid;
    display?: Display;
}>