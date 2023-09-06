import React from "react";
import { useSetLang } from "../../../App";

import { BoxThree, QuoteWrapper, QuoteSymbol, Quote, DescWrapper, QuoteContainer } from "./poetBioStyles";

export default function ThirdBox({ poet }) {
    const { lang } = useSetLang();
    return (
        <BoxThree>
            <QuoteContainer>
                <QuoteWrapper>
                    <QuoteSymbol />
                </QuoteWrapper>
            </QuoteContainer>
            <Quote dangerouslySetInnerHTML={{__html: poet?.three[lang].quote}} />
            <DescWrapper dangerouslySetInnerHTML={{__html: poet?.three[lang].desc}} />
        </BoxThree>
    )
}