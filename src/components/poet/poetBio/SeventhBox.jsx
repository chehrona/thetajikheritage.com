import React from 'react';
import { useSetLang } from "../../../App";

import { BoxSeven, FinalQuote, LeftContainer, RightContainer, BackImg, FamilyDesc, Overlay, Author } from './poetBioStyles';

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
            </RightContainer>
        </BoxSeven>
    )
}