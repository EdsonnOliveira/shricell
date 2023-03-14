import React from "react";

import { IndexProps } from "./models";
import { Main, Round, Text } from "./style";

const Bubble: React.FC<IndexProps> = ({
    value,
    title,
}) => {
    return (
        <Main className='bubble'>
            <Round>
                
            </Round>
            <Text>
                <h4 className='fontWhite fontW600'>{ value }</h4>
                <h5 className='fontWhite fontW300'>{ title }</h5>
            </Text>
        </Main>
    )
}

export default Bubble;