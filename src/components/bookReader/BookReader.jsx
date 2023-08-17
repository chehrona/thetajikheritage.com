import React from "react";
import {
    StyledDialog,
    StyledFrame,
    Header,
    Title,
    LogoWrapper,
    StyledLink,
    TitleWrapper,
    Logo,
    IconWrapper,
    StyledIconButton,
    StyledCloseIcon
} from "./bookReaderStyles";

export default function BookReader({ book, setOpenBook, setOverlay }) {
    
    function closeReader() {
        setOpenBook(false);
        setOverlay(null);
    }

    return (
        <StyledDialog open={true} fullScreen>
            <Header>
                <LogoWrapper>
                    <StyledLink to={'/'}>
                        <Logo src={'/tajiks.svg'}></Logo>
                    </StyledLink>
                </LogoWrapper>
                <TitleWrapper>
                    <Title>{book.title}</Title>
                </TitleWrapper>
                <IconWrapper>
                    <StyledIconButton onClick={closeReader}>
                        <StyledCloseIcon />
                    </StyledIconButton>
                </IconWrapper>
            </Header>
            <StyledFrame src={book.link}></StyledFrame>
        </StyledDialog>
    )
}