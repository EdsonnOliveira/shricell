import React from "react";

import { IndexProps } from "./models";
import Main from "./style";

const BoxCommon:React.FC<IndexProps> = ({
    width,
    width800,
    height,
    flex,
    bgColor,
    scroll,
    borderRadius,
    children,
    onClick,
    flexWrap,
    alignItems800,
    alignItems,
    bottom,
    flexDirection800,
    flexDirection,
    gap,
    justiftyContent800,
    justifyContent,
    left,
    pb,
    pl,
    pr,
    pt,
    right,
    top,
    mt,
    ml,
    mr,
    mb,
    display
}) => {
    return (
        <Main
            flexDirection={flexDirection}
            borderRadius={borderRadius}
            flexWrap={flexWrap}
            width={width}
            width800={width800}
            height={height}
            flex={flex}
            bgColor={bgColor}
            scroll={scroll}
            alignItems800={alignItems800}
            alignItems={alignItems}
            bottom={bottom}
            flexDirection800={flexDirection800}
            gap={gap}
            justiftyContent800={justiftyContent800}
            justifyContent={justifyContent}
            left={left}
            pb={pb}
            pl={pl}
            pr={pr}
            pt={pt}
            right={right}
            top={top}
            onClick={onClick}
            mt={mt}
            ml={ml}
            mr={mr}
            mb={mb}
            display={display}
        >
            { children }
        </Main>
    )
}

export default BoxCommon;