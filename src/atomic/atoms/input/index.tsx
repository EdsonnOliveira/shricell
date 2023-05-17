import React from "react";
import { IndexProps } from "./models";
import { InputBox, TextInput } from "./style";
import BoxCommon from "../boxCommon";

const Input: React.FC<IndexProps> = ({
    width,
    display,
    value,
    onChangeText,
    changeComplete,
    label,
    placeholder,
    type = 'text',
    textAlign,
    actionButton,
    autoFocus,
    onFocus,
    onBlur,
    max,
    min,
    id,
    mt,
    ml,
    mr,
    mb
}) => {
    return (
        <BoxCommon width={width} display={display}>
            { label && <h5 className="fontW600" style={{ marginBottom: 5 }}>{ label }</h5> }
            <InputBox width={width} mt={mt} ml={ml} mr={mr} mb={mb}>
                <TextInput
                    value={value}
                    onChange={e => onChangeText( !changeComplete ? e.target.value : e)}
                    placeholder={placeholder ?? label}
                    type={type}
                    autoFocus={autoFocus}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    textAlign={textAlign}
                    max={max}
                    min={min}
                    id={id}
                />
            </InputBox>
        </BoxCommon>
    )
}

export default Input;