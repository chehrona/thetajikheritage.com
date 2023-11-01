import React from "react";
import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import { useSetLang } from "../../../App";

import { IconButton } from "@mui/material";

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
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

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
                <SubTitle>
                    {lang === 'ru' ? 'Порции' : 
                    (lang === 'tj' ? 'Портсия' : 'Servings')}
                </SubTitle>
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
                <SubTitle>
                    {lang === 'ru' ? 'Общее' : 
                    (lang === 'tj' ? 'Ҳамагӣ' : 'Total')}
                </SubTitle>
                <TimeBox>{recipe?.time[lang].total}</TimeBox>
            </QuantityContainer>
            <QuantityContainer>
                <SubTitle>
                    {lang === 'ru' ? (isMobile ? 'Подготов.' : 'Подготовка') : 
                    (lang === 'tj' ? 'Тайёрӣ' : 'Prep')}
                </SubTitle>
                <TimeBox>{recipe?.time[lang].prep}</TimeBox>
            </QuantityContainer>
            <QuantityContainer>
                <SubTitle>
                    {lang === 'ru' ? (isMobile ? 'Готов.' : 'Готовить') : 
                    (lang === 'tj' ? 'Пухтупаз' : 'Cook')}
                </SubTitle>
                <TimeBox>{recipe?.time[lang].cook}</TimeBox>
            </QuantityContainer>
            {!isMobile && 
                <PrintContainer>
                    <SubTitle>
                        {lang === 'ru' ? 'Расспечатать' : 
                        (lang === 'tj' ? 'Чоп кунед' : 'Print')}
                    </SubTitle>
                    <StyledLink to={"/cuisine" + recipe.link + "/print"} target={"_blank"}>
                        <IconButton style={{marginTop: "0.55rem"}}>
                            <PrintBox src={'/printIcons/print.png'}></PrintBox>
                        </IconButton>
                    </StyledLink>
                </PrintContainer>
            }
        </MainContainer>
    )
}