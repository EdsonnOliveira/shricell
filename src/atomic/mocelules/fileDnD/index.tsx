import React, { useEffect, useState } from "react";
import { IndexProps } from "./models";
import { Main, FileInput } from "./style";

const FileDnD: React.FC<IndexProps> = ({
    file,
    setFile,
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
        <Main drag={dragEnter} mt={mt} ml={ml} mr={mr}mb={mb}>
            {
                file && file?.length > 0
                ? <h4>{ file[0].name }</h4>
                : dragEnter
                    ? <h4 className='fontPrimary'>Drop file!</h4>
                    : <h4>Drop file here, or <b className='fontPrimary w400'>browse</b></h4>
            }
            <FileInput
                type='file'
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