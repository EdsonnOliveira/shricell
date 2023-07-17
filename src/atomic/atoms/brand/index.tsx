import React from 'react'
import { StaticImageData } from 'next/image';

import AppleIcon from '@assets/brand/Apple.png'
import SamsungIcon from '@assets/brand/Samsung.png'

import { IndexProps } from './models';
import { Main } from './style';

const Brand: React.FC<IndexProps> = ({
    type
}) => {
    const searchImage = (): StaticImageData => {
        switch (type.toUpperCase()) {
            case 'APPLE':
                return AppleIcon;
            case 'SAMSUNG':
                return SamsungIcon;
            default:
                return SamsungIcon
        }
    }

    return (
        <Main src={searchImage()} alt={type} />
    )
}

export default Brand;