import { StyledProps } from "styled-components"

export interface IndexProps {
    children?: React.ReactNode[] | React.ReactNode | undefined;
    title: string;
    type: 'customer' | 'admin';
    email?: string;
    onChangeEmail?: (value: string) => void;
    password?: string;
    onChangePassword?: (value: string) => void;
    clickLogin?: () => void;
    clickRegister?: () => void;
}

export type IndexStyledProps = StyledProps<{
    bgColor?: string
}>