import React, {useState} from "react";
import {useParams} from "react-router-dom";
import { useSetLang } from "../App";
import "./finalPagesStyles.css";
import { recipes } from "../data/recipeData";
import { 
    PageContainer,
    MainImage,
    ImageContainer,
    StyledPinIcon,
    InstructionContainer,
    IngredientContainer,
    SubContainer
} from "./recipePageStyles";

import RecipeInfo from "../components/recipeInfo/RecipeInfo";
import RecipeIngredients from "../components/recipeIngredients/RecipeIngredients";
import RecipeSources from "../components/recipeSources/RecipeSources";
import RecipeTabs from "../components/recipeTabs/RecipeTabs";
import Allergy from "../components/allergy/Allergy";
import Directions from "../components/directions/Directions";

export default function RecipePage() {
    const { id } = useParams(),
          { isMenuShown } = useSetLang(),
          [pinHovered, setPinHovered] = useState(false),
          recipe = recipes.filter((recipe) => recipe.id === id);

    if (recipe && !isMenuShown) {
        return (
            <PageContainer>
                <ImageContainer onMouseEnter={() => setPinHovered(true)} onMouseLeave={() => setPinHovered(false)}>
                    {pinHovered && <a data-pin-do="buttonPin"
                        href={`https://www.pinterest.com/pin/create/button/?url=http://www.thetajikheritage.com/cuisine/${recipe[0].id}/&media=https://www.thetajikheritage.com/recipePics/${recipe[0].mainImg}&description=${recipe[0].title}`}
                        target={"_blank"}
                        >
                        <StyledPinIcon />
                    </a>}
                    <MainImage src={recipe[0].mainImg} />
                </ImageContainer>
                <RecipeInfo recipe={recipe[0]} />
                <RecipeSources recipe={recipe[0]} />
                <RecipeTabs recipe={recipe[0]} />
                <SubContainer>
                    <IngredientContainer>
                        <Allergy recipe={recipe[0]} />
                        <RecipeIngredients recipe={recipe[0]} />
                    </IngredientContainer>
                    <InstructionContainer>
                        <Directions recipe={recipe[0]} />
                    </InstructionContainer>
                </SubContainer>
            </PageContainer>
        )
    }
}