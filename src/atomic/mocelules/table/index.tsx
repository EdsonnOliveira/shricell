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
                    tr && tr.map((row, index) => (
                        <TR key={index}>
                            {
                                row.td.map((column, index) => (
                                    <TD
                                    // @ts-ignore
                                        td={{
                                            textAlign: column.textAlign,
                                            textWeight: column.textWeight,
                                        }}
                                        onClick={() => (row.onClick && (column.type == 'text' || column.type.action == undefined)) ? row.onClick() : null}
                                        key={index}
                                    >
                                        {
                                            column.type != 'text'
                                            ? (
                                                <BoxCommon
                                                    flex='1'
                                                    alignItems='center'
                                                    onClick={column.type.action}
                                                >
                                                    <Stamp
                                                        value={column.description}
                                                        bgColor={column.type.bgColor}
                                                        borderColor={column.type.borderColor}
                                                        color={column.type.color}
                                                    />
                                                </BoxCommon>
                                            )
                                            : ( column.description )
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