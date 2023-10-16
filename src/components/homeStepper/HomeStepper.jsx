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
    Desc,
    OtherSteps
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
            <OtherSteps>
                <NumLine />
                <Step>{visibleSteps[0]?.num}</Step>
                <Step bottom={true}>{visibleSteps[2]?.num}</Step>
                <NumLine bottom={true} />
            </OtherSteps>
            <StepperBox ref={containerRef}>
                <TitleWrapper>
                    <LargeTitle fontSize={visibleSteps[1]?.text[lang].font}>{visibleSteps[1]?.text[lang].text}</LargeTitle>
                </TitleWrapper>
                <Desc dangerouslySetInnerHTML={{__html: visibleSteps[1]?.desc[lang]}}></Desc>
            </StepperBox>
        </MainContainer>
    );
}