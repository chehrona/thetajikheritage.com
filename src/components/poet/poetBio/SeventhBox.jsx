import React, { useState } from 'react';
import { useSetLang } from "../../../App";
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
    ImgInfo
} from './poetBioStyles';

export default function SeventhBox({ poet }) {
    const { lang } = useSetLang();
    const [infoArr, setInfoArr] = useState([...poet?.seven[lang].slides]);
    const [hover, setHover] = useState(false);

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
            <LeftContainer>
                <Overlay>
                    <BackImg src={poet.backdrops[2]} />
                </Overlay>
                <FinalQuote>
                    {poet?.seven[lang].desc}
                    <Author dangerouslySetInnerHTML={{__html: poet?.seven[lang].author}} />
                </FinalQuote>
            </LeftContainer>
            <RightContainer src={infoArr[0].img} >
                {hover && <>
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
                </>}
                <ImgInfo color={infoArr[0].color} dangerouslySetInnerHTML={{__html: infoArr[0].text}} />
            </RightContainer>
        </BoxSeven>
    )
}