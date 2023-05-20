import React from "react";
import { useSetLang } from "../../App";
import Allergy from "../allergy/Allergy";

import { MainContainer,
         SubTitle,
         Ingredient,
         Container 
} from "./recipeIngredientsStyles";

export default function RecipeIngredients( { recipe }) {
    const { lang } = useSetLang();
    return (
        <Container>
            <Allergy recipe={recipe} />
            <MainContainer height={recipe?.height}>
                <SubTitle>{recipe.ingredientsLang[lang]}</SubTitle>
                {recipe.ingredients[lang].map((piece, i) => {
                    return (
                        <Ingredient key={i} dangerouslySetInnerHTML={{__html: piece}}></Ingredient>
                    )
                })}
            </MainContainer>
        </Container>
    )
}