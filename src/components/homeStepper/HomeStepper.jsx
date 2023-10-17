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
    OtherSteps,
    StepperContainer
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
            <StepperContainer>
                {stepInfo.map((step) => {
                    return (
                        <StepperBox>
                            <TitleWrapper>
                                <LargeTitle fontSize={step?.text[lang].font}>{step?.text[lang].text}</LargeTitle>
                            </TitleWrapper>
                            <Desc dangerouslySetInnerHTML={{__html: step?.desc[lang]}}></Desc>
                        </StepperBox>
                    );
                })}
            </StepperContainer>
        </MainContainer>
    );
}