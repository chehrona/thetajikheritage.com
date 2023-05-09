import React, {useState} from "react";
import {useParams} from "react-router-dom";
import { useSetLang } from "../App";
import "./finalPagesStyles.css";
import { recipes } from "../data/recipeData";
import { PageContainer,
         MainImage,
         IntroSection,
         MainTitle,
         ImageContainer,
         StyledPinIcon,
         InfoContainer,
         HistoryInfo,
         AllergyContainer,
         ContainsBox,
         LabelContainer,
         LabelImage,
         BoxTitle,
         LabelWrapper,
         AllergenName,
         IngredientContainer,
         SubTitle,
         IngredientBox,
         Ingredient,
         DietBox,
         Line,
         DropDownContainer,
         StyledDownIcon,
} from "./recipePageStyles";
import { IconButton } from "@mui/material";
import RecipeInfo from "../components/recipeInfo/RecipeInfo";

export default function RecipePage() {
    const { id } = useParams(),
          { lang, isMenuShown } = useSetLang(),
          [pinHovered, setPinHovered] = useState(false),
          recipe = recipes.filter((recipe) => recipe.id === id);

    if (recipe && !isMenuShown) {
        return (
            <PageContainer>
                <IntroSection>
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
                </IntroSection>
                <IntroSection>
                    <ImageContainer>
                        <IngredientContainer>
                            <SubTitle>{recipe[0].ingredientsLang[lang]}</SubTitle>
                            <IngredientBox>
                                {recipe[0].ingredients[lang].map((piece, i) => {
                                    return (
                                        <Ingredient dangerouslySetInnerHTML={{__html: piece}}></Ingredient>
                                    )
                                })}
                            </IngredientBox>
                        </IngredientContainer>
                    </ImageContainer>
                    <InfoContainer>
                        <SubTitle margin={"false"}>{recipe[0].directionsLang[lang]}</SubTitle>
                        <IngredientBox margin={"false"}>
                            {recipe[0].directions[lang].map((piece, i) => {
                                return (
                                    <Ingredient dangerouslySetInnerHTML={{__html: piece}}></Ingredient>
                                )
                            })}
                        </IngredientBox>
                    </InfoContainer>
                </IntroSection>
            </PageContainer>
        )
    }
}