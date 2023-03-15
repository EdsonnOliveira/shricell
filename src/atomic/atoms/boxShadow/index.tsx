import React from "react";

import { IndexProps } from "./models";
import { Main } from "./style";

const BoxShadow:React.FC<IndexProps> = ({
    title,
    children,
    size
}) => {
    return (
        <Main size={size}>
            { title && <h5 className="fontW600">{ title }</h5> }
            { children }
        </Main>
    )
}

export default BoxShadow;