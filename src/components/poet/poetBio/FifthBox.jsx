import React from 'react';
import { useSetLang } from "../../../App";

import { BoxFive, Line, Year, LeftWrapper, RightWrapper, Image, FamilyDesc } from './poetBioStyles';

export default function FifthBox({ poet }) {
    const { lang } = useSetLang();

    return (
        <BoxFive>
            <LeftWrapper half={true}>
                <FamilyDesc>
                    <Year align={true}>{poet.five[lang].year}</Year>
                    <div dangerouslySetInnerHTML={{__html: poet.five[lang].desc}}></div>
                </FamilyDesc>
            </LeftWrapper>
            <RightWrapper half={true}>
                <Image src={poet.five[lang].image} />
            </RightWrapper>
        </BoxFive>
    )
}