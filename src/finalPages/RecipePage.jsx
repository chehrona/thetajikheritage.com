import React from "react";
import {useParams} from "react-router-dom";
import { recipes } from "../data/recipeData";
import { PageContainer,
         MainImage,
         IntroSection,
         MainTitle,
         ImageContainer,
         StyledPinIcon
} from "./recipePageStyles";

export default function RecipePage() {
    const { id } = useParams();
    const recipe = recipes.filter((recipe) => recipe.id === id);

    if (recipe) {
        return (
            <PageContainer>
                <IntroSection>
                    <ImageContainer>
                        <a data-pin-do="buttonPin"
                            href={`https://www.pinterest.com/pin/create/button/?url=http://www.thetajikheritage.com/cuisine/${recipe[0].id}/&media=https://www.thetajikheritage.com/recipePics/${recipe[0].mainImg}&description=${recipe[0].title}`}
                            target={"_blank"}
                            >
                            <StyledPinIcon />
                            <MainImage src={recipe[0].mainImg} />
                        </a>
                    </ImageContainer>
                    <MainTitle>{recipe[0].title}</MainTitle>
                </IntroSection>
            </PageContainer>
        )
    }
}