import React from "react";
import { IndexProps } from "./models";
import { InputBox, Main, TextInput } from "./style";

const Input: React.FC<IndexProps> = ({
    width,
    value,
    onChangeText,
    label,
    placeholder,
    type = 'text',
    actionButton,
    autoFocus,
    onFocus,
    onBlur,
    mt,
    ml,
    mr,
    mb
}) => {
    return (
        <Main width={width}>
            { label && <h5 className="fontW600" style={{ marginBottom: 5 }}>{ label }</h5> }
            <InputBox width={width} mt={mt} ml={ml} mr={mr} mb={mb}>
                <TextInput
                    value={value}
                    onChange={e => onChangeText(e.target.value)}
                    placeholder={placeholder ?? label}
                    type={type}
                    autoFocus={autoFocus}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </InputBox>
        </Main>
    )
}

export default Input;