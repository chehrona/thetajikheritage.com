import styled from "styled-components";
import { Close } from "@mui/icons-material";
import { IconButton, DialogContent } from "@mui/material";

export const Desc = styled.div`
    width: 100%;
    height: 100%;
    color: #0F0A00;
    line-height: 1.5rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.3rem;
        line-height: 2rem;
    }
`;

export const StyledIconButton = styled(IconButton)`
    width: 2rem;
    height: 2rem;
    top: 1.5rem;
    right: 1.6rem;

    &.MuiIconButton-root {
        position: absolute;
    }

    @media (max-width: 768px) {
        top: 0rem;
        right: 0rem;
        width: 3rem;
        height: 3rem;
    }
`;

export const StyledContent = styled(DialogContent)`
    border-radius: 1.5rem;
    position: relative;
    padding: 0.001rem;

    @media (max-width: 768px) {
        &.MuiDialogContent-root {
            padding: 0rem;
        }
    }
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 1.5rem;
    background: #fcf6e9;
    padding: 0.5rem;
    box-shadow: 0rem 0rem 0.3rem 0rem #0F0A00;
`;

export const InfoTitle = styled.div`
    color: #000000;
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: 2rem;
    font-family: 'EB Garamond', serif;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const StyledCloseIcon = styled(Close)`
    color: #bd9d52;

    &.MuiSvgIcon-root {
        height: 3rem;
        width: 2rem;
    }
`;

export const BodyContainer = styled.div`
    display: flex;
    margin: 1rem;
`;