import { VolumeUp } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useSetLang } from "../../../App";
import { recipes } from "../../../data/recipeData";
import { StyledLink } from "../recipeBox/recipeBoxStyles";

import { 
    RecipeBoxContainer,
    RecipeCard,
    RecipeTitle,
    RecipeImage,
    RecipeSubtitle,
    RecipeNameBox,
    StyledIconButton,
} from "./recipeBoxStyles";

export default function RecipeBox() {
    const { lang, isMenuShown, setLang } = useSetLang();
    const location = useLocation();

    useEffect(() => {
        if (location.search.length) {
            setLang(location.search.substring(1));
        }
    }, []);

    function toggleAudio(e) {
        const audioFile = e.currentTarget.children[0];
        audioFile.play();
    }

    if (!isMenuShown) {
        return (
            <RecipeBoxContainer>
                {recipes?.map((recipe, i) => {
                    return (
                        <RecipeCard key={i} delay={`${0.01*i}s`}>
                            <StyledLink to={"/cuisine" + recipe?.link}>
                                <RecipeImage
                                    src={recipe?.imageName}
                                />
                            </StyledLink>
                            <RecipeNameBox>
                                <RecipeTitle>
                                    {recipe?.title[lang]}
                                </RecipeTitle>
                                <StyledIconButton onClick={(e) => toggleAudio(e)}>
                                    <audio src={recipe?.sound}></audio>
                                    <VolumeUp />
                                </StyledIconButton>
                            </RecipeNameBox>
                            <RecipeSubtitle>
                                {recipe?.subtitle[lang]}
                            </RecipeSubtitle>
                        </RecipeCard>
                    )
                })}
                
            </RecipeBoxContainer>
        )
    }
}