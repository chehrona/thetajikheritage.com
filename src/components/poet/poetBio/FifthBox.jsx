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
} from './poetBioStyles';

export default function FifthBox({ poet }) {
    const { lang } = useSetLang();
    const parentRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [screenSize, setScreenSize] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [infoArr, setInfoArr] = useState([...poet?.five[lang].slides]);
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    useEffect(() => {
        const parentWidth = parentRef?.current?.getBoundingClientRect().width;

        setScreenSize(parentWidth);
    }, []);

    useEffect(() => {
        setInfoArr([...poet?.five[lang].slides]);
    }, [lang]);


    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 150 && currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
            setTranslate(prevState => prevState - screenSize);
        }

        if (touchStart - touchEnd < -150 && currentIndex < infoArr?.length - 1) {
            setCurrentIndex(prevState => prevState + 1);
            setTranslate(prevState => prevState - screenSize);
        }
    }

    const movePrev = () => {
        if (currentIndex > 0 && !isMobile) {
            setCurrentIndex(prevState => prevState - 1);
            setTranslate(prevState => prevState + screenSize);
        }
    };
    
    const moveNext = () => {
        if (currentIndex < infoArr?.length - 1 && !isMobile) {            
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
            <RightContainer 
                ref={parentRef}
                onTouchStart={(e) => handleTouchStart(e)}
                onTouchMove={(e) => handleTouchMove(e)}
                onTouchEnd={handleTouchEnd}
            >
                <ImageContainer>
                    {infoArr?.map((entry, i) => {
                        return (
                            <ImageWrapper key={i + 'b'} src={entry?.img} width={screenSize} translate={translate}>
                                <ImgInfo dangerouslySetInnerHTML={{__html: entry?.text}} />
                            </ImageWrapper>
                        )
                    })}
                </ImageContainer>
                <ButtonWrapper>
                    <StyledButton left={true} onClick={movePrev} disabled={currentIndex === 0}>
                        <Arrow>
                            <ArrowForwardIos style={{marginLeft: '1px'}}/>
                        </Arrow>
                    </StyledButton>
                    <StyledButton onClick={moveNext} disabled={currentIndex === infoArr?.length - 1}>
                        <Arrow>
                            <ArrowForwardIos />
                        </Arrow>
                    </StyledButton>
                </ButtonWrapper>
            </RightContainer>
        </BoxSeven>
    )
}