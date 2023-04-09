import { StyledProps } from "styled-components"
import { SetVoid } from "@types/set";

export interface IndexProps {
    direction?: DirectionType;
    onClick: SetVoid;
}

type DirectionType = 'top' | 'right' | 'bottom' | 'left'

export type IndexStyledProps = StyledProps<{
    direction?: DirectionType;
}>