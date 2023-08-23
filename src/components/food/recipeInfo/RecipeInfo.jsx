import React from "react";
import { useSetLang } from "../../../App";
import { 
    InfoContainer,
    MainTitle,
    HistoryInfo,
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