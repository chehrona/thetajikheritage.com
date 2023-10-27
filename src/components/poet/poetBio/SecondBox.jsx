import React, { useState, useEffect } from "react";
import { useSetLang } from "../../../App";
import { useMediaQuery } from 'react-responsive';

import { ArrowForwardIos } from "@mui/icons-material";

import { 
    Year,
    BoxTwo,
    Slides,
    SlideImg,
    Backdrop,
    NavBox,
    Line,
    StyledIconButton,
    Arrow,
    InnerOverlay,
    LineWrapper,
    Text,
    Info,
    NavWrapper,
    FillerOne,
    FillerTwo
} from "./poetBioStyles";

export default function SecondBox({ poet }) {
    const { lang } = useSetLang();
    let newArr = [...poet?.two[lang]];
    const lastItem = newArr.pop();
    newArr.unshift(lastItem);
    const [infoArr, setInfoArr] = useState([...newArr]);
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    useEffect(() => {
        setInfoArr([...poet?.two[lang]]);
    }, [lang]);

    const moveUp = () => {
        if (infoArr.length > 1) {
            const movedItem = infoArr.pop();
            infoArr.unshift(movedItem);
            setInfoArr([...infoArr]);
        }
    };
    
    const moveDown = () => {
        console.log("down")
        if (infoArr.length > 1) {
            const movedItem = infoArr.shift();
            infoArr.push(movedItem);
            setInfoArr([...infoArr]);
        }
    };

    return (
        <BoxTwo>
            <InnerOverlay>
                <Backdrop backdrop={poet?.backdrops[0]} />
            </InnerOverlay>
            <Slides>
                <SlideImg src={infoArr[0].image} />
                <LineWrapper>
                    <SlideImg
                        src={infoArr[isMobile ? 0 : 1]?.image}
                        show={1}
                    />
                    <Info>
                        <Year>{infoArr[isMobile ? 0 : 1]?.year}</Year>
                        <Text dangerouslySetInnerHTML={{__html: infoArr[isMobile ? 0 : 1]?.desc}} />
                    </Info>
                </LineWrapper>
                <SlideImg src={infoArr[2].image} />
            </Slides>
            <NavBox>
                <FillerOne />
                <FillerTwo />
                <NavWrapper>
                    <Line />
                    <StyledIconButton
                        onClick={moveUp}
                        disabled={infoArr[1] === poet?.two[lang][0]}
                    >
                        <Arrow>
                            <ArrowForwardIos />
                        </Arrow>
                    </StyledIconButton>
                </NavWrapper>
            </NavBox>
            <NavBox bottom={1}>
                <FillerOne />
                <FillerTwo />
                <NavWrapper>
                    <StyledIconButton
                        bottom={1}
                        onClick={moveDown}
                        disabled={infoArr[ 1] === poet?.two[lang][infoArr?.length - 1]}
                    >
                        <Arrow>
                            <ArrowForwardIos style={{marginLeft: '1px'}}/>
                        </Arrow>
                    </StyledIconButton>
                    <Line />
                </NavWrapper>
            </NavBox>
            {isMobile && <div>
                <StyledIconButton
                    bottom={1}
                    onClick={moveDown}
                    // disabled={infoArr[1] === poet?.two[lang][infoArr?.length - 1]}
                >
                    <Arrow>
                        <ArrowForwardIos style={{marginLeft: '1px'}}/>
                    </Arrow>
                </StyledIconButton>
                <StyledIconButton
                    onClick={moveUp}
                    // disabled={infoArr[1] === poet?.two[lang][0]}
                >
                    <Arrow>
                        <ArrowForwardIos />
                    </Arrow>
                </StyledIconButton>
            </div>}
        </BoxTwo>
    )
}