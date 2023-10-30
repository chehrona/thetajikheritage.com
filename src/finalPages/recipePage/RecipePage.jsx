import React, {useState} from "react";
import { useMediaQuery } from 'react-responsive';
import { useParams } from "react-router-dom";
import { useSetLang } from "../../App";

import "./finalPagesStyles.css";
import { recipes } from "../../data/recipeData";

import RecipeInfo from "../../components/food/recipeInfo/RecipeInfo";
import RecipeIngredients from "../../components/food/recipeIngredients/RecipeIngredients";
import Sources from "../../components/common/sources/Sources";
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
    SubContainer,
    RecipeContainer,
    StyledButton
} from "./recipePageStyles";

import {
    SubTitle,
    PrintContainer,
} from "../../components/food/servings/servingsStyles";

export default function RecipePage() {
    const { id } = useParams();
    const { lang } = useSetLang();
    const [pinHovered, setPinHovered] = useState(false);
    const recipe = recipes.filter((recipe) => recipe.id === id)[0];
    const [servings, setServings] = useState(recipe?.startServing);
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    if (recipe) {
        return (
            <PageContainer>
                <RecipeContainer>
                    <ImageContainer onMouseEnter={() => setPinHovered(true)} onMouseLeave={() => setPinHovered(false)}>
                        {pinHovered && 
                            <a
                                href={`https://www.pinterest.com/pin/create/button/?url=${recipe.pinUrl}&media=https://i.pinimg.com/736x/17/34/8e/17348e163a3212c06e61c41c4b22b87a.jpg&description=${recipe.pinDesc[lang]}`}
                                data-pin-do="buttonBookmark"
                                data-pin-custom="true"
                                target={"_blank"}
                                >
                                    <StyledPinIcon />
                            </a>
                        }
                        <MainImage src={recipe?.mainImg} />
                    </ImageContainer>
                    <RecipeInfo recipe={recipe} />
                    <Sources
                        data={recipe}
                        line={'#504221d1'}
                        color={'#fcf6e9'}
                        title={'#fff'}
                        background={'#0F0A00'}
                    />
                    <RecipeTabs recipe={recipe} />
                    <SubContainer>
                        <IngredientContainer>
                            <Allergy recipe={recipe} />
                            <Servings recipe={recipe} servings={servings} setServings={setServings} />
                        </IngredientContainer>
                        <InstructionContainer>
                            <RecipeIngredients recipe={recipe} />
                            <Directions recipe={recipe} />
                        </InstructionContainer>
                    </SubContainer>
                    {isMobile && 
                        <PrintContainer>
                            <StyledButton href={"/cuisine" + recipe.link + "/print"} target="_blank">
                                <SubTitle>
                                    {lang === 'ru' ? 'Расспечатать' : 
                                    (lang === 'tj' ? 'Чоп кунед' : 'Print')}
                                </SubTitle>
                            </StyledButton>
                        </PrintContainer>
                    }
                </RecipeContainer>
            </PageContainer>
        )
    }
}