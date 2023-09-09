import React from "react";
import { FooterContainer, FooterInnerContainer, StyledCopyrightIcon } from "./footerStyles";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterInnerContainer> 
                <StyledCopyrightIcon />
                The Tajik Heritage 2023
            </FooterInnerContainer>
        </FooterContainer>
    );
}