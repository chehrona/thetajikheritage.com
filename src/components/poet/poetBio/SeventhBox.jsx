import React from 'react';
import { useSetLang } from "../../../App";

import {
    BoxSeven,
    FinalQuote,
    LeftContainer,
    RightContainer,
    BackImg,
    Overlay,
    Author,
    Slideshow,
    Image
} from './poetBioStyles';

export default function SeventhBox({ poet }) {
    const { lang } = useSetLang();

    return (
        <BoxSeven>
            <LeftContainer>
                <Overlay>
                    <BackImg src={poet.backdrops[2]} />
                </Overlay>
                <FinalQuote>
                    {poet?.seven[lang].desc}
                    <Author>{poet?.seven[lang].author}</Author>
                </FinalQuote>
            </LeftContainer>
            <RightContainer>
                <Image color={true} src={poet?.seven[lang].slides[0].img} />
            </RightContainer>
        </BoxSeven>
    )
}