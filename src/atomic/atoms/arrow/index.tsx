import React from "react";

import ArrowIcon from '@assets/vector/arrow.png'

import { Main } from "./style";
import { IndexProps } from "./models";

const Arrow: React.FC<IndexProps> = ({
    direction = 'bottom',
    onClick
}) => <Main src={ArrowIcon} alt='arrow' direction={direction} onClick={onClick} />

export default Arrow;