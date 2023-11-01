import React, { useState, useRef } from "react";
import { Zoom, Slide, Dialog } from '@mui/material';

import { useSetLang } from "../../../App";
import { useMediaQuery } from 'react-responsive';

import {
    Desc,
    StyledIconButton,
    InfoContainer,
    StyledContent,
    InfoTitle,
    StyledCloseIcon,
    StyledCloseButton,
    Director,
    MovieImg,
    InnerBox,
    StudioName,
    ReleaseInfo,
    InfoWrapper,
    StyledPlayIcon,
    Line,
    Direction,
    DirBox,
    StyledFrame,
    Loader,
    SlideUp,
    SlideDown,
    StyledArrowButton
} from "./movieDialogStyles";

const Transition = ({ children, ...props }) => (
    <Zoom {...props}>
        {children}
    </Zoom>
);

const ContentTransition = ({ children, ...props }) => (
    <Slide direction="left" {...props}>
        {children}
    </Slide>
)

export default function MovieDialog({ movieInfo, setShowMovieInfo, showMovieInfo }) {
    const [showVideo, setShowVideo] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const iframeRef = useRef(null);
    const { lang } = useSetLang();
    const [fullSize, setFullSize] = useState(0);

    function handleLoader() {
        setIsMounted(true);
    }

    function handleFrameClose() {
        setShowMovieInfo(false);
        setShowVideo(false);
    }

    function handleClose() {
        setShowMovieInfo(false);
        setFullSize(false);
    }

    function handleExpand() {
        setFullSize(prevState => !prevState);
    }

    return (
        <Dialog
            open={showMovieInfo}
            fullWidth
            maxWidth={"lg"}
            TransitionComponent={Transition}
            TransitionProps={{
                in: showMovieInfo,
                easing: {enter: "linear", exit: "linear"}
            }}
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    height: isMobile ? '100%' : '80%',
                    margin: isMobile && '0rem',
                    width: isMobile && 'calc(100vw - 3rem)',
                    maxWidth: isMobile && 'calc(100vw - 3rem)'
                },
            }}
            BackdropProps={{
                style: {
                    background: '#0F0A00',
                    backgroundImage: "url('/noise.png')",
                    opacity: '0.3'
                },
            }}
        >
            <StyledContent
                Transition={ContentTransition}
                TransitionProps={{
                    in: showVideo,
                    easing: {enter: "linear", exit: "linear"}
                }}
            >
                {showVideo ? (
                    <InfoContainer>
                        <StyledIconButton onClick={handleFrameClose}>
                            <StyledCloseIcon />
                        </StyledIconButton>
                        <StyledFrame
                            src={`https://www.youtube.com/embed/${movieInfo?.link}?autoplay=1&rel=0`}
                            allow='autoplay; encrypted-media'
                            fullWidth
                            allowFullScreen
                            ref={iframeRef}
                            onLoad={handleLoader}
                        />
                        {!isMounted && <Loader />}
                    </InfoContainer>
                ) : (
                    <InfoContainer expand={fullSize}>
                        <StyledCloseButton onClick={handleClose}>
                            <StyledCloseIcon />
                        </StyledCloseButton>
                        <InnerBox expand={fullSize}>
                            {isMobile && 
                                <StyledArrowButton arrow={1} onClick={handleExpand}>
                                    {fullSize ? <SlideDown /> : <SlideUp />}
                                </StyledArrowButton>
                            }
                            <StudioName src={movieInfo?.studio}></StudioName>
                            <InfoTitle>{movieInfo?.title}</InfoTitle>
                            <ReleaseInfo>
                                <InfoWrapper year={1}>{movieInfo?.year}</InfoWrapper>
                                <InfoWrapper>{movieInfo?.lang}</InfoWrapper>
                                <InfoWrapper>{movieInfo?.genre}</InfoWrapper>
                                <InfoWrapper>{movieInfo?.duration}</InfoWrapper>
                            </ReleaseInfo>
                            <Desc expand={fullSize}>{movieInfo?.desc}</Desc>
                            <Director>
                                {lang === 'us' ? 'Director' : 'Режиссёр'}
                            </Director>
                            <div>{movieInfo?.director}</div>
                        </InnerBox>
                        <MovieImg src={movieInfo?.img} />
                        <DirBox>
                            <StyledIconButton onClick={() => setShowVideo(true)}>
                                <StyledPlayIcon />
                            </StyledIconButton>    
                            <Line />
                            <Direction>
                                {lang === 'ru' ? 'Смотреть' : (lang === 'tj' ? 'Тамошо' : 'Watch now')}
                            </Direction>
                        </DirBox>
                    </InfoContainer>
                )}
            </StyledContent>
        </Dialog>
    );
}