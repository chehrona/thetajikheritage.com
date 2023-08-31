import React from "react";
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
    const { lang } = useSetLang();
    return (
        <PoetBoxContainer>
            {poets?.map((poet, i) => {
                return (
                    <StyledLink to={"/language" + poet?.link}>
                        <PoetCardWrapper key={i}>
                            <PoetImgContainer>
                                <PoetImage src={poet?.img[0]} />
                                <PoetNameBox>
                                    <PoetName>{poet?.name[lang][0]}</PoetName>
                                    <PoetName>{poet?.name[lang][1]}</PoetName>
                                    <PoetDates>{poet?.years[lang]}</PoetDates>
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