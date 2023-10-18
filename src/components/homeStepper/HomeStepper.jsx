import React, { useRef, useEffect, useState } from "react";
import { useSetLang } from "../../App";

import { stepInfo } from "./helper"; 

import {
    MainContainer,
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
} from "./homeStepperStyles";

export default function HomeStepper({ containerRef, divRefs, opacities }) {
    const { lang } = useSetLang();
    return (
        <MainContainer>
                <SemiCircle />
            <OtherSteps>
                <NumLine />
                {/* <Step>{visibleSteps[0]?.num}</Step> */}
            </OtherSteps>
            <StepperContainer ref={containerRef}>
                {stepInfo.map((step, i) => {
                    return (
                        <StepperBox
                            key={i}
                            ref={divRefs[i]}
                            opacity={opacities[i]}
                        >
                            <IndicatorStep>{step?.num}</IndicatorStep>
                            <div>
                                <TitleWrapper>
                                    <LargeTitle fontSize={step?.text[lang].font}>{step?.text[lang].text}</LargeTitle>
                                </TitleWrapper>
                                <Desc dangerouslySetInnerHTML={{__html: step?.desc[lang]}}></Desc>
                            </div>
                        </StepperBox>
                    );
                })}
            </StepperContainer>
            <OtherSteps bottom={1}>
                {/* <Step>{visibleSteps[2]?.num}</Step> */}
                <NumLine />
            </OtherSteps>
        </MainContainer>
    );
}