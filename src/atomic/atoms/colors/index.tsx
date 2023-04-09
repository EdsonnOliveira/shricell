import React from "react";
import { Color, Main } from "./style";
import { IndexProps } from "./models";

const Colors: React.FC<IndexProps> = ({
    items,
    color
}) => {
    return (
        <Main>
            {
                color
                ? <Color color={color} />
                : items?.map(item => <Color color={item.color} />)
            }
        </Main>
    )
}

export default Colors;