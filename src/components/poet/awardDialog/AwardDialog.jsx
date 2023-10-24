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
    AwardImg,
    Wrapper
} from "./awardDialogStyles";

const Transition = ({ children, ...props }) => (
    <Zoom {...props}>
      {children}
    </Zoom>
);

export default function AwardDialog({ awardInfo, setShowAwardInfo, showAwardInfo }) {
    function handleClose() {
        setShowAwardInfo(false);
    }

    return (
        <Dialog
            open={showAwardInfo}
            fullWidth
            maxWidth={"md"}
            TransitionComponent={Transition}
            TransitionProps={{
                in: showAwardInfo,
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
                    <InfoTitle>{awardInfo?.title}</InfoTitle>
                    <StyledIconButton onClick={handleClose}>
                        <StyledCloseIcon />
                    </StyledIconButton>
                    <BodyContainer>
                        <Wrapper first={true}>
                            <AwardImg loading="lazy" src={awardInfo?.img} />
                        </Wrapper>
                        <Wrapper>
                            <Desc dangerouslySetInnerHTML={{__html: awardInfo?.desc}} />
                        </Wrapper>
                    </BodyContainer>
                </InfoContainer>
            </StyledContent>
        </Dialog>
    );
}