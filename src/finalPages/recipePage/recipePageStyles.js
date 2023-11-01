import styled, { keyframes } from "styled-components";
import { Pinterest } from "@mui/icons-material";
import { Button } from "@mui/material";

const slideUp = keyframes`
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    
    }
`;

export const PageContainer = styled.div`
    box-sizing: border-box;
    min-height: 100svh;
    background-color: white;
    padding: 2rem 3.7rem 2.8rem 3.2rem;
    
    @media (max-width: 480px) {
        padding: 0rem;
    }
`;

export const RecipeContainer = styled.div`
    color: #0F0A00;
    border-radius: 4rem;
    padding: 3rem;
    background-color: #fcf6e9;
    background-image: url(${'/noise.png'});
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem #504221d1;

    @media (max-width: 480px) {
        padding: 0rem;
        border-radius: 0rem;
        display: flex;
        flex-direction: column;
        box-shadow: 0rem 0rem 0rem 0rem;
    }
`;

export const StyledPinIcon = styled(Pinterest)`
    color: #dedbdb;
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    z-index: 10;

    &.MuiSvgIcon-root {
        fill: red;
        font-size: 2.5rem;
        border-radius: 50%;
        background-color: white;
    }
`;

export const MainImage = styled.img`
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0;
    position: relative;
    z-index: 1;
    transform: translateY(-100%);
    animation: ${slideUp} 0.5s ease-in-out forwards;
    box-shadow: 0rem 0rem 0.4rem 0.01rem #504221;

    @media (max-width: 480px) {
        border-radius: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
        animation: none;
        transform: translateY(0%);
        opacity: 1;
    }
`;

export const IntroSection = styled.div`
    display: flex;
    width: 100%;
    margin-top: 2rem;
`;

export const ImageContainer = styled.div`
    width: 30rem;
    height: 45rem;
    margin: 0rem 3rem 1rem 0rem;
    float: left;
    position: relative;

    @media (max-width: 480px) {
        margin: 0rem;
        width: 100%;
    }
`;

export const InfoContainer = styled.div`
    width: 45rem;
`;

export const InstructionContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

export const IngredientContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const SubContainer = styled.div`
    margin-top: 3rem;

    @media (max-width: 480px) {
        margin-top: 0rem;
    }
`;

export const StyledButton = styled(Button)`
    box-shadow: 0rem 0rem 0.4rem 0.01rem #504221;

    div {
        color: #fff;
    }

    &.MuiButton-root {
        background: #504221d1;
        border-radius: 0.8rem;
        text-transform: none;
        padding: 0.5rem 1.5rem;
        font-family: 'IBM Plex Serif', serif;
    }

    &.MuiButton-root:hover {
        background: #504221d1;
    }
`;