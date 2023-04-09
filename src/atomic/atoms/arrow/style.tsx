import Image from "next/image";
import styled from "styled-components";
import { IndexStyledProps } from "./models";

export const Main = styled(Image)`
    width: 17px;
    object-fit: contain;
    transform: ${( props: IndexStyledProps ) => ( props.direction == 'top'
                                                    ? 'rotateZ(180deg)'
                                                    : props.direction == 'right'
                                                    ? 'rotateZ(265deg)'
                                                    : props.direction == 'left'
                                                    ? 'rotateZ(90deg)'
                                                    : null)};
    transition: 0.4s;
`