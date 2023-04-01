import React from "react";

import ButtonCloseIMG from '@assets/vector/buttonClose.png'

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
    secondButton
}) => {
    return !visible ? <></> : (
        <Backdrop>
            <Main>
                <Header>
                    <h4 className="fontWhite fontW400">{ title }</h4>
                    <ButtonClose src={ButtonCloseIMG} alt='buttonClose' onClick={onClose} />
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