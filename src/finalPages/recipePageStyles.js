import styled from "styled-components";
import { Pinterest } from "@mui/icons-material";

export const PageContainer = styled.div`
    box-sizing: border-box;
    margin: 5rem;
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
    margin-right: 5rem;
`;

export const InfoContainer = styled.div`
    width: 45rem;
`;

export const StyledPinIcon = styled(Pinterest)`
    color: #e60022;
    position: absolute;
    left: 5.5rem;
    top: 13.5rem;
    font-size: 2em !important;
`;

export const IngredientContainer = styled.div`
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    background: #eaeaea;
`;

export const IngredientBox = styled.div`
    margin: 2rem;
    margin-left: ${({margin}) => margin === "false" && "0rem"};
`;

export const SubTitle = styled.div`
    font-size: 2rem;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-weight: 500;
    padding-right: 2rem;
    padding-left: ${({margin}) => margin === "false" ? "0rem" : "2rem"};
    padding-top: 1rem;
    padding-bottom: 0rem;
`;

export const Ingredient = styled.div`
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #212529;
    min-height: 2rem;
`;