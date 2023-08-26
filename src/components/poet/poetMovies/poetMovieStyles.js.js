import styled, { keyframes } from "styled-components/macro";
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
`;

export const MainContainer = styled.div`
    background: #fcf6e9;
    background-image: url(${'/noise.png'});
    color: white;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;

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

export const MovieCard = styled.div`
    margin-bottom: 7rem;
    height: 21.15rem;
    width: 15rem;
    cursor: pointer;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: 0rem 0rem 0.6rem #504221d1;

    &&&:first-child {
        margin-left: 3rem;
    }

    &&&:last-child {
        margin-right: 3rem;
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
    right: -2.3rem;
    transform: translateX(-50%);
    box-shadow: 0rem 0rem 0.6rem #000;
`;

export const StyledExpand = styled(ChevronRight)`
    color: #dedbdb;
    height: 2rem !important;
    width: 2rem !important;

    &:hover {
        animation: ${bounce} 2s infinite;
    }
`;