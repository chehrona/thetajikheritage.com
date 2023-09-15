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

export default function HomeStepper({ visibleSteps }) {
    const containerRef = useRef(null);
    const { lang } = useSetLang();

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
                    <LargeTitle fontSize={visibleSteps[1]?.text[lang].font}>{visibleSteps[1]?.text[lang].text}</LargeTitle>
                </TitleWrapper>
                <Step bottom={true}>{visibleSteps[2]?.num}</Step>
            </StepperBox>
            <NumLine bottom={true} />
            <Desc dangerouslySetInnerHTML={{__html: visibleSteps[1]?.desc[lang]}}></Desc>
        </MainContainer>
    );
}