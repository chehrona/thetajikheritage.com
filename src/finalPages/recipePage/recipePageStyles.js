import styled, { keyframes } from "styled-components";
import { Pinterest } from "@mui/icons-material";

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
    
    @media (max-width: 768px) {
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

    @media (max-width: 768px) {
        padding: 0rem;
        border-radius: 0rem;
        display: flex;
        flex-direction: column;
        box-shadow: 0rem 0rem 0rem 0rem;
    }
`;

export const MainImage = styled.img`
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0;
    transform: translateY(-100%);
    animation: ${slideUp} 0.5s ease-in-out forwards;
    box-shadow: 0rem 0rem 0.4rem 0.01rem #504221;

    @media (max-width: 768px) {
        border-radius: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
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

    @media (max-width: 768px) {
        margin: 0rem;
        width: 100%;
    }
`;

export const InfoContainer = styled.div`
    width: 45rem;
`;

export const StyledPinIcon = styled(Pinterest)`
    color: #dedbdb;
    position: absolute;
    left: 5.5rem;
    top: 13.5rem;

    &.MuiSvgIcon-root {
        font-size: 2em;
    }
`;

export const InstructionContainer = styled.div`
    width: 100%;
`;

export const IngredientContainer = styled.div`
    width: 30rem;
    margin-right: 3.5rem;

    @media (max-width: 768px) {
        margin-right: 0rem;
        width: 100%;
    }
`;

export const SubContainer = styled.div`
    margin-top: 3rem;
    display: flex;

    @media (max-width: 768px) {
        margin-top: 0rem;
        flex-direction: column;
    }
`;