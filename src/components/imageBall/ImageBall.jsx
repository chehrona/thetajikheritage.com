import React from "react";

import { MainContainer, HomeImage } from "./imageBallStyles";

export default function ImageBall({ ball }) {
    return (
        <MainContainer 
            size={ball.size}
            bottom={ball.bottom || ""}
            right={ball.right}
            top={ball.top}
            border={ball.border || false}
        >
            {ball.img && <HomeImage src={ball.img} size={ball.size} />}
        </MainContainer>
    )
}