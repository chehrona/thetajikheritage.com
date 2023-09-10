import React, { useEffect, useState, useRef } from "react";
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
    LargeTitle
} from "./homeStepperStyles";
import { useSetLang } from "../../App";

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
                <MiddleStep>
                    <LargeTitle>{visibleSteps[0]?.text[lang]}</LargeTitle>
                </MiddleStep>
                <Step bottom={true}>{visibleSteps[2]?.num}</Step>
            </StepperBox>
            <NumLine bottom={true} />
        </MainContainer>
    );
}