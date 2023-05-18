import React from "react";
import { useSetLang } from "../../App";

import { FooterContainer, StyledCopyrightIcon } from "./footerStyles";

export default function Footer() {
    const { isMenuShown } = useSetLang();
    if (!isMenuShown) {
        return (
            <FooterContainer>
                <StyledCopyrightIcon />
                2023 designed & built by The Tajik Heritage
            </FooterContainer>
        )
    } else {
        return null;
    }
    
}