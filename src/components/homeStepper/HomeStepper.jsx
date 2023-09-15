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
    let newArr = [...stepInfo];
    const lastItem = newArr.pop();
    newArr.unshift(lastItem);
    const [visibleSteps, setVisibleSteps] = useState([...newArr]);
    const [fontSize, setFontSize] = useState();
    const containerRef = useRef(null);
    const parentRef = useRef(null);
    const { lang } = useSetLang();

    useEffect(() => {
        let baseFont = 7.8;
        const length = visibleSteps[1].text[lang]?.length;
        if (length > 18) {
            baseFont = (length/24) * 7.8;
        } else if (length > 14) {
            baseFont = (length/21.18) * 7.8;
        } else if (length <= 7) {
            baseFont = 9.2;
        }

        setFontSize(baseFont);
    }, [lang, visibleSteps]);

    useEffect(() => {
        const container = parentRef.current;
    
        const handleWheel = (e) => {
            if (e.deltaY < 0) {
                if (visibleSteps.length > 1) {
                    const movedItem = visibleSteps.pop();
                    visibleSteps.unshift(movedItem);
                    setVisibleSteps([...visibleSteps]);
                }
            } else if (e.deltaY > 0) {
                if (visibleSteps.length > 1) {
                    const movedItem = visibleSteps.shift();
                    visibleSteps.push(movedItem);
                    setVisibleSteps([...visibleSteps]);
                }
            }
        };
    
        container.addEventListener('wheel', handleWheel);
    
        return () => {
          container.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <MainContainer ref={parentRef}>
            <Indicator>
                <SemiCircle />
                <IndicatorStep>{visibleSteps[1]?.num}</IndicatorStep>
            </Indicator>
            <NumLine />
            <StepperBox ref={containerRef}>
                <Step>{visibleSteps[0]?.num}</Step>
                <TitleWrapper>
                    <LargeTitle fontSize={fontSize}>{visibleSteps[1]?.text[lang]}</LargeTitle>
                </TitleWrapper>
                <Step bottom={true}>{visibleSteps[2]?.num}</Step>
            </StepperBox>
            <NumLine bottom={true} />
            <Desc dangerouslySetInnerHTML={{__html: visibleSteps[1]?.desc[lang]}}></Desc>
        </MainContainer>
    );
}