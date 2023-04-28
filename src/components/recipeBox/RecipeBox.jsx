import { VolumeUp } from "@mui/icons-material";
import React, { useState } from "react";
import { recipes } from "../../data/recipeData";

import { 
    RecipeBoxContainer,
    RecipeCard,
    RecipeTitle,
    RecipeImage,
    RecipeSubtitle,
    RecipeNameBox,
    StyledIconButton
} from "./recipeBoxStyles";

export default function RecipeBox() {
    const [hovered, setHovered] = useState(false);

    function toggleAudio(e) {
        const audioFile = e.currentTarget.children[0];
        audioFile.play();
    }

    return (
        <RecipeBoxContainer>
            {recipes.map((recipe, i) => {
                return (
                    <RecipeCard key={i} hovered={hovered === i}>
                        <RecipeImage
                            src={recipe.imageName}
                            hovered={hovered === i}
                            data={i}
                            onMouseEnter={(e) => setHovered(e.currentTarget.getAttribute("data"))}
                            onMouseLeave={() => setHovered(false)}
                        />
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