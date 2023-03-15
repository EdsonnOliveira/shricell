import React from "react";

import { IndexProps } from "./models";
import { Main } from "./style";

const Stamp:React.FC<IndexProps> = ({
    value,
    bgColor
}) => {
    return (
        <Main bgColor={bgColor}>
            <h6 className="fontWhite">{ value }</h6>
        </Main>
    )
}

export default Stamp;