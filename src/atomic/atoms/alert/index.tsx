import React, { useEffect } from "react";
import { Main } from "./style";
import { IndexProps } from "./models";
import { useRouter } from "next/router";

const Alert: React.FC<IndexProps> = ({
    type,
    text,
    visible,
    setVisible,
    reloadPage
}) => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            if (visible) setVisible(false)
            if (visible && reloadPage) router.reload()
        }, 3500);
    }, [visible])

    return visible ? (
        <Main type={type} >
            <h5 className='fontWhite'>{ text }</h5>
        </Main>
    ) : <></>
}

export default Alert;