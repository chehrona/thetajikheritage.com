import React, { useState } from "react";
import { useSetLang } from "../../../App";
import { 
    InfoContainer,
    MainTitle,
    HistoryInfo,
    ImageContainer,
    MainImage,
    StyledButton,
    StyledPinIcon
} from "./recipeInfoStyles";

export default function RecipeInfo({ recipe }) {
    const { lang } = useSetLang();
    const [pinHovered, setPinHovered] = useState(false);
    
    return (
        <InfoContainer>
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
            <MainTitle>{recipe.title[lang]}</MainTitle>
            <HistoryInfo dangerouslySetInnerHTML={{__html: recipe.history[lang]}}></HistoryInfo>
        </InfoContainer>
    )
}