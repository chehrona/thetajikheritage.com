import React from "react";
import { useSetLang } from "../../../App";

import { 
    MainContainer,
    SectionTitle,
    TitleSpan,
    SegmentContainer,
    FadedImage,
    PoetNameContainer,
    PoetName,
    YearsContainer,
    Year,
    NumSpan
} from "./poetIntroStyles";

export default function PoetIntro({ poet }) {
    const { lang } = useSetLang();
    const yearOne = poet?.years[lang][0].split('');
    const yearTwo = poet?.years[lang][1].split('');

    return (
        <MainContainer>
            <div>
                <SegmentContainer>
                    {poet?.sections[lang].map((piece, i) => {
                        return (
                            <SectionTitle key={i} href={`#${poet?.sections.us[i]}`}>
                                <TitleSpan delay={`${0.05*i}s`}>{piece}</TitleSpan>
                            </SectionTitle>
                        )
                    })}
                </SegmentContainer>
                <YearsContainer>
                    <Year>
                        {yearOne?.map((num, i) => {
                            return <NumSpan key={i} delay={`${0.08*i}s`}>{num}</NumSpan>
                        })}
                    </Year>
                    <div>
                        {yearTwo?.map((num, i) => {
                            return <NumSpan key={i} delay={`${0.09*i}s`}>{num}</NumSpan>
                        })}
                    </div>
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