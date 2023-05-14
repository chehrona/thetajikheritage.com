import React from "react";
import { MainContainer, InviteContainer } from "./recipeTabStyles";

export default function RecipeTabs({ recipe }) {
    return (
        <MainContainer>
            <InviteContainer>Nerdy talk aside, let's make some {recipe?.id}!</InviteContainer>
        </MainContainer>
    )
}