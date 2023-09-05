import React from 'react';
import { useSetLang } from "../../../App";

import { BoxFour, Line, YearBig, Backdrop, InnerOverlay, TextWrapper, Dot } from './poetBioStyles';

export default function ForthBox({ poet }) {
    const { lang } = useSetLang();

    return (
        <BoxFour>
            <InnerOverlay four={true}>
                <Backdrop backdrop={poet?.backdrops[1]} />
            </InnerOverlay>
            <Line top={true} />
            <Dot />
            <TextWrapper>
                <YearBig>{poet.four[lang].year}</YearBig>
                <div dangerouslySetInnerHTML={{__html: poet.four[lang].desc}} />
            </TextWrapper>
            <Dot bottom={true} />
            <Line bottom={true} />
        </BoxFour>
    )
}