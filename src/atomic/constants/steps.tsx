import { StyledProps } from "styled-components";

export type ItemStep = {
    index: number;
    label: string;
    icon: string
    description: string
}

export type ItemStepStyledProps = StyledProps<{
    selected: boolean;
}>