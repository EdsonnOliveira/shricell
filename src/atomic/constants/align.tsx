import { StyledProps } from "styled-components";

export type FlexDirection = 'row' | 'column'
export type JustifyContent = 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'center'
export type AlignItems = 'flex-start' | 'flex-end' | 'center'
export type FlexWrap = 'unset' | 'wrap' | 'wrap-reverse'

export type Alignments = {
    flexDirection?: FlexDirection;
    flexDirection800?: FlexDirection;
    justifyContent?: JustifyContent;
    justiftyContent800?: JustifyContent; 
    alignItems?: AlignItems;
    alignItems800?: AlignItems;
    gap?: string;
    flexWrap: FlexWrap;
}

export type AlignmentsStyledProps = StyledProps<Alignments>