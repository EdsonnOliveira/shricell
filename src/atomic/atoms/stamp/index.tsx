import React from "react";

import { IndexProps } from "./models";
import { Main } from "./style";

const Stamp:React.FC<IndexProps> = ({
    value,
    color = 'fontWhite',
    bgColor,
    borderColor
}) => {
    return (
        <Main bgColor={bgColor} borderColor={borderColor}>
            <h6 className={color}>{ value }</h6>
        </Main>
    )
}

export default Stamp;