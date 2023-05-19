import React from "react";
import { useSetLang } from "../../App";
import RecipeSources from "../recipeSources/RecipeSources";
import { InfoContainer,
         MainTitle,
         HistoryInfo,
         AllergyContainer,
         ContainsBox,
         BoxTitle,
         LabelWrapper,
         LabelContainer,
         LabelImage,
         AllergenName,
         DietBox
} from "./recipeInfoStyles";

export default function RecipeInfo({ recipe }) {
    const { lang } = useSetLang();
    return (
        <InfoContainer>
            <MainTitle>{recipe.title[lang]}</MainTitle>
            <HistoryInfo dangerouslySetInnerHTML={{__html: recipe.history[lang]}}></HistoryInfo>
        </InfoContainer>
    )
}