import React from "react";
import { Zoom, Dialog } from '@mui/material';

import {
    Desc,
    StyledIconButton,
    InfoContainer,
    StyledContent,
    InfoTitle,
    StyledCloseIcon,
    BodyContainer,
    MovieImg,
    Wrapper,
    InnerBox,
    StudioName
} from "./movieDialogStyles";

const Transition = ({ children, ...props }) => (
    <Zoom {...props}>
      {children}
    </Zoom>
);

export default function MovieDialog({ movieInfo, setShowMovieInfo, showMovieInfo }) {
    function handleClose() {
        setShowMovieInfo(false);
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
                },
            }}
            BackdropProps={{
                style: {
                    background: '#fcf6e9',
                    backgroundImage: "url('/noise.png')",
                    opacity: '0.3'
                },
            }}
        >
            <StyledContent>
                <InfoContainer>
                    <InnerBox width={true}>
                        <StudioName src={movieInfo?.studio}></StudioName>
                    </InnerBox>
                    <InfoTitle>{movieInfo?.title}</InfoTitle>
                    <StyledIconButton dialog={true} onClick={handleClose}>
                        <StyledCloseIcon />
                    </StyledIconButton>
                    <BodyContainer>
                        <Wrapper first={true}>
                            <MovieImg src={movieInfo?.img} />
                        </Wrapper>
                        <Wrapper>
                            <Desc dangerouslySetInnerHTML={{__html: movieInfo?.desc}} />
                        </Wrapper>
                    </BodyContainer>
                </InfoContainer>
            </StyledContent>
        </Dialog>
    );
}