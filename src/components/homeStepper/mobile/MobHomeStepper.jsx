import React, { useEffect, useState } from "react";
import { useSetLang } from "../../../App";

import { stepInfo } from "../helper"; 

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
    StepperContainer,
    StyledButton,
    Link,
    ImageSemiCircle
} from "./homeStepperStyles";

export default function MobHomeStepper({ containerRef, divRefs, opacities }) {
    const { lang } = useSetLang();
    const [visibleStepIndex, setVisibleStepIndex] = useState(0);

    useEffect(() => {
        setVisibleStepIndex(opacities.indexOf(1));
      }, [opacities]);
    
    return (
        <MainContainer>
            <StepperContainer ref={containerRef}>
                {stepInfo.map((step, i) => {
                    return (
                        <StepperBox
                            key={i}
                            ref={divRefs[i]}
                            opacity={opacities[i]}
                        >
                            <div>
                                <TitleWrapper>
                                    <LargeTitle fontSize={step?.text[lang].font?.m}>{step?.text[lang].text}</LargeTitle>
                                </TitleWrapper>
                                <Desc margin={step?.text[lang]?.margin && step?.text[lang]?.margin?.m}>
                                    <div
                                        dangerouslySetInnerHTML={{__html: step?.desc[lang].text}}
                                    />
                                    <Link href={step?.desc[lang].link} target="_blank">
                                        <StyledButton
                                            width={lang === 'ru' ? '40%' : (lang === 'tj' ? '45%' : '21%')}
                                        >
                                            {lang === 'ru' ? 'УЗНАТЬ БОЛЬШЕ' : (lang === 'tj' ? 'БИСЁРТАР ОМӮЗЕД' : 'EXPLORE')}
                                        </StyledButton>
                                    </Link>
                                </Desc>
                            </div>
                        </StepperBox>
                    );
                })}
                <ImageSemiCircle src={stepInfo[visibleStepIndex]?.inner[2].img} />
            </StepperContainer>
        </MainContainer>
    );
}