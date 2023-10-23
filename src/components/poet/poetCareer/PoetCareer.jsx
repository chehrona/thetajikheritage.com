import React, { useState } from "react";
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
    Body,
    Step, 
    StyledIconButton,
    Image,
    Desc
} from "./poetCareerStyles";

export default function PoetCareer({ points }) {
    const { lang } = useSetLang();
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
                        <Body>
                            <Image />
                            <DescWrapper />
                        </Body>
                        <Footer />
                    </InfoWrapper>
                    <InfoWrapper main={1}>
                        <Image src={points?.images[currentIndex]} />
                        <DescWrapper>
                            <Desc dangerouslySetInnerHTML={{__html: points?.text[lang][currentIndex]}} />
                            <Footer>
                                <StyledIconButton left={1} onClick={handlePrev} disabled={currentIndex === 0}>
                                    <ArrowForwardIos />
                                </StyledIconButton>
                                <Step>{`${currentIndex + 1}/${points?.years.length}`}</Step>
                                <StyledIconButton onClick={handleNext} disabled={currentIndex === points?.years.length - 1}>
                                    <ArrowForwardIos />
                                </StyledIconButton>
                            </Footer>
                        </DescWrapper>
                    </InfoWrapper>
                    <InfoWrapper>
                        <Body>
                            <Image />
                            <DescWrapper />
                        </Body>
                        <Footer />
                    </InfoWrapper>
                </InfoContainer>
            </YearSlider>
        </MainContainer>
    );
}