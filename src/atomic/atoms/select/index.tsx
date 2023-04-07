import React, { useState } from "react";
import { BoxInputDrop, Drop, Main, Option, SelectBox, SelectOption } from "./style";
import { IndexProps } from "./models";
import Input from "../input";

const Select: React.FC<IndexProps> = ({
    width,
    value,
    onChange,
    onChangeText,
    label,
    options,
    isSearch,
    mt,
    ml,
    mr,
    mb
}) => {
    const [onFocus, setOnFocus] = useState<boolean>(false)

    return (
        <Main width={width}>
            { label && <h5 className="fontW600" style={{ marginBottom: 5 }}>{ label }</h5> }
            {
                isSearch
                ? (
                    <BoxInputDrop>
                        <Input
                            value={value}
                            onChangeText={onChangeText}
                            placeholder={options[0].label}
                            onFocus={setOnFocus}
                            onBlur={() => {
                                setTimeout(() => {
                                    setOnFocus(false)
                                }, 100)
                            }}
                        />
                        {
                            onFocus && (
                                <Drop>
                                    {
                                        options.map(item => (
                                            <Option onClick={() => onChange(item.label, item.value)}>{ item.label }</Option>
                                        ))
                                    }
                                    
                                </Drop>
                            )
                        }
                    </BoxInputDrop>
                )
                : (
                    <>
                        <SelectBox width={width} mt={mt} ml={ml} mr={mr} mb={mb}>
                            <SelectOption value={value} onChange={(event) => onChange(event.target.value)}>
                                {
                                    options.map(item => (
                                        <option value={item.value}>{ item.label }</option>
                                    ))
                                }
                            </SelectOption>
                        </SelectBox>
                    </>
                )
            }
        </Main>
    )
}

export default Select;