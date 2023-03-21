import React from "react";
import Stamp from "@atomic/atoms/stamp";
import BoxCommon from "@atomic/atoms/boxCommon";

import { IndexProps } from "./models";
import { Main, TBody, TD, TR } from "./style";

const Table: React.FC<IndexProps> = ({
    tr,
    mt,
    ml,
    mr,
    mb
}) => {
    return (
        <Main mt={mt} ml={ml} mr={mr} mb={mb}>
            <TBody>
                {
                    tr.map((item, index) => (
                        <TR onClick={() => item.onClick ? item.onClick() : null}>
                            {
                                item.td.map((item, index) => (
                                    <TD
                                        td={{
                                            textAlign: item.textAlign,
                                            textWeight: item.textWeight,
                                        }}
                                    >
                                        {
                                            item.type != 'text'
                                            ? (
                                                <BoxCommon flex='1' alignItems='center'>
                                                    <Stamp value={item.description} bgColor={item.type.bgColor} />
                                                </BoxCommon>
                                            )
                                            : ( item.description )
                                        }
                                    </TD>
                                ))
                            }
                        </TR>
                    ))
                }
            </TBody>
        </Main>
    )
}

export default Table;