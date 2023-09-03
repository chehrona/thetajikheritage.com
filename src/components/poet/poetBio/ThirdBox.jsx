import React from "react";
import { useSetLang } from "../../../App";

import { BoxThree, QuoteWrapper, QuoteSymbol, Quote, DescWrapper } from "./poetBioStyles";

export default function ThirdBox({ poet }) {
    const { lang } = useSetLang();
    return (
        <BoxThree>
            <QuoteWrapper>
                <QuoteSymbol />
            </QuoteWrapper>
            <Quote>{poet?.three[lang].quote}</Quote>
            <DescWrapper dangerouslySetInnerHTML={{__html: poet?.three[lang].desc}} />
        </BoxThree>
    )
}