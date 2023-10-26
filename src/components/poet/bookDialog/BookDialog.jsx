import React from "react";
import { Zoom, Dialog } from '@mui/material';
import { useSetLang } from "../../../App";
import { useMediaQuery } from 'react-responsive';


import {
    Desc,
    StyledIconButton,
    InfoContainer,
    StyledContent,
    InfoTitle,
    StyledCloseIcon,
    BodyContainer,
} from "./bookDialogStyles";

const Transition = ({ children, ...props }) => (
    <Zoom {...props}>
      {children}
    </Zoom>
);

export default function BookDialog({ msg, setBookDialog, bookDialog, setOverlay }) {
    const { lang } = useSetLang();
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    function handleClose() {
        setBookDialog(false);
        setOverlay(null);
    }

    return (
        <Dialog
            open={bookDialog}
            fullWidth
            maxWidth={isMobile ? "xl" : "sm"}
            TransitionComponent={Transition}
            TransitionProps={{
                in: bookDialog,
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
                    background: '#0F0A00',
                    backgroundImage: "url('/noise.png')",
                    opacity: '0.3'
                },
            }}
        >
            <StyledContent>
                <InfoContainer>
                    <InfoTitle>
                        {lang === "us" ? "Apologies!" : (lang === "ru" ? "Извините!" : "Бубахшед!")}
                    </InfoTitle>
                    <StyledIconButton onClick={handleClose}>
                        <StyledCloseIcon />
                    </StyledIconButton>
                    <BodyContainer>
                        <Desc>{msg}</Desc>
                    </BodyContainer>
                </InfoContainer>
            </StyledContent>
        </Dialog>
    );
}