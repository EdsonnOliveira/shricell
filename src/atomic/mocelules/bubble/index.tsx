import React from "react";

import { white } from "@atomic/constants/colors";
import Icon from "../../atoms/icon";

import { IndexProps } from "./models";
import { Main, Round, Text } from "./style";

const Bubble: React.FC<IndexProps> = ({
    value,
    title,
    icon,
    type = 'secondary'
}) => {
    return (
        <Main className='bubble'>
            <Round type={type}>
                <Icon name={icon} size={30} color={white} />
            </Round>
            <Text>
                <h4 className='fontWhite fontW600'>{ value }</h4>
                <h5 className='fontWhite fontW300'>{ title }</h5>
            </Text>
        </Main>
    )
}

export default Bubble;