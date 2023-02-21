import { ColorValue } from "react-native";
import { StyledProps } from "styled-components";

export type IndexStyledProps = StyledProps<{
    width?: string | number;
    width800?: string | number;

    height?: string | number;
    flex?: string | number;
    bgColor?: ColorValue | undefined;
    scroll?: string;
}>;