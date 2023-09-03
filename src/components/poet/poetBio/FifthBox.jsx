import React from 'react';
import { useSetLang } from "../../../App";

import { BoxFive, YearBig, LeftWrapper, RightWrapper, Image, FamilyDesc } from './poetBioStyles';

export default function FifthBox({ poet }) {
    const { lang } = useSetLang();

    return (
        <BoxFive>
            <LeftWrapper half={true}>
                <FamilyDesc>
                    <YearBig align={true}>{poet.five[lang].year}</YearBig>
                    <div dangerouslySetInnerHTML={{__html: poet.five[lang].desc}} />
                </FamilyDesc>
            </LeftWrapper>
            <RightWrapper half={true}>
                <Image src={poet.five[lang].image} />
            </RightWrapper>
        </BoxFive>
    )
}