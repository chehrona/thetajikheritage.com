import React from "react";
import { useSetLang } from "../../../App";

import {
    MainContainer,
    SubTitle,
    Direction
} from "./directionsStyles"


export default function Directions({ recipe }) {
    const { lang } = useSetLang();
    
    return (
        <MainContainer height={recipe?.height}>
            <SubTitle>{recipe.directionsLang[lang]}</SubTitle>
            <div>
                {recipe.directions[lang].map((piece, i) => {
                    return (
                        <Direction key={i} dangerouslySetInnerHTML={{__html: piece}}></Direction>
                    )
                })}
            </div>
        </MainContainer>
    )
}