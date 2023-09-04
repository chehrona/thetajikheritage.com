import React, {useState} from "react";
import {useParams} from "react-router-dom";
import { useSetLang } from "../../App";

import "./finalPagesStyles.css";
import { recipes } from "../../data/recipeData";

import RecipeInfo from "../../components/food/recipeInfo/RecipeInfo";
import RecipeIngredients from "../../components/food/recipeIngredients/RecipeIngredients";
import Sources from "../../components/common/recipeSources/Sources";
import RecipeTabs from "../../components/food/recipeTabs/RecipeTabs";
import Allergy from "../../components/food/allergy/Allergy";
import Directions from "../../components/food/directions/Directions";
import Servings from "../../components/food/servings/Servings";

import { 
    PageContainer,
    MainImage,
    ImageContainer,
    StyledPinIcon,
    InstructionContainer,
    IngredientContainer,
    SubContainer
} from "./recipePageStyles";

export default function RecipePage() {
    const { id } = useParams(),
        { lang } = useSetLang(),
        [pinHovered, setPinHovered] = useState(false),
        recipe = recipes.filter((recipe) => recipe.id === id)[0],
        [servings, setServings] = useState(recipe?.startServing);

    if (recipe) {
        return (
            <PageContainer>
                <ImageContainer onMouseEnter={() => setPinHovered(true)} onMouseLeave={() => setPinHovered(false)}>
                    <a
                        href={`https://www.pinterest.com/pin/create/button/?url=${recipe.pinUrl}&media=https://i.pinimg.com/736x/17/34/8e/17348e163a3212c06e61c41c4b22b87a.jpg&description=${recipe.pinDesc[lang]}`}
                        data-pin-do="buttonBookmark"
                        data-pin-custom="true"
                        target={"_blank"}
                        >
                        <StyledPinIcon />
                    </a>
                    <MainImage src={recipe?.mainImg} />
                </ImageContainer>
                <RecipeInfo recipe={recipe} />
                <Sources
                    recipe={recipe}
                    line={'#bd9d52'}
                    color={'#0F0A00'}
                    title={'#000'}
                    background={'#fcf6e9'}
                />
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