import React, { useEffect, useRef, useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import { useSetLang } from "../../../App";

import { 
    MainContainer,
    YearSlider,
    UnitWrapper,
    YearWrapper,
    Year,
    Line,
    InfoContainer,
    InfoWrapper,
    DescWrapper,
    Footer,
    Step, 
    StyledIconButton,
    Image,
    Desc,
    InfoInnerContainer
} from "./poetCareerStyles";

export default function PoetCareer({ points }) {
    const { lang } = useSetLang();
    const parentRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translate, setTranslate] = useState(0);

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        // Same concept as centering div's with position absolute
        setTranslate(parentWidth/2 - 1250);
    }, []);

    const handleNext = () => {
        if (currentIndex < points?.years?.length - 1) {            

            setCurrentIndex(prevState => prevState + 1);            
            setTranslate(prevState => prevState - 850);
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {

            setCurrentIndex(prevState => prevState - 1);
            setTranslate(prevState => prevState + 850);
        }
    }

    return (
        <MainContainer id='Career'>
            <YearSlider>
                <UnitWrapper>
                    <Line />
                    {points?.years?.map((point, i) => {
                        return (
                            <YearWrapper key={i + 1} size={i === currentIndex}>
                                <Year show={i !== currentIndex}>{point}</Year>
                            </YearWrapper>   
                        );
                    })}
                </UnitWrapper>
                <InfoContainer ref={parentRef}>
                    <InfoInnerContainer>
                        {points?.images?.map((img, i) => {
                            return (
                                <InfoWrapper key={img + i} translate={translate}>
                                    <Image src={img} />
                                    <DescWrapper>
                                        <Desc dangerouslySetInnerHTML={{__html: points?.text[lang][i]}} />
                                        <Footer>
                                            <StyledIconButton left={1} onClick={handlePrev} disabled={i === 1}>
                                                <ArrowForwardIos />
                                            </StyledIconButton>
                                            <Step>{`${currentIndex + 1}/${points?.years.length}`}</Step>
                                            <StyledIconButton onClick={handleNext} disabled={i === points?.years?.length}>
                                                <ArrowForwardIos />
                                            </StyledIconButton>
                                        </Footer>
                                    </DescWrapper>
                                </InfoWrapper>
                            );
                        })}
                    </InfoInnerContainer>
                </InfoContainer>
            </YearSlider>
        </MainContainer>
    );
}