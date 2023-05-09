import React from "react";

import { IndexProps } from "./models";
import { Main } from "./style";

const Stamp:React.FC<IndexProps> = ({
    value,
    color = 'fontWhite',
    bgColor,
    borderColor,
    onClick
}) => {
    return (
        <Main bgColor={bgColor} borderColor={borderColor} onClick={onClick}>
            <h6 className={color}>{ value }</h6>
        </Main>
    )
}

export default Stamp;