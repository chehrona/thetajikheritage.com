import styled from "styled-components";
import { Info, Close } from "@mui/icons-material";
import { IconButton, DialogContent } from "@mui/material";

export const Desc = styled.div`
    width: 100%;
    height: 100%;
    color: #dedbdb;
    line-height: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1.3rem;
        line-height: 2rem;
    }
`;

export const StyledIconButton = styled(IconButton)`
    width: 2rem;
    height: 2rem;
    top: 1.75rem;
    right: 2rem;

    &.MuiIconButton-root {
        position: absolute;
    }

    @media (max-width: 768px) {
        &.MuiIconButton-root {
            top: 0.6rem;
            right: 0.6rem;
        }
    }
`;

export const StyledContent = styled(DialogContent)`
    border-radius: 2rem;
    position: relative;
    padding: 0.001rem;

    @media (max-width: 768px) {
        &.MuiDialogContent-root {
            padding: 0rem;
            overflow: hidden;
            font-size: 1.3rem;
        }
    }
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    background: #000;
    box-shadow: 0rem 0rem 0.3rem 0rem #0F0A00;
    padding: 0.5rem;
`;

export const InfoTitle = styled.div`
    color: #ffffff;
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: 2rem;
    font-family: 'EB Garamond', serif;

    @media (max-width: 768px) {
        font-size: 2.5rem;
        text-align: center;
        margin: 0.5rem 3rem 1rem 1rem;
        line-height: 2.5rem;
    }
`;

export const StyledCloseIcon = styled(Close)`
    color: #bd9d52;

    &.MuiSvgIcon-root {
        height: 3rem;
        width: 2rem;
    }

    @media (max-width: 768px) {
        &.MuiSvgIcon-root {
            width: 3rem;
            height: 2.5rem;
        }
    }
`;

export const BodyContainer = styled.div`
    display: flex;
    margin: 1rem;
`;

export const Wrapper = styled.div`
    width: ${({ first }) => first ? "25%" : "75%"};
    height: 100%;
`;

export const AwardImg = styled.img`
    border-radius: 1rem;
    height: 15rem;
    width: 11rem;
    padding: 1rem;
    background: #0F0A00;
    background-image: url(${'/noise.png'});
    box-shadow: 0rem 0rem 0.4rem 0.01rem #bd9d52;
`;