import { TextAlign, TextWeight } from "@atomic/constants/text";
import { StyledProps } from "styled-components";
import { SetVoid } from "@types/set";

export type TR = {
    td: TD[];
    onClick?: () => void;
}

export type TRStyledProps = StyledProps<TR>

export type TD = {
    description: string;
    textAlign: TextAlign;
    textWeight: TextWeight;
    type: TDType;
}

export type TDStyledProps = StyledProps<{
    textAlign: TextAlign;
    textWeight: TextWeight;
}>

type TDType = 'text' | { color: string; bgColor: string, borderColor: string, action: SetVoid }