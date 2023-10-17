import React, { useRef } from "react";
import { useSetLang } from "../../App";

import { stepInfo } from "./helper"; 

import {
    MainContainer,
    Indicator,
    SemiCircle,
    NumLine,
    StepperBox,
    Step,
    IndicatorStep,
    TitleWrapper,
    LargeTitle,
    Desc,
    OtherSteps,
    StepperContainer,
    HideBox,
    Overlay
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
                <HideBox>
                    <Overlay>
                        <NumLine />
                        <Step>{visibleSteps[0]?.num}</Step>
                    </Overlay>
                </HideBox>
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
            <OtherSteps>
                <HideBox bottom={1}>
                    <Overlay>
                        <Step>{visibleSteps[2]?.num}</Step>
                        <NumLine />
                    </Overlay>
                </HideBox>
            </OtherSteps>
        </MainContainer>
    );
}