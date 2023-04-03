import React from "react";
import { Main, SelectBox, SelectOption } from "./style";
import { IndexProps } from "./models";

const Select: React.FC<IndexProps> = ({
    width,
    value,
    onChange,
    label,
    options,
    mt,
    ml,
    mr,
    mb
}) => {
    return (
        <Main width={width}>
            { label && <h5 className="fontW600" style={{ marginBottom: 5 }}>{ label }</h5> }
            <SelectBox width={width} mt={mt} ml={ml} mr={mr} mb={mb}>
                <SelectOption value={value} onChange={(event) => onChange(event.target.value)}>
                    {
                        options.map(item => (
                            <option value={item.value}>{ item.label }</option>
                        ))
                    }
                </SelectOption>
            </SelectBox>
        </Main>
    )
}

export default Select;