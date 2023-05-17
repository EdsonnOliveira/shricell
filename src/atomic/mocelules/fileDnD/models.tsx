import { StyledProps } from "styled-components";
import { Margins } from "../../constants/spacing";

export interface IndexProps extends Margins {
    file: FileList | null
    setFile: (file: FileList | null) => void;
    accept?: string;
}

export type IndexStyledProps = StyledProps<{
    drag: boolean;
}> & Margins