import React, { useState } from "react";
import BoxCommon from "@atomic/atoms/boxCommon";
import { IndexProps } from "./models";
import { Main, FileInput } from "./style";

const FileDnD: React.FC<IndexProps> = ({
    file,
    setFile,
    accept,
    mt,
    ml,
    mr,
    mb
}) => {
    const [dragEnter, setDragEnter] = useState<boolean>(false)

    const onDragOver = (event) => {
        event.preventDefault()
    }
    
    const onDrop = (event) => {
        event.preventDefault()
        setFile(event.target.files)
    }

    return (
        <Main drag={dragEnter || file?.length > 0} mt={mt} ml={ml} mr={mr}mb={mb}>
            {
                file && file?.length > 0
                ? <h4>{ file[0].name }</h4>
                : dragEnter
                    ? <h4 className='fontPrimary'>Drop file!</h4>
                    : (
                        <BoxCommon alignItems='center' gap='5px'>
                            <h4>Drop file here, or <b className='fontPrimary fontW400'>browse</b></h4>
                            { accept && <h6 className='fontW500'>Suports: { accept }</h6> }
                        </BoxCommon>
                    )
            }
            <FileInput
                type='file'
                accept={accept}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragEnter={() => setDragEnter(true)}
                onDragLeave={() => setDragEnter(false)}
                onChange={(event) => setFile(event.target.files)}
            />
        </Main>
    )
}

export default FileDnD;