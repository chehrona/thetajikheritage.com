import React, {useState} from "react";
import {useParams} from "react-router-dom";
import { useSetLang } from "../../App";
import "./finalPagesStyles.css";
import { recipes } from "../../data/recipeData";
import { 
    PageContainer,
    MainImage,
    ImageContainer,
    StyledPinIcon,
    InstructionContainer,
    IngredientContainer,
    SubContainer
} from "./recipePageStyles";

import RecipeInfo from "../../components/recipeInfo/RecipeInfo";
import RecipeIngredients from "../../components/recipeIngredients/RecipeIngredients";
import RecipeSources from "../../components/recipeSources/RecipeSources";
import RecipeTabs from "../../components/recipeTabs/RecipeTabs";
import Allergy from "../../components/allergy/Allergy";
import Directions from "../../components/directions/Directions";
import Servings from "../../components/servings/Servings";

export default function RecipePage() {
    const { id } = useParams(),
          { isMenuShown } = useSetLang(),
          [pinHovered, setPinHovered] = useState(false),
          recipe = recipes.filter((recipe) => recipe.id === id)[0],
          [servings, setServings] = useState(recipe?.startServing);

    if (recipe && !isMenuShown) {
        return (
            <PageContainer>
                <ImageContainer onMouseEnter={() => setPinHovered(true)} onMouseLeave={() => setPinHovered(false)}>
                    {pinHovered && <a data-pin-do="buttonPin"
                        href={`https://www.pinterest.com/pin/create/button/?url=http://www.thetajikheritage.com/cuisine/${recipe?.id}/&media=https://www.thetajikheritage.com/recipePics/${recipe?.mainImg}&description=${recipe?.title}`}
                        target={"_blank"}
                        >
                        <StyledPinIcon />
                    </a>}
                    <MainImage src={recipe?.mainImg} />
                </ImageContainer>
                <RecipeInfo recipe={recipe} />
                <RecipeSources recipe={recipe} />
                <RecipeTabs recipe={recipe} />
                <SubContainer>
                    <IngredientContainer>
                        <Allergy recipe={recipe} />
                        <RecipeIngredients recipe={recipe} />
                    </IngredientContainer>
                    <InstructionContainer>
                        <Servings recipe={recipe} servings={servings} setServings={setServings}/>
                        <Directions recipe={recipe} />
                    </InstructionContainer>
                </SubContainer>
            </PageContainer>
        )
    }
}