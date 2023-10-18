import React, { useState, useEffect } from "react";

import { Border, HomeImage, MainContainer } from "./imageBallStyles";
import { stepInfo } from "../homeStepper/helper";

export default function ImageBall({ entry, opacities, index }) {
    return (
        <MainContainer>
            {entry.outer?.map((ball) => {
                return (
                    <Border 
                        key={ball.size}
                        size={ball.size}
                        opacity={opacities[index]}
                        bottom={ball.bottom || ""}
                        right={ball.right}
                        top={ball.top}
                        border={ball.border || false}
                    />
                );
            })}
            {entry.inner?.map((ball, i) => {
                return (
                    <HomeImage
                        key={ball.size}
                        src={ball.img}
                        size={ball.size}
                        opacity={opacities[index]}
                        bottom={ball.bottom || ""}
                        right={ball.right}
                        top={ball.top}
                    />
                );
            })}
        </MainContainer>
    )
}