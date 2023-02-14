import { StyledProps } from "styled-components";
import { Margins } from "@atomic/constants/spacing";

export default interface IndexProps extends Margins {
    type: ButtonTypes;
    text: string;
    textColor?: string;
    onClick: () => void;
    flex?: boolean;
    disabled?: boolean
    selected?: boolean
}

export type ButtonTypes = 'primaryLarge' | 'primaryMedium' | 'primarySmall' |
            'secundaryLarge' | 'secundaryMedium' | 'secundarySmall' |
            'tertiaryLarge' | 'tertiaryMedium' | 'tertiarySmall' |
            'ghost'

export type IndexStyledProps = StyledProps<{
    flex?: boolean;
    selected?: boolean;
    disabled?: boolean
}>