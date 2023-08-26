import React, { useState } from "react";
import { Zoom, Slide, Dialog } from '@mui/material';

import {
    Desc,
    StyledIconButton,
    InfoContainer,
    StyledContent,
    InfoTitle,
    StyledCloseIcon,
    Director,
    MovieImg,
    InnerBox,
    StudioName,
    ReleaseInfo,
    InfoWrapper,
    StyledPlayIcon,
    Line,
    Direction,
    DirBox
} from "./movieDialogStyles";

const Transition = ({ children, ...props }) => (
    <Zoom {...props}>
      {children}
    </Zoom>
);

export default function MovieDialog({ movieInfo, setShowMovieInfo, showMovieInfo }) {
    const [showVideo, setShowVideo] = useState(false);

    const ContentTransition = ({ children, ...props }) => (
        <Slide direction="left" in={showVideo} {...props}>
          {children}
        </Slide>
    )

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
            >
                {showVideo ? (
                    <InfoContainer>
                        <InnerBox>
                            <StudioName src={movieInfo?.studio}></StudioName>
                            <InfoTitle>{movieInfo?.title}</InfoTitle>
                            <ReleaseInfo>
                                <InfoWrapper year={true}>{movieInfo?.year}</InfoWrapper>
                                <InfoWrapper genre={true}>{movieInfo?.lang}</InfoWrapper>
                                <InfoWrapper>{movieInfo?.genre}</InfoWrapper>
                                <InfoWrapper>{movieInfo?.duration}</InfoWrapper>
                            </ReleaseInfo>
                            <Desc>{movieInfo?.desc}</Desc>
                            <Director>Director</Director>
                            <div>{movieInfo?.director}</div>
                        </InnerBox>
                        <InnerBox width={true}>
                        </InnerBox>
                        <MovieImg src={movieInfo?.img} />
                        <StyledIconButton onClick={() => setShowMovieInfo(false)}>
                            <StyledCloseIcon />
                        </StyledIconButton>
                        <StyledIconButton play={true} onClick={() => setShowVideo(true)}>
                            <StyledPlayIcon />
                        </StyledIconButton>
                        <DirBox>    
                            <Line />
                            <Direction>Watch now</Direction>
                        </DirBox>
                    </InfoContainer>
                ) : (
                    <div>Hello</div>
                )}
            </StyledContent>
        </Dialog>
    );
}