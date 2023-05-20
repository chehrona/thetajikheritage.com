import { IconButton } from "@mui/material";
import React from "react";
import { useSetLang } from "../../App";
import printIcon from "./printer.png";

import {
    MainContainer,
    QuantityContainer,
    ServeAmount,
    StyledAddIcon,
    StyledMinusIcon,
    SubTitle,
    ServeContainer,
    TotalContainer,
    TimeBox,
    PrintContainer,
    PrintBox
} from "./servingsStyles"

export default function Servings({ recipe }) {
    const { lang } = useSetLang();
    return (
        <MainContainer>
            <QuantityContainer>
                <SubTitle>{recipe?.servingLang[lang]}</SubTitle>
                <ServeContainer>
                    <IconButton>
                        <StyledMinusIcon />
                    </IconButton>
                    <ServeAmount>{}</ServeAmount>
                    <IconButton>
                        <StyledAddIcon />
                    </IconButton>
                </ServeContainer>
            </QuantityContainer>
            <TotalContainer>
                <SubTitle>{recipe?.timeLang[lang][0]}</SubTitle>
                <TimeBox>{recipe?.time[lang].total}</TimeBox>
            </TotalContainer>
            <TotalContainer>
                <SubTitle>{recipe?.timeLang[lang][1]}</SubTitle>
                <TimeBox>{recipe?.time[lang].prep}</TimeBox>
            </TotalContainer>
            <TotalContainer>
                <SubTitle>{recipe?.timeLang[lang][2]}</SubTitle>
                <TimeBox>{recipe?.time[lang].cook}</TimeBox>
            </TotalContainer>
            <PrintContainer>
                <SubTitle>{recipe?.timeLang[lang][3]}</SubTitle>
                <IconButton style={{marginTop: "0.55rem"}}>
                    <PrintBox src={printIcon}></PrintBox>
                </IconButton>
            </PrintContainer>
        </MainContainer>
    )
}