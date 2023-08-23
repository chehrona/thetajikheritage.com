import React from "react";
import { useSetLang } from "../../../App";
import { poets } from "../../../data/poetData";

import { PoetBoxContainer, PoetCard, PoetImage, PoetDates, PoetImgContainer, PoetNameBox, PoetName, PoetInfoContainer, StyledLink } from "./poetBoxStyles";


export default function PoetBox() {
    const { lang } = useSetLang();
    return (
        <PoetBoxContainer>
            {poets?.map((poet, i) => {
                return (
                    <StyledLink to={"/language" + poet?.link}>
                        <PoetCard key={i}>
                            <PoetImgContainer>
                                <PoetImage src={poet?.img[0]} />
                                <PoetNameBox>
                                    <PoetName>{poet?.name[lang][0]}</PoetName>
                                    <PoetName>{poet?.name[lang][1]}</PoetName>
                                    <PoetDates>{poet?.years[lang]}</PoetDates>
                                </PoetNameBox>
                            </PoetImgContainer>
                            <PoetInfoContainer>{poet?.desc[lang]}</PoetInfoContainer>
                        </PoetCard>
                    </StyledLink>
                )
            })}
        </PoetBoxContainer>
    );
}