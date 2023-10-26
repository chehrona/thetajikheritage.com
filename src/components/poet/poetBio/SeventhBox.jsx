import React, { useState, useEffect, useRef } from 'react';
import { useSetLang } from "../../../App";
import { useMediaQuery } from 'react-responsive';

import { ArrowForwardIos } from "@mui/icons-material";

import {
    BoxSeven,
    FinalQuote,
    LeftContainer,
    RightContainer,
    BackImg,
    Overlay,
    Author,
    StyledButton,
    Arrow,
    ImgInfo,
    ImgWrapper,
    InfoInnerWrapper,
    Image
} from './poetBioStyles';

export default function SeventhBox({ poet }) {
    const { lang } = useSetLang();
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const [infoArr, setInfoArr] = useState([...poet?.seven[lang].slides]);
    const [hover, setHover] = useState(false);
    const [touchStartX, setTouchStartX] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleTouchStart = (event) => {
        setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event) => {
        if (touchStartX !== null) {
            const touchX = event.touches[0].clientX;
            const deltaX = touchX - touchStartX;

            const swipeThreshold = 100;

            if (deltaX < -swipeThreshold) {
                if (currentIndex < infoArr?.length - 1) {            
                    setCurrentIndex(prevState => prevState + 1);            
                }
            } else {
                if (currentIndex > 0) {
                    setCurrentIndex(prevState => prevState - 1);
                }
            }
        }
    };

    const handleTouchEnd = () => {
        setTouchStartX(null);
    };

    useEffect(() => {
        setInfoArr([...poet?.seven[lang].slides]);
    }, [lang]);

    const movePrev = () => {
        if (infoArr.length > 1) {
            const movedItem = infoArr.pop();
            infoArr.unshift(movedItem);
            setInfoArr([...infoArr]);
        }
    };
    
    const moveNext = () => {
        if (infoArr.length > 1) {
            const movedItem = infoArr.shift();
            infoArr.push(movedItem);
            setInfoArr([...infoArr]);
        }
    };

    return (
        <BoxSeven
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <LeftContainer seven={1}>
                <Overlay>
                    <BackImg src={poet.backdrops[2]} />
                </Overlay>
                <FinalQuote>
                    {poet?.seven[lang].desc}
                    <Author dangerouslySetInnerHTML={{__html: poet?.seven[lang].author}} />
                </FinalQuote>
            </LeftContainer>
            <RightContainer>
                {poet?.seven[lang]?.slides.map((entry, i) => {
                    return (
                        <img src={entry?.img} />
                    )
                })}
                {!isMobile &&                     
                    <span>
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
                    </span>
                }
                <ImgInfo color={infoArr[currentIndex]?.color} dangerouslySetInnerHTML={{__html: infoArr[currentIndex]?.text}} />
            </RightContainer>
        </BoxSeven>
    )
}