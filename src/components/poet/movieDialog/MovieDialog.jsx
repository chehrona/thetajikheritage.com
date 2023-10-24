import React, { useState, useRef } from "react";
import { Zoom, Slide, Dialog } from '@mui/material';

import { useSetLang } from "../../../App";

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
    Loader
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
    const iframeRef = useRef(null);
    const { lang } = useSetLang();

    function handleLoader() {
        setIsMounted(true);
    }

    function handleClose() {
        setShowMovieInfo(false);
        setShowVideo(false);
    }

    return (
        <Dialog
            open={showMovieInfo}
            fullWidth
            maxWidth={"xl"}
            TransitionComponent={Transition}
            TransitionProps={{
                in: showMovieInfo,
                easing: {enter: "linear", exit: "linear"}
            }}
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    height: '80%'
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
                        <StyledIconButton onClick={handleClose}>
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
                    <InfoContainer>
                        <InnerBox>
                            <StudioName src={movieInfo?.studio}></StudioName>
                            <InfoTitle>{movieInfo?.title}</InfoTitle>
                            <ReleaseInfo>
                                <InfoWrapper year={1}>{movieInfo?.year}</InfoWrapper>
                                <InfoWrapper genre={1}>{movieInfo?.lang}</InfoWrapper>
                                <InfoWrapper>{movieInfo?.genre}</InfoWrapper>
                                <InfoWrapper>{movieInfo?.duration}</InfoWrapper>
                            </ReleaseInfo>
                            <Desc>{movieInfo?.desc}</Desc>
                            <Director>
                                {lang === 'us' ? 'Director' : 'Режиссёр'}
                            </Director>
                            <div>{movieInfo?.director}</div>
                        </InnerBox>
                        <InnerBox width={1}>
                        </InnerBox>
                        <MovieImg src={movieInfo?.img} />
                        <StyledCloseButton onClick={() => setShowMovieInfo(false)}>
                            <StyledCloseIcon />
                        </StyledCloseButton>
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