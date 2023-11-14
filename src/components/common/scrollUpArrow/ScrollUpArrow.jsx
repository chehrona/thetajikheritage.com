import React from "react";

import { ArrowUpward } from "@mui/icons-material";

import { MainContainer, StyledIconButton, Arrow } from "./scrollUpArrowStyles";

export default function ScrollUpArrow() {
    return (
        <MainContainer>
            <StyledIconButton>
                <Arrow>
                    <ArrowUpward />
                </Arrow>
            </StyledIconButton>
        </MainContainer>
    )
}