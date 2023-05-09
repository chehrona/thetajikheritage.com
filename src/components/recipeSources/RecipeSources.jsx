import React from "react";
import { IconButton } from "@mui/material";

import { DropDownContainer,
         Line,
         StyledDownIcon,
} from "./recipeSourcesStyles";

export default function RecipeSources() {
    return (
        <DropDownContainer>
            <Line></Line>
            <IconButton>
                <StyledDownIcon></StyledDownIcon>
            </IconButton>
            <Line></Line>
        </DropDownContainer>
    )
}