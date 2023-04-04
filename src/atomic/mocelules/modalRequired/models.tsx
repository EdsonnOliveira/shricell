export interface IndexProps {
    field: string;
    visible: boolean;
    onShow?: () => void;
    onClose?: () => void;
}