import React from 'react'

import AppleIcon from '@assets/brand/Apple.png'
import SamsungIcon from '@assets/brand/Samsung.png'

import { IndexProps } from './models';
import { Main } from './style';

const Brand: React.FC<IndexProps> = ({
    type
}) => {
    const searchImage = () => {
        switch (type.toUpperCase()) {
            case 'APPLE':
                return AppleIcon;
            case 'SAMSUNG':
                return SamsungIcon;
        }
    }

    return (
        <Main src={String(searchImage())} alt={type} />
    )
}

export default Brand;