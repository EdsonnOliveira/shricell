import { StyledProps } from "styled-components";
import { SetVoid } from "@types/set";

export type IndexStyledProps = StyledProps<{
    width?: string | number;
    width800?: string | number;

    height?: string | number;
    flex?: string | number;
    bgColor?: String | undefined;
    scroll?: string;

    onClick: SetVoid;
}>;