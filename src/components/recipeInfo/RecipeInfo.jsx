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
            <RecipeSources recipe={recipe}/>
            <AllergyContainer>
                {recipe.contains && 
                    <ContainsBox>
                        <BoxTitle>{recipe.containsLang[lang]}</BoxTitle>
                        <LabelWrapper>
                            {recipe.contains.map((label, i) => {
                                return (
                                    <LabelContainer>
                                        <LabelImage src={`/allergyLabels/${label}.png`} />
                                        <AllergenName>
                                            {recipe.labels[i][lang]}
                                        </AllergenName>
                                    </LabelContainer>
                                )
                            })}
                        </LabelWrapper>
                    </ContainsBox>
                }
                {recipe.diet && 
                    <DietBox>
                        <BoxTitle>{recipe.dietLang[lang]}</BoxTitle>
                        <LabelWrapper>
                            {recipe.diet.map((label, i) => {
                                return (
                                    <LabelContainer>
                                        <LabelImage src={`/allergyLabels/${label}.png`} />
                                        <AllergenName>
                                            {recipe.dietLabels[i][lang]}
                                        </AllergenName>
                                    </LabelContainer>
                                )
                            })}
                        </LabelWrapper>
                    </DietBox>
                }
            </AllergyContainer>
        </InfoContainer>
    )
}