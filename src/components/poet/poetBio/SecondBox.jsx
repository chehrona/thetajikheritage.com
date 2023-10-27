import React, { useState, useEffect } from "react";
import { useSetLang } from "../../../App";
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
    NavWrapper
} from "./poetBioStyles";

export default function SecondBox({ poet }) {
    const { lang } = useSetLang();
    let newArr = [...poet?.two[lang]];
    const lastItem = newArr.pop();
    newArr.unshift(lastItem);
    const [infoArr, setInfoArr] = useState([...newArr]);

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
                        src={infoArr[1]?.image}
                        show={1}
                    />
                    <Info>
                        <Year>{infoArr[1]?.year}</Year>
                        <Text dangerouslySetInnerHTML={{__html: infoArr[1]?.desc}} />
                    </Info>
                </LineWrapper>
                <SlideImg src={infoArr[2].image} />
            </Slides>
            <NavBox>
                <div style={{minWidth: '10%'}} />
                <div style={{minWidth: '18rem'}} />
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
                <div style={{minWidth: '10%'}} />
                <div style={{minWidth: '18rem'}} />
                <NavWrapper>
                    <StyledIconButton
                        bottom={1}
                        onClick={moveDown}
                        disabled={infoArr[ 1] === poet?.two[lang][infoArr?.length - 1]}
                    >
                        <Arrow>
                            <ArrowForwardIos />
                        </Arrow>
                    </StyledIconButton>
                    <Line />
                </NavWrapper>
            </NavBox>
        </BoxTwo>
    )
}