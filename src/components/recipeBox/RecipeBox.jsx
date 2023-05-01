import { VolumeUp } from "@mui/icons-material";
import React, { useState } from "react";
import { recipes } from "../../data/recipeData";
import { StyledLink } from "../recipeBox/recipeBoxStyles";

import { 
    RecipeBoxContainer,
    RecipeCard,
    RecipeTitle,
    RecipeImage,
    RecipeSubtitle,
    RecipeNameBox,
    StyledIconButton,
    StyledPinIcon,
    CircleBorder
} from "./recipeBoxStyles";

export default function RecipeBox() {
    function toggleAudio(e) {
        const audioFile = e.currentTarget.children[0];
        audioFile.play();
    }

    return (
        <RecipeBoxContainer>
            {recipes.map((recipe, i) => {
                return (
                    <RecipeCard key={i}>
                        <StyledLink to={"/cuisine" + recipe.link}>
                            <RecipeImage
                                src={recipe.imageName}
                            />
                        </StyledLink>
                        <RecipeNameBox>
                            <RecipeTitle>
                                {recipe.title}
                            </RecipeTitle>
                            <StyledIconButton onClick={(e) => toggleAudio(e)}>
                                <audio src={recipe.sound}></audio>
                                <VolumeUp />
                            </StyledIconButton>
                        </RecipeNameBox>
                        <RecipeSubtitle>
                            {recipe.subtitle}
                        </RecipeSubtitle>
                    </RecipeCard>
                )
            })}
            
        </RecipeBoxContainer>
    )
}