import React from "react";
import { useSetLang } from "../../../App";

import { BoxThree, QuoteWrapper, QuoteOutline, QuoteSymbol, Quote, DescWrapper } from "./poetBioStyles";

export default function ThirdBox({ poet }) {
    const { lang } = useSetLang();
    
    return (
        <BoxThree>
            <QuoteWrapper>
                <QuoteOutline>
                    <QuoteSymbol />
                </QuoteOutline>
            </QuoteWrapper>
            <Quote dangerouslySetInnerHTML={{__html: poet?.three[lang].quote}} />
            <DescWrapper dangerouslySetInnerHTML={{__html: poet?.three[lang].desc}} />
        </BoxThree>
    )
}