import styled, { keyframes } from "styled-components";
import { Close, PlayArrow, ArrowForwardIos } from "@mui/icons-material";
import { IconButton, DialogContent } from "@mui/material";

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateX(0);
    }
    40% {
        transform: translateX(0.5rem);
    }
    60% {
        transform: translateX(0.7rem);
    }
`;

export const Desc = styled.div`
    width: 100%;
    line-height: 1.5rem;
    text-align: justify;
    padding-right: 27%;

    @media (max-width: 768px) {
        line-height: 1.8rem;
        padding-right: 0rem;
        margin-top: 0.7rem;
        position: relative;

        ${({ expand }) => !expand && `
            &:after {
                content: "";
                height: 20rem;
                width: 100%;
                left: 0;
                position: absolute;
                bottom: 0;
                background: linear-gradient(to bottom, rgba(252, 246, 233, 0), rgba(252, 246, 233, 1));
            }
        `}
    }
`;

export const StyledIconButton = styled(IconButton)`
    width: 5.5rem;
    height: 5.5rem;

    &.MuiIconButton-root {
        background: #504221d1;

        &:hover {
            background: #504221;
        }
    }

    @media (max-width: 768px) {
        width: 7.5rem;
        height: 7.5rem;
    }
`;

export const StyledArrowButton = styled(IconButton)`
    width: 2.5rem;
    height: 2.5rem;
    transform: rotate(-90deg) translateX(-50%);
    position: absolute;
    left: calc(50% - 1.5rem);
    top: -2rem;
`;

export const StyledCloseButton = styled(IconButton)`
    width: 3rem;
    height: 3rem;
    top: 0rem;
    right: 0rem;
    z-index: 10;

    &.MuiIconButton-root {
        position: absolute;
    }
`;

export const StyledContent = styled(DialogContent)`
    border-radius: 2rem;
    position: relative;
    height: 20rem;
    color: #0F0A00;

    &.MuiDialogContent-root {
        padding: 0rem;
    }

    @media (max-width: 768px) {
        &.MuiDialogContent-root {
            padding: 0rem;
        }

        font-size: 1.3rem;
    }
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    background: #0F0A00;
    color: #0F0A00;
    box-shadow: 0rem 0rem 0.3rem 0rem #dedbdb;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        overflow: hidden;
        background: #fcf6e9;
        box-shadow: ${({ expand }) => expand ? 'none' : '0rem 0rem 0.3rem 0rem #dedbdb'};
    }
`;

export const InnerBox = styled.div`
    width: 62%;
    background: #fcf6e9;
    position: relative;
    border-radius: 2rem 0rem 0rem 2rem;
    padding: 2rem;
    height: 100%;

    ${({ width }) => width && `
        background: #0F0A00";
        position: relative;
        border-radius: 0rem 2rem 2rem 0rem;
    `}

    @media (max-width: 768px) {
        width: 100%;
        z-index: 2;
        padding: 1.5rem;
        border-radius: 2rem;
        overflow-y: scroll;
        overflow-x: hidden;
        position: absolute;
        top: ${({ expand }) => expand ? '0rem' : '40%'};
        display: ${({ width }) => width && 'none'};
    }
`;

export const StudioName = styled.img`
    height: 3rem;

    @media (max-width: 768px) {
        position: absolute;
        left: 1.5rem;
    }
`;

export const InfoTitle = styled.div`
    overflow-wrap: break-word;
    font-style: bold;
    font-size: 3.5rem;
    line-height: 3.5rem;
    width: 100%;
    text-transform: uppercase;
    margin-top: 1rem;
    font-family: 'EB Garamond', serif;
    text-shadow: 0.0625rem 0.0625rem 0.1875rem #504221e6;

    @media (max-width: 768px) {
       font-size: 3rem;
       line-height: 3.3rem;
       width: 100%;
    }
`;

export const StyledCloseIcon = styled(Close)`
    color: #bd9d52;

    &.MuiSvgIcon-root {
        width: 3rem;
        height: 2rem;
    }

    @media (max-width: 768px) {
        &.MuiSvgIcon-root {
            width: 3rem;
            height: 2.5rem;
        }
    }
`;

export const StyledPlayIcon = styled(PlayArrow)`
    color: #fcf6e9;

    &.MuiSvgIcon-root {
        width: 3rem;
        height: 3rem;
    }

    @media (max-width: 768px) {
        &.MuiSvgIcon-root {
            width: 5rem;
            height: 5rem;
        }
    }
`;

export const MovieImg = styled.img`
    height: 85%;
    width: auto;
    position: absolute;
    top: 50%;
    left: 47%;
    transform: translateY(-50%);
    box-shadow: 0rem 0rem 1rem 0.2rem #504221d1;

    @media (max-width: 768px) {
        top: 0rem;
        left: auto;
        transform: none;
        width: 100%;
        height: auto;
        border-radius: 2rem 0rem 0rem 2rem;
    }
`;

export const ReleaseInfo = styled.div`
    display: flex;
    align-items: center;
    height: 4rem;
    width: 62%;
    justify-content: start;
    padding-right: 2rem;
    color: #504221d1;

    @media (max-width: 768px) {
        padding-top: 1rem;
        width: 100%;
        padding-right: 0rem;
    }  
`;

export const InfoWrapper = styled.div`
    border-radius: 1.5rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: bold;
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: ${({ year }) => year ? '3rem' : '10rem'};
`;

export const Director = styled.div`
    width: 62%;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: 'EB Garamond', serif;
    margin-top: 1.5rem;
    margin-bottom: 0.3rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const DirBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    position: absolute;
    left: 75%;
    top: 15%;

    @media (max-width: 768px) {
        left: 50%;
        right: auto;
        transform: translateX(-50%);
    }
`;

export const Line = styled.div`
    width: 4rem;
    background: #fcf6e9;
    height: 0.05rem;
    margin-right: 1rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Direction = styled.div`
    text-transform: uppercase;
    font-size: 1rem;
    color: #fcf6e9;
    font-family: 'EB Garamond', serif;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledFrame = styled.iframe`
    width: 100%;
    border-radius: 2rem;
    padding: 5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const Loader = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: #202020
        url("/loader.svg") center
        no-repeat;
    z-index: 1;
    border-radius: 2rem;
    opacity: 0.7;
`;

export const SlideUp = styled(ArrowForwardIos)`
    transform: rotate(-90deg);
    animation: ${bounce} 2s infinite;
`;

export const SlideDown = styled(ArrowForwardIos)`
    transform: rotate(-180deg);
`;