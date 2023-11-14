import React from "react";

import { ArrowUpward } from "@mui/icons-material";

import { MainContainer, StyledIconButton, Arrow } from "./scrollUpArrowStyles";

export default function ScrollUpArrow({ position, parentRef, setShowArrow }) {

    const handleScrollToTop = () => {
        parentRef.current.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <MainContainer position={position} onClick={handleScrollToTop}>
            <StyledIconButton>
                <Arrow>
                    <ArrowUpward />
                </Arrow>
            </StyledIconButton>
        </MainContainer>
    )
}