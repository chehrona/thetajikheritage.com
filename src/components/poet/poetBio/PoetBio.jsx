import React, { useState } from "react";
import { useSetLang } from "../../../App";
import { PlayArrow } from "@mui/icons-material";

import { 
    MainContainer,
    BoxOne,
    LeftWrapper,
    Year,
    Desc,
    RightWrapper,
    Image,
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
    Text
} from "./poetBioStyles";

export default function PoetBio({ poet }) {
    const { lang } = useSetLang();
    const [index, setIndex] = useState(1);

    function handleUp() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    function handleDown() {
        if (index < poet?.bio.two[lang].length) {
            setIndex(index + 1);
        }
    }

    return (
        <MainContainer id='Biography'>
            <BoxOne>
                <LeftWrapper>
                    <Year>{poet?.bio.one[lang].year}</Year>
                    <Desc dangerouslySetInnerHTML={{__html: poet?.bio.one[lang].desc}} />
                </LeftWrapper>
                <RightWrapper>
                    <Image src={poet?.bio.one[lang].img}/>
                </RightWrapper>
            </BoxOne>
            <BoxTwo>
                <InnerOverlay>
                    <Backdrop backdrop={poet?.bio.backdrops[0]} />
                </InnerOverlay>
                <Slides>
                    {poet?.bio.two[lang].map((entry, i) => {
                        return (
                            <LineWrapper>
                                <SlideImg key={i} src={entry.image} show={index === i} />
                                {index === i && 
                                    <div>
                                        <Year align={true}>{entry.year}</Year>
                                        <Text dangerouslySetInnerHTML={{__html: entry.desc}} />
                                    </div>
                                }
                            </LineWrapper>
                        )
                    })}
                </Slides>
                <NavBox>
                    <Line />
                    <StyledIconButton onClick={handleUp}>
                        <Arrow>
                            <PlayArrow />
                        </Arrow>
                    </StyledIconButton>
                </NavBox>
                <NavBox bottom={true}>
                    <StyledIconButton bottom={true} onClick={handleDown}>
                        <Arrow>
                            <PlayArrow />
                        </Arrow>
                    </StyledIconButton>
                    <Line bottom={true} />
                </NavBox>
            </BoxTwo>
        </MainContainer>
    )
}