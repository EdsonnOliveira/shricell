import { ButtonType } from "@atomic/constants/button";

export interface IndexProps {
    title: string;
    children: React.ReactNode | React.ReactNode[] | undefined;
    visible: boolean;
    onShow?: () => void;
    onClose?: () => void;
    firstButton?: ButtonType;
    secondButton?: ButtonType;
}