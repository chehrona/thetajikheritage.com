import React from "react";
import {useParams} from "react-router-dom";
import { useSetLang } from "../../App";
// import "./finalPagesStyles.css";
import { poets } from "../../data/poetData";

import { 
    PageContainer,
    MainContainer,
    SectionTitle,
    SegmentContainer,
    FadedImage,
    PoetNameContainer,
    PoetName,
    YearsContainer,
    Year,
} from "./poetPageStyles";

export default function PoetPage() {
    const { id } = useParams(),
        { lang } = useSetLang(),
        poet = poets.filter((poet) => poet.id === id)[0];

    if (poet) {
        return (
            <PageContainer>
                <MainContainer>
                    <div>
                        <SegmentContainer>
                            {poet?.sections[lang].map((piece, i) => {
                                return (
                                    <SectionTitle key={i}>{piece}</SectionTitle>
                                )
                            })}
                        </SegmentContainer>
                        <YearsContainer>
                            <Year>{(poet?.years[lang]).substring(0, 4)}</Year>
                            <div>{(poet?.years[lang]).substring(7)}</div>
                        </YearsContainer>
                    </div>
                    <FadedImage src={poet?.img[1]}/>
                    <PoetNameContainer>
                        <PoetName color={true}>{poet?.name[lang][0]}</PoetName>
                        <PoetName>{poet?.name[lang][1]}</PoetName>
                    </PoetNameContainer>
                </MainContainer>
            </PageContainer>
        )
    }
}