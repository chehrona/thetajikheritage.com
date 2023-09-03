import React from 'react';
import { useSetLang } from "../../../App";

import { BoxFive, Line, YearBig, Backdrop, InnerOverlay, TextWrapper, Dot, LeftWrapper, RightWrapper, Image } from './poetBioStyles';

export default function FifthBox({ poet }) {
    const { lang } = useSetLang();

    return (
        <BoxFive>
            <LeftWrapper half={true}>
                <TextWrapper>
                    <YearBig>{poet.five[lang].year}</YearBig>
                    {poet.five[lang].desc}
                </TextWrapper>
            </LeftWrapper>
            <RightWrapper half={true}>
                <Image src={poet.five[lang].img} />
            </RightWrapper>
        </BoxFive>
    )
}