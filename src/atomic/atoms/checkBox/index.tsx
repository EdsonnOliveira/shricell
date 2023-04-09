import React from "react";

import BoxCommon from "../boxCommon";
import Success from '@assets/vector/success.png'

import { IndexProps } from "./models";
import { Check, Checked } from "./style";

const CheckBox: React.FC<IndexProps> = ({
    name,
    value,
    selected,
    setSelected,
    mt,
    ml,
    mr,
    mb
}) => (
    <BoxCommon
        flexDirection='row'
        gap='10px'
        mt={mt} ml={ml} mr={mr} mb={mb}
        onClick={setSelected}
    >
        <Check selected={selected}>
            <Checked src={Success} alt='checked' />
        </Check>
        <h6 className='fontW400 fontGray'>
            { name }
            { value && <b>{ ` (${value})` }</b> }
        </h6>
    </BoxCommon>
)

export default CheckBox;