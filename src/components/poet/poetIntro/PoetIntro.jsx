import React from "react";
import { useSetLang } from "../../../App";

import { 
    MainContainer,
    SectionTitle,
    SegmentContainer,
    FadedImage,
    PoetNameContainer,
    PoetName,
    YearsContainer,
    Year,
} from "./poetIntroStyles";

export default function PoetIntro({ poet }) {
    const { lang } = useSetLang();

    return (
        <MainContainer id='Biography'>
            <div>
                <SegmentContainer>
                    {poet?.sections[lang].map((piece, i) => {
                        return (
                            <SectionTitle key={i} href={`#${poet?.sections.us[i]}`}>{piece}</SectionTitle>
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
                <PoetName color={'true'}>{poet?.name[lang][0]}</PoetName>
                <PoetName>{poet?.name[lang][1]}</PoetName>
            </PoetNameContainer>
        </MainContainer>
    )
}