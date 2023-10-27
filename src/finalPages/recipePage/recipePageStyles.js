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
    min-height: 100vh; 
    background-color: #000;
    padding: 1rem;
`;

export const RecipeContainer = styled.div`
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem #504221d1;
    margin: 1rem 3.5rem 1.5rem 3.5rem;
    background-color: #fcf6e9;
    color: #0F0A00;
    border-radius: 4rem;
    background-image: url(${'/noise.png'});
    padding: 2rem;
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
`;

export const IntroSection = styled.div`
    display: flex;
    width: 100%;
    margin-top: 2rem;
`;

export const ImageContainer = styled.div`
    width: 30rem;
    height: 45rem;
    margin-right: 3rem;
    margin-bottom: 2.23rem;
    float: left;
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
`;

export const SubContainer = styled.div`
    margin-top: 3rem;
    display: flex;
`;