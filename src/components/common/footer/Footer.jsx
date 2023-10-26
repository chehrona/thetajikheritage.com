import React from "react";
import { FooterContainer, FooterInnerContainer, StyledCopyrightIcon } from "./footerStyles";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterInnerContainer>
                {/* <a href='https://www.pinterest.ca/tajik_heritage/' rel="noreferrer" target={'_blank'}>
                <StyledIconButton 
                    onMouseEnter={() => setPinHovered("true")}
                    onMouseLeave={() => setPinHovered("false")}>
                    <StyledIcon loading="lazy" src={pinIcon} rad={true} hovered={pinHovered}/>
                </StyledIconButton>
            </a>
            <a href='https://www.instagram.com/tajik_heritage/' rel="noreferrer" target={'_blank'}>
                <StyledIconButton
                    onMouseEnter={() => setInstHovered("true")}
                    onMouseLeave={() => setInstHovered("false")}>
                    <StyledIcon src={instIcon} rad={false} hovered={instHovered}/>
                </StyledIconButton>
            </a>
            <a href='mailto:thetajikheritage@gmail.com' rel="noreferrer" target={'_blank'}>
                <StyledIconButton 
                    onMouseEnter={() => setEmailHovered("true")}
                    onMouseLeave={() => setEmailHovered("false")}>
                    <StyledIcon src={mailIcon} rad={false} hovered={emailHovered}/>
                </StyledIconButton>
            </a>
            <Divider /> */}
                <StyledCopyrightIcon />
                The Tajik Heritage 2023
            </FooterInnerContainer>
        </FooterContainer>
    );
}