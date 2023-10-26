import React, { useEffect, useState, useRef } from 'react';
import { useSetLang } from "../../../App";
import { useMediaQuery } from 'react-responsive';

import { ArrowForwardIos } from "@mui/icons-material";

import {
    BoxSeven,
    FamilyDesc,
    LeftContainer,
    RightContainer,
    YearBig,
    StyledButton,
    Arrow,
    ImgInfo,
    ImageContainer,
    ImageWrapper,
    ButtonWrapper,
    Img
} from './poetBioStyles';

export default function FifthBox({ poet }) {
    const { lang } = useSetLang();
    const parentRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenSize, setScreenSize] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [infoArr, setInfoArr] = useState([...poet?.five[lang].slides]);

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    useEffect(() => {
        setInfoArr([...poet?.five[lang].slides]);
    }, [lang]);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
            setTranslate(prevState => prevState + screenSize);
        }
    };
    
    const moveNext = () => {
        if (currentIndex < infoArr?.length - 1) {            
            setCurrentIndex(prevState => prevState + 1);
            setTranslate(prevState => prevState - screenSize);
        }
    };

    return (
        <BoxSeven>
            <LeftContainer>
                <FamilyDesc>
                    <YearBig align={true}>{poet?.five[lang].year}</YearBig>
                    <div dangerouslySetInnerHTML={{__html: poet?.five[lang].desc}}></div>
                </FamilyDesc>
            </LeftContainer>
            <RightContainer ref={parentRef}>
                <ImageContainer>
                    {infoArr?.map((entry, i) => {
                        return (
                            <ImageWrapper src={entry?.img} width={screenSize} translate={translate}>
                                <ImgInfo dangerouslySetInnerHTML={{__html: entry?.text}} />
                            </ImageWrapper>
                        )
                    })}
                </ImageContainer>
                <ButtonWrapper>
                    <StyledButton left={true} onClick={movePrev}>
                        <Arrow>
                            <ArrowForwardIos style={{marginLeft: '1px'}}/>
                        </Arrow>
                    </StyledButton>
                    <StyledButton onClick={moveNext}>
                        <Arrow>
                            <ArrowForwardIos />
                        </Arrow>
                    </StyledButton>
                </ButtonWrapper>
            </RightContainer>
        </BoxSeven>
    )
}