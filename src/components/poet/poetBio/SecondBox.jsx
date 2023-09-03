import React, { useState } from "react";
import { useSetLang } from "../../../App";
import { PlayArrow } from "@mui/icons-material";

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
    Info
} from "./poetBioStyles";

export default function SecondBox({ poet }) {
    const { lang } = useSetLang();
    const [stackOrder, setStackOrder] = useState([poet?.two[lang].length - 1, 0, 1]);

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
        <BoxTwo>
            <InnerOverlay>
                <Backdrop backdrop={poet?.backdrops[0]} />
            </InnerOverlay>
            <Slides>
                {stackOrder.map((item, i) => (
                    <>
                        {i === 1 ? (
                            <LineWrapper>
                                <SlideImg
                                    src={poet?.two[lang][item].image}
                                    show={true}
                                />
                                <Info>
                                    <Year align={true}>{poet?.two[lang][item].year}</Year>
                                    <Text dangerouslySetInnerHTML={{__html: poet?.two[lang][item].desc}} />
                                </Info>
                            </LineWrapper>
                        ) : (
                            <SlideImg src={poet?.two[lang][item].image} />
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
                <StyledIconButton bottom={true} onClick={moveDown} disabled={stackOrder[1] + 1 === poet?.two[lang].length}>
                    <Arrow>
                        <PlayArrow />
                    </Arrow>
                </StyledIconButton>
                <Line bottom={true} />
            </NavBox>
        </BoxTwo>
    )
}