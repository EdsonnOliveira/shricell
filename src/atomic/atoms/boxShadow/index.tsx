import React from "react";

import BoxCommon from "../boxCommon";

import { IndexProps } from "./models";
import { Action, Main } from "./style";

const BoxShadow:React.FC<IndexProps> = ({
    title,
    action,
    children,
    size,
    display,
    onClick,
    mt,
    ml,
    mr,
    mb
}) => {
    return (
        <Main size={size} display={display} onClick={onClick} mt={mt} ml={ml} mr={mr} mb={mb}>
            <BoxCommon flexDirection='row' justifyContent='space-between' alignItems='center' >
                { title && <h5 className="fontW600">{ title }</h5> }
                { action && <Action onClick={action.onClick}>{ action.name }</Action> }
            </BoxCommon>
            { children }
        </Main>
    )
}

export default BoxShadow;