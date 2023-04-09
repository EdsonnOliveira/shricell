import React from 'react'

import AppleIcon from '@assets/brand/Apple.png'
import SamsungIcon from '@assets/brand/Samsung.png'

import { IndexProps } from './models';
import { Main } from './style';

const Brand: React.FC<IndexProps> = ({
    type
}) => {
    const searchImage = () => {
        switch (type) {
            case 'apple':
                return AppleIcon;
            case 'samsung':
                return SamsungIcon;
        }
    }

    return (
        <Main src={searchImage()} alt={type} />
    )
}

export default Brand;