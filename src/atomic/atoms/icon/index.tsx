import React from "react";
import { Main } from "./style";
import { IndexProps } from "./models";

import IconCart from "./icons/cart";
import IconUnfinished from "./icons/unfinished";

const Icon: React.FC<IndexProps> = ({
    name,
    size,
    color
}) => {
    const findIcon = () => {
        switch (name) {
            case 'cart':
                return { icon: <IconCart />, viewBox: '738 588'};
            case 'unfinished':
                return { icon: <IconUnfinished />, viewBox: '759 760'};
            default:
                return { icon: null, viewBox: '738 588' }
        }
    }

    return (
        <Main size={size}>
            {
                findIcon().icon ? (
                    <svg fill={color} height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${findIcon().viewBox}`}>
                        { findIcon().icon }
                    </svg>
                ) : (
                    <h3 className="fontWhite fontW400">{ name }</h3>
                )
            }
        </Main>
    )
}

export default Icon;