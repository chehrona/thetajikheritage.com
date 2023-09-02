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
    let bioArray = poet?.bio.two[lang];
    const [currentContainer, setCurrentContainer] = useState(0);

    const nextContainer = () => {
        setCurrentContainer((prevContainer) =>
            (prevContainer + 1) % poet?.bio.two[lang].length
        );
    };
    
    const previousContainer = () => {
        setCurrentContainer((prevContainer) =>
            (prevContainer - 1 + poet?.bio.two[lang].length) % poet?.bio.two[lang].length
        );
    };

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
                    <SlideImg
                        src={poet?.bio.two[lang][bioArray.length - 1].image}
                    />
                    <LineWrapper>
                        <SlideImg
                            src={poet?.bio.two[lang][currentContainer].image}
                            show={true}
                        />
                        <div>
                            <Year align={true}>{poet?.bio.two[lang][currentContainer].year}</Year>
                            <Text dangerouslySetInnerHTML={{__html: poet?.bio.two[lang][currentContainer].desc}} />
                        </div>
                    </LineWrapper>
                    <SlideImg
                        src={poet?.bio.two[lang][1].image}
                    />
                </Slides>
                <NavBox>
                    <Line />
                    <StyledIconButton onClick={previousContainer}>
                        <Arrow>
                            <PlayArrow />
                        </Arrow>
                    </StyledIconButton>
                </NavBox>
                <NavBox bottom={true}>
                    <StyledIconButton bottom={true} onClick={nextContainer}>
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