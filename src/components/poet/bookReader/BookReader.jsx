import React, { useState, useRef } from "react";

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
    StyledCloseIcon,
    Loader
} from "./bookReaderStyles";

export default function BookReader({ book, setOpenBook, setOverlay }) {
    const [isMounted, setIsMounted] = useState(false);
    const iframeRef = useRef(null);

    function closeReader() {
        setOpenBook(false);
        setOverlay(null);
    }

    function handleLoader() {
        setIsMounted(true);
    }

    return (
        <StyledDialog open={true} fullScreen>
            <Header>
                <LogoWrapper>
                    <StyledLink to={'/'}>
                        <Logo src={'/tajiks.png'}></Logo>
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
            <StyledFrame ref={iframeRef} src={book.link} onLoad={handleLoader}></StyledFrame>
            {!isMounted && <Loader />}
        </StyledDialog>
    )
}