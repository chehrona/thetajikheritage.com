import { IconButton } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import { useSetLang } from "../../../App";

import {
    MainContainer,
    QuantityContainer,
    ServeAmount,
    StyledAddIcon,
    StyledMinusIcon,
    SubTitle,
    ServeContainer,
    TimeBox,
    PrintContainer,
    PrintBox,
    StyledLink,
} from "./servingsStyles"

export default function Servings({ recipe, servings, setServings }) {
    const { lang } = useSetLang();
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    useEffect(() => {
        if (servings.length > 0 && !parseInt(servings)) {
            setServings(1);
            alert(recipe?.servingAlert[lang][1])
        } 

        if (servings.length > 0 && servings < 0) {
            setServings(1);
            alert(recipe?.servingAlert[lang][0]);
        }
    }, [servings]);

    function reduceServings() {
        let inputValue = servings;
        if (inputValue > 1) {
            inputValue = inputValue - 1;
            setServings(inputValue);
        } else {
            alert(recipe?.servingAlert[lang]);
        }
    }

    function increaseServings(e) {
        let inputValue = servings;
        inputValue = inputValue + 1;
        setServings(inputValue);
    }

    function getServings(e) {
        let inputValue = e.target.value;
        setServings(inputValue);
    }

    return (
        <MainContainer>
            <QuantityContainer>
                <SubTitle>{recipe?.servingLang[lang]}</SubTitle>
                <ServeContainer>
                    <IconButton onClick={reduceServings}>
                        <StyledMinusIcon />
                    </IconButton>
                    <ServeAmount value={servings} onChange={(e) => getServings(e)}/>
                    <IconButton onClick={increaseServings}>
                        <StyledAddIcon />
                    </IconButton>
                </ServeContainer>
            </QuantityContainer>
            <QuantityContainer>
                <SubTitle>{recipe?.timeLang[lang][0]}</SubTitle>
                <TimeBox>{recipe?.time[lang].total}</TimeBox>
            </QuantityContainer>
            <QuantityContainer>
                <SubTitle>{recipe?.timeLang[lang][1]}</SubTitle>
                <TimeBox>{recipe?.time[lang].prep}</TimeBox>
            </QuantityContainer>
            <QuantityContainer>
                <SubTitle>{recipe?.timeLang[lang][2]}</SubTitle>
                <TimeBox>{recipe?.time[lang].cook}</TimeBox>
            </QuantityContainer>
            {!isMobile && <PrintContainer>
                <SubTitle>{recipe?.timeLang[lang][3]}</SubTitle>
                <StyledLink to={"/cuisine" + recipe.link + "/print"} target={"_blank"}>
                    <IconButton style={{marginTop: "0.55rem"}}>
                        <PrintBox src={'/printIcons/printer.png'}></PrintBox>
                    </IconButton>
                </StyledLink>
            </PrintContainer>}
        </MainContainer>
    )
}