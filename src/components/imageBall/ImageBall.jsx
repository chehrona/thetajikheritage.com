import React, { useState, useEffect } from "react";

import { Border, HomeImage, MainContainer } from "./imageBallStyles";

export default function ImageBall({ outerSpheres, innerSpheres }) {
    return (
        <MainContainer>
            {outerSpheres?.map((ball) => {
                return (
                    <Border 
                        key={ball.size}
                        size={ball.size}
                        opacity={ball.size?.opacity}
                        bottom={ball.bottom || ""}
                        right={ball.right}
                        top={ball.top}
                        border={ball.border || false}
                    />
                );
            })}
            {innerSpheres?.map((ball, i) => {
                return (
                    <HomeImage
                        key={ball.size}
                        src={ball.img}
                        size={ball.size}
                        opacity={ball.size?.opacity}
                        bottom={ball.bottom || ""}
                        right={ball.right}
                        top={ball.top}
                    />
                );
            })}
        </MainContainer>
    )
}