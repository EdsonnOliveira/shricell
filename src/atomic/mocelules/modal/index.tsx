import React from "react";

import Button from "@atomic/atoms/button";

import { IndexProps } from "./models";
import { Backdrop, ButtonClose, Container, Footer, Header, Main } from "./style";

const Modal: React.FC<IndexProps> = ({
    title,
    children,
    visible,
    onClose,
    onShow,
    firstButton,
    secondButton,
    type = 'normal'
}) => {
    return !visible ? <></> : (
        <Backdrop>
            <Main>
                <Header type={type}>
                    <h4 className="fontWhite fontW400">{ title }</h4>
                    <ButtonClose onClick={onClose} type={type}>
                        <h5 className="fontWhite fontW400">X</h5>
                    </ButtonClose>
                </Header>
                <Container>
                    { children }
                </Container>
                {
                    firstButton && (
                        <Footer>
                            <Button
                                type={firstButton.type}
                                text={firstButton.text}
                                textColor={firstButton.textColor}
                                onClick={firstButton.onClick}
                                disabled={firstButton.disabled}
                                flex={firstButton.flex}
                                selected={firstButton.selected}
                            />
                            { secondButton && (
                                    <Button
                                        type={secondButton.type}
                                        text={secondButton.text}
                                        textColor={secondButton.textColor}
                                        onClick={secondButton.onClick}
                                        disabled={secondButton.disabled}
                                        flex={secondButton.flex}
                                        selected={secondButton.selected}
                                    />
                                )
                            }
                        </Footer>
                    )
                }
            </Main>
        </Backdrop>
    )
}

export default Modal;