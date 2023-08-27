import styled from "styled-components";
import { Pinterest } from "@mui/icons-material";

export const PageContainer = styled.div`
    box-sizing: border-box;
    min-height: 100vh;
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem #504221d1;
    margin: 2rem 4.5rem 2rem 4.5rem;
    background-color: #0F0A00;
    color: #dedbdb;
    border-radius: 4rem;
    background-image: url(${'/noise.png'});
    padding: 2rem;
`;

export const MainImage = styled.img`
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    font-size: 2em !important;
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