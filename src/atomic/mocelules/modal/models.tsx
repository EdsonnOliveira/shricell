import { ButtonType } from "@atomic/constants/button";
import { StyledProps } from "styled-components";

export interface IndexProps {
    title: string;
    children: React.ReactNode | React.ReactNode[] | undefined;
    visible: boolean;
    onShow?: () => void;
    onClose?: () => void;
    firstButton?: ButtonType;
    secondButton?: ButtonType;
    type?: ModalType
}

type ModalType = 'normal' | 'error' | 'success'

export type IndexStyledProps = StyledProps<{
    type: ModalType;
}>