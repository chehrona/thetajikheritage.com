import React from 'react';
import { useSetLang } from "../../../App";

import { BoxFour, Line, YearBig, Backdrop, InnerOverlay, TextWrapper, Dot } from './poetBioStyles';

export default function ForthBox({ poet }) {
    const { lang } = useSetLang();

    return (
        <BoxFour>
            <InnerOverlay>
                <Backdrop backdrop={poet?.backdrops[1]} />
            </InnerOverlay>
            <Line top={true} height={true}/>
            <Dot />
            <TextWrapper>
                <YearBig>{poet.four[lang].year}</YearBig>
                {poet.four[lang].desc}
            </TextWrapper>
            <Dot bottom={true} />
            <Line bottom={true} height={true} />
        </BoxFour>
    )
}