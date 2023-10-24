import React, { useEffect } from "react";

import { useLocation } from 'react-router-dom';

import { useSetLang } from "../../../App";
import { poets } from "../../../data/poetData";

import {
    PoetBoxContainer,
    PoetCardWrapper,
    PoetImage,
    PoetDates,
    PoetImgContainer,
    PoetNameBox,
    PoetName,
    PoetInfoContainer,
    StyledLink
} from "./poetCardStyles";

export default function PoetCard() {
    const location = useLocation();
    const { lang, setLang } = useSetLang();

    useEffect(() => {
        if (location.search.length) {
            setLang(location.search.substring(1));
        }
    }, []);

    return (
        <PoetBoxContainer>
            {poets?.map((poet, i) => {
                return (
                    <StyledLink key={i} to={"/language" + poet?.link}>
                        <PoetCardWrapper delay={`${0.01*i}s`}>
                            <PoetImgContainer>
                                <PoetImage loading="lazy" src={poet?.img[0]} />
                                <PoetNameBox>
                                    <PoetName>{poet?.name[lang][0]}</PoetName>
                                    <PoetName>{poet?.name[lang][1]}</PoetName>
                                    <PoetDates>{poet?.years[lang][0]}-{poet?.years[lang][1]}</PoetDates>
                                </PoetNameBox>
                            </PoetImgContainer>
                            <PoetInfoContainer>{poet?.desc[lang]}</PoetInfoContainer>
                        </PoetCardWrapper>
                    </StyledLink>
                )
            })}
        </PoetBoxContainer>
    );
}