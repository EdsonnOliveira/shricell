import React from "react";

import { black, white } from "../../constants/colors";

import {
    PrimaryMedium,
    PrimaryLarge,
    SecundaryMedium,
    GhostSmall,
    SecundaryLarge,
} from "./style";
import IndexProps from "./models";

const Button: React.FC<IndexProps> = ({
    type,
    text,
    textColor,
    onClick,
    flex,
    disabled,
    selected,
    mt,
    ml,
    mr,
    mb
}) => {
    switch (type) {
        case 'primaryLarge':
            return (
                <PrimaryLarge
                    onClick={onClick}
                    mt={mt} ml={ml} mr={mr} mb={mb}
                    disabled={disabled}
                >
                    <h4 className='fontWhite'>{ text }</h4>
                </PrimaryLarge>
            )
        case 'primaryMedium':
            return (
                <PrimaryMedium
                    onClick={onClick}
                    mt={mt} ml={ml} mr={mr} mb={mb}
                    disabled={disabled}
                >
                    <h4 className='fontWhite'>{ text }</h4>
                </PrimaryMedium>
            )
        case 'secundaryLarge':
            return (
                <SecundaryLarge
                    onClick={onClick}
                    mt={mt} ml={ml} mr={mr} mb={mb}
                    disabled={disabled}
                >
                    <h4 className='fontWhite'>{ text }</h4>
                </SecundaryLarge>
            )
        case 'secundaryMedium':
            return (
                <SecundaryMedium
                    onClick={onClick}
                    mt={mt} ml={ml} mr={mr} mb={mb}
                    disabled={disabled}
                >
                    <h4 className='fontWhite'>{ text }</h4>
                </SecundaryMedium>
            )
        case 'ghost':
            return (
                <GhostSmall
                    onClick={onClick}
                    flex={flex}
                    mt={mt} ml={ml} mr={mr} mb={mb}
                >
                    <h5 className={textColor}>{ text }</h5>
                </GhostSmall>
            )
    }
}

export default Button;