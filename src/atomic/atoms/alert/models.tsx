import { AlertType } from "@atomic/constants/alert";
import { StyledProps } from "styled-components";
import { SetBoolean } from "@typing/set";

export interface IndexProps {
    type: AlertType;
    text: string;
    visible: boolean;
    setVisible: SetBoolean;
    reloadPage?: boolean;
}

export type IndexStyledProps = StyledProps<{
    type: AlertType;
}>