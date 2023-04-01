import React from "react";

import { IndexProps } from "./models";
import { Main } from "./style";

const BoxShadow:React.FC<IndexProps> = ({
    title,
    children,
    size,
    onClick,
    mt,
    ml,
    mr,
    mb
}) => {
    return (
        <Main size={size} onClick={onClick} mt={mt} ml={ml} mr={mr} mb={mb}>
            { title && <h5 className="fontW600">{ title }</h5> }
            { children }
        </Main>
    )
}

export default BoxShadow;