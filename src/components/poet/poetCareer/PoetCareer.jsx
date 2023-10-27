import React, { useEffect, useRef, useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import { useSetLang } from "../../../App";
import { useMediaQuery } from 'react-responsive';

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
    const [currentSize, setCurrentSize] = useState(0);
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;
        
        setCurrentSize(parentWidth);

        // Same concept as centering div's with position absolute
        if (isMobile) {
            setTranslate(-parentWidth - 30);
        } else {
            setTranslate(parentWidth/2 - 1250);
        }

    }, []);

    const handleNext = () => {
        if (currentIndex < points?.years?.length - 1) {            
            setCurrentIndex(prevState => prevState + 1);
            
            if (isMobile) {
                setTranslate(prevState => prevState - (currentSize + 30));
            } else {
                setTranslate(prevState => prevState - 850);
            }
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);

            if (isMobile) {
                setTranslate(prevState => prevState + (currentSize + 30));
            } else {
                setTranslate(prevState => prevState + 850);
            }
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
                                        {!isMobile ? 
                                            <Footer>
                                                <StyledIconButton left={1} onClick={handlePrev} disabled={i === 1}>
                                                    <ArrowForwardIos />
                                                </StyledIconButton>
                                                <Step>{`${currentIndex + 1}/${points?.years.length}`}</Step>
                                                <StyledIconButton onClick={handleNext} disabled={i === points?.years?.length}>
                                                    <ArrowForwardIos />
                                                </StyledIconButton>
                                            </Footer>
                                        : null}
                                    </DescWrapper>
                                </InfoWrapper>
                            );
                        })}
                        {isMobile ? 
                            <Footer>
                                <StyledIconButton left={1} onClick={handlePrev} disabled={currentIndex === 0}>
                                    <ArrowForwardIos />
                                </StyledIconButton>
                                <Step>{`${currentIndex + 1}/${points?.years.length}`}</Step>
                                <StyledIconButton onClick={handleNext} disabled={currentIndex === points?.years?.length - 1}>
                                    <ArrowForwardIos />
                                </StyledIconButton>
                            </Footer>
                        : null}
                    </InfoInnerContainer>
                </InfoContainer>
            </YearSlider>
        </MainContainer>
    );
}