import React, { useRef, useEffect, useState } from "react";
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

export default function HomeStepper() {
    const containerRef = useRef(null);
    const divRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const [opacities, setOpacities] = useState([1, 0, 0, 0, 0]);
    let newArr = [...stepInfo];
    const lastItem = newArr.pop();
    newArr.unshift(lastItem);
    const [visibleSteps, setVisibleSteps] = useState([...newArr]);
    const { lang } = useSetLang();

    useEffect(() => {
        const handleScroll = () => {
            const containerRect = containerRef.current.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerBottom = containerRect.bottom;

            const newOpacities = divRefs.map((ref, index) => {
                const divRect = ref.current.getBoundingClientRect();
                const divTop = divRect.top;
                const divBottom = divRect.bottom;

                if (divBottom < containerTop || divTop > containerBottom) {
                    return 0;
                } else {
                    const opacity = 1 - (Math.abs(containerTop - divTop) / containerRect.height);
                    return opacity;
                }
            });

            setOpacities(newOpacities);
        }

        const handleKeyDown = (e) => {
            if (e.keyCode === 38) {
                if (visibleSteps.length > 1) {
                    const movedItem = visibleSteps.pop();
                    visibleSteps.unshift(movedItem);
                    setVisibleSteps([...visibleSteps]);
                }
            } else if (e.keyCode === 40) {
                if (visibleSteps.length > 1) {
                    const movedItem = visibleSteps.shift();
                    visibleSteps.push(movedItem);
                    setVisibleSteps([...visibleSteps]);
                }
            }
        }

        containerRef.current.addEventListener('scroll', handleScroll);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            containerRef.current.removeEventListener('scroll', handleScroll);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <MainContainer>
                <SemiCircle />
            <OtherSteps>
                <HideBox>
                    <Overlay>
                        <NumLine />
                        {/* <Step>{visibleSteps[0]?.num}</Step> */}
                    </Overlay>
                </HideBox>
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
            <OtherSteps>
                <HideBox bottom={1}>
                    <Overlay>
                        {/* <Step>{visibleSteps[2]?.num}</Step> */}
                        <NumLine />
                    </Overlay>
                </HideBox>
            </OtherSteps>
        </MainContainer>
    );
}