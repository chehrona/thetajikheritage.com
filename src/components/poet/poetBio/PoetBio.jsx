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
    const [stackOrder, setStackOrder] = useState([poet?.bio.two[lang].length - 1, 0, 1]);

    const moveUp = () => {
        if (stackOrder.length > 1) {
            const movedItem = stackOrder.pop();
            stackOrder.unshift(movedItem);
            setStackOrder([...stackOrder]);
        }
    };
    
      const moveDown = () => {
        if (stackOrder.length > 1) {
            const movedItem = stackOrder.shift();
            stackOrder.push(movedItem);
            setStackOrder([...stackOrder]);
        }
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
                {stackOrder.map((item, i) => (
                    <>
                        {i === 1 ? (
                            <LineWrapper>
                                <SlideImg
                                    src={poet?.bio.two[lang][item].image}
                                    show={true}
                                />
                                <div>
                                    <Year align={true}>{poet?.bio.two[lang][item].year}</Year>
                                    <Text dangerouslySetInnerHTML={{__html: poet?.bio.two[lang][item].desc}} />
                                </div>
                            </LineWrapper>
                        ) : (
                            <SlideImg src={poet?.bio.two[lang][item].image} />
                        )}
                    </>
                ))}
                </Slides>
                <NavBox>
                    <Line />
                    <StyledIconButton onClick={moveUp} disabled={stackOrder[0] > stackOrder[1]}>
                        <Arrow>
                            <PlayArrow />
                        </Arrow>
                    </StyledIconButton>
                </NavBox>
                <NavBox bottom={true}>
                    <StyledIconButton bottom={true} onClick={moveDown} disabled={stackOrder[1] + 1 === poet?.bio.two[lang].length}>
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