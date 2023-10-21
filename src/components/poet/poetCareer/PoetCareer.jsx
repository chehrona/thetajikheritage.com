import React, { useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";

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
    ButtonWrapper,
    Step, 
    StyledIconButton,
    Image
} from "./poetCareerStyles";

export default function PoetCareer({ points }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < points?.years?.length - 1) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    console.log(currentIndex, "index")

    return (
        <MainContainer id='Career'>
            <YearSlider>
                <UnitWrapper>
                    <Line />
                    {points?.years?.map((point, i) => {
                        return (
                            <YearWrapper size={i === currentIndex}>
                                <Year show={i !== currentIndex}>{point}</Year>
                            </YearWrapper>   
                        );
                    })}
                </UnitWrapper>
                <InfoContainer>
                    <InfoWrapper>
                        <DescWrapper />
                        <ButtonWrapper />
                    </InfoWrapper>
                    <InfoWrapper main={1}>
                        <DescWrapper>
                            <Image />
                        </DescWrapper>
                        <ButtonWrapper>
                            <StyledIconButton left={1} onClick={handlePrev} disabled={currentIndex === 0}>
                                <ArrowForwardIos />
                            </StyledIconButton>
                            <Step>{`${currentIndex + 1}/${points?.years.length}`}</Step>
                            <StyledIconButton onClick={handleNext} disabled={currentIndex === points?.years.length - 1}>
                                <ArrowForwardIos />
                            </StyledIconButton>
                        </ButtonWrapper>
                    </InfoWrapper>
                    <InfoWrapper>
                        <DescWrapper />
                        <ButtonWrapper />
                    </InfoWrapper>
                </InfoContainer>
            </YearSlider>
        </MainContainer>
    );
}