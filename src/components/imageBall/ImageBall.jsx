import React, { useState, useEffect } from "react";
import { innerSpheres, outerSpheres } from './helper';

import { Border, HomeImage, MainContainer } from "./imageBallStyles";

export default function ImageBall() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (e) => {
        const newScrollPosition = e.clientY;
        setScrollPosition(newScrollPosition);
    };

    function getHeight(size) {
        const height = Math.max(0, size - Math.min(size, scrollPosition * 0.5));
        const opacity = Math.max(0, 1 - Math.min(1, scrollPosition * 0.005));

        return {height: height, opacity: opacity};
    }

    return (
        <MainContainer onWheel={(e) => handleScroll(e)}>
            {outerSpheres.map((ball, i) => {
                return (
                    <Border 
                        key={ball.size}
                        size={getHeight(ball.size).height}
                        opacity={getHeight(ball.size).opacity}
                        bottom={ball.bottom || ""}
                        right={ball.right}
                        top={ball.top}
                        border={ball.border || false}
                    />
                );
            })}
            {innerSpheres.map((ball, i) => {
                return (
                    <HomeImage
                        key={ball.size}
                        src={ball.img}
                        size={getHeight(ball.size).height}
                        opacity={getHeight(ball.size).opacity}
                        bottom={ball.bottom || ""}
                        right={ball.right}
                        top={ball.top}
                    />
                );
            })}
        </MainContainer>
    )
}