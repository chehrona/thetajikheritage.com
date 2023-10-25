import React, { useEffect, useState } from 'react';
import { useSetLang } from "../../../App";
import { ArrowForwardIos } from "@mui/icons-material";

import {
    BoxSeven,
    FamilyDesc,
    LeftContainer,
    RightContainer,
    YearBig,
    StyledButton,
    Arrow,
    ImgInfo
} from './poetBioStyles';

export default function FifthBox({ poet }) {
    const { lang } = useSetLang();
    const [infoArr, setInfoArr] = useState([...poet?.five[lang].slides]);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        setInfoArr([...poet?.five[lang].slides]);
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
            <LeftContainer>
                <FamilyDesc>
                    <YearBig align={true}>{poet?.five[lang].year}</YearBig>
                    <div dangerouslySetInnerHTML={{__html: poet?.five[lang].desc}}></div>
                </FamilyDesc>
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