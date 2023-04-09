import { StyledProps } from "styled-components";

export interface IndexProps {
    items?: ItemsColorsType[]
    color?: string | undefined
}

type ItemsColorsType = {
    color: string | undefined;
}

export type IndexStyledProps = StyledProps<{
    color?: string | undefined;
}>