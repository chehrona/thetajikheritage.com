import React from "react";
import { useSetLang } from "../../App";

import {
    HeaderContainer,
    LogoWrapper,
    MenuWrapper,
    TitleWrapper,
    Title,
    StyledIconButton,
    StyledMenuIcon,
    Logo,
    TitleSpan,
    StyledCloseIcon,
    StyledLink
} from "./headerStyles";

export default function Header() {
    const { isMenuShown, setIsMenuShown } = useSetLang();

    function showMenu() {
        setIsMenuShown(prevState => !prevState);
    }

    return (
        <HeaderContainer>
            <LogoWrapper>
                <StyledLink to={'/'}>
                    <Logo src={'/tajiks.svg'}></Logo>
                </StyledLink>
            </LogoWrapper>
            <TitleWrapper>
                <Title>
                    <TitleSpan>THE TAJIKS:</TitleSpan>
                    Iranians of the East
                </Title>
            </TitleWrapper>
            <MenuWrapper>
                <StyledIconButton onClick={showMenu}>
                    {isMenuShown ? <StyledCloseIcon /> : <StyledMenuIcon />}
                </StyledIconButton>
            </MenuWrapper>
        </HeaderContainer>
    )
} 