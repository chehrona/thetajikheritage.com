import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useSetLang } from "../../App";

import { stepInfo } from "./helper"; 

import {
    MainContainer,
    Indicator,
    SemiCircle,
    NumLine,
    StepperBox,
    Step,
    MiddleStep,
    IndicatorStep,
    TitleWrapper,
    LargeTitle,
    Desc
} from "./homeStepperStyles";

export default function HomeStepper() {
    const [currentStep, setCurrentStep] = useState(0);
    const [visibleSteps, setVisibleSteps] = useState([]);
    const containerRef = useRef(null);
    const { lang } = useSetLang();

    const stepsPerPage = 3;

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
        const scrollDirection = container.scrollTop > currentStep * container.clientHeight ? 'down' : 'up';

        if (scrollDirection === 'down' && currentStep + stepsPerPage < stepInfo.length) {
            setCurrentStep((prevStep) => prevStep + 1);
        } else if (scrollDirection === 'up' && currentStep > 0) {
            setCurrentStep((prevStep) => prevStep - 1);
        }
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
        container.removeEventListener('scroll', handleScroll);
        };
    }, [currentStep, stepInfo]);

    useEffect(() => {
        const startIndex = currentStep;
        const endIndex = Math.min(currentStep + stepsPerPage, stepInfo.length);
        const visibleStepsArray = [];

        for (let i = startIndex; i < endIndex; i++) {
        if (i < stepInfo.length) {
            visibleStepsArray.push(stepInfo[i]);
        }
        }

        setVisibleSteps(visibleStepsArray);
    }, [currentStep, stepInfo]);

    return (
        <MainContainer>
            <Indicator>
                <SemiCircle />
                <IndicatorStep>{visibleSteps[1]?.num}</IndicatorStep>
            </Indicator>
            <NumLine />
            <StepperBox ref={containerRef}>
                <Step>{visibleSteps[0]?.num}</Step>
                <TitleWrapper>
                    <LargeTitle>{visibleSteps[0]?.text[lang]}</LargeTitle>
                </TitleWrapper>
                <Step bottom={true}>{visibleSteps[2]?.num}</Step>
            </StepperBox>
            <NumLine bottom={true} />
            <Desc dangerouslySetInnerHTML={{__html: visibleSteps[0]?.desc[lang]}}></Desc>
        </MainContainer>
    );
}