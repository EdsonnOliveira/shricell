import React, { useState } from "react";
import BoxCommon from "../boxCommon";
import { IndexProps } from "./models";
import { Radio, RadioSelected } from "./style";

const RadioButton: React.FC<IndexProps> = ({
    title,
    itemDefault = 0,
    setItemSelected,
    items,
    mt,
    mb,
    ml,
    mr
}) => {
    const [selected, setSelected] = useState<number>(itemDefault)

    return (
        <BoxCommon mt={mt} ml={ml} mr={mr} mb={mb}>
            <h5 className='fontW400'>{ title }</h5>
            {
                items.map((item, index) => (
                    <BoxCommon
                        gap='10px'
                        mt='10px'
                        flexDirection='row'
                        onClick={() => {
                            setSelected(item.id)
                            setItemSelected(Number(item.id))
                        }}
                        key={index}
                    >
                        <Radio>
                            <RadioSelected selected={selected == item.id} />
                        </Radio>
                        <h6 className='fontW400 fontGray'>
                            { item.name }
                            { item.value && <b>{ ` (${item.value})` }</b> }
                        </h6>
                    </BoxCommon>
                ))
            }
        </BoxCommon>
    )
}

export default RadioButton;