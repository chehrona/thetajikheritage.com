import styled, { keyframes } from "styled-components";
import { device } from "../../common/deviceSizes/size";
import { IconButton } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

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

const slideOut = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    50% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const MainContainer = styled.div`
    background: #fcf6e9;
    background-image: url(${'/noise.png'});
    color: white;
    position: relative;
    padding-top: 3rem;

    &:before {
        content: "";
        padding: 3rem;  
        width: 100%;
        background: #fcf6e9;
        background-image: url(${'/noise.png'});
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        top: -5.99rem;
        box-sizing: border-box;
    }
`;

export const MovieWrapper = styled.div`
    padding: 0rem 3rem 0rem 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (${device.tablet}) { 
        padding: 0rem 2rem 0rem 2rem;
    }
`;

export const MovieCard = styled.div`
    margin-bottom: 7rem;
    height: 21.15rem;
    width: 14.95rem;
    cursor: pointer;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: 0rem 0rem 0.6rem #504221d1;
    opacity: 0;
    animation: ${slideOut} 2s ease-in-out forwards;
    animation-delay: ${({ delay }) => delay ? delay : '0s'};

    @media (${device.tablet}) { 
        margin-bottom: 3rem;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: 100%;
    border-radius: 0.5rem;
`;

export const StyledIconButton = styled(IconButton)`
    position: absolute !important;
    background: #0F0A00 !important;
    background
    width: 3rem;
    height: 3rem;
    bottom: 1rem;
    right: -2.6rem;
    transform: translateX(-50%);
    box-shadow: 0rem 0rem 0.6rem #000;
`;

export const StyledExpand = styled(ChevronRight)`
    color: #dedbdb;
    height: 2rem !important;
    width: 2rem !important;
    animation: ${bounce} 2s infinite;
`;