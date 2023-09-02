import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

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

export const RecipeBoxContainer = styled.div`
    margin: 5rem;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const RecipeCard = styled.div`
    border-radius: 0.7rem;
    height: 35rem;
    width: 23rem;
    margin-bottom: 7rem;
    cursor: pointer;
    position: relative;
    opacity: 0;
    animation: ${slideOut} 1s ease-in-out forwards;
    animation-delay: ${({ delay }) => delay ? delay : '0s'};
`;

export const RecipeNameBox = styled.div`
    display: flex;
    font-size: 2rem;
    align-items: center;
    margin-top: 0.5rem;
`;

export const StyledIconButton = styled(IconButton)`
    width: 2.5rem;
    margin-top: 0.3rem !important;

    &:hover {
        color: #59a959;
    }
`;

export const RecipeTitle = styled.div`
    font-weight: 500;
    margin-right: 0.3rem;
    font-family: 'EB Garamond', serif;
    font-style: italic;
`;

export const RecipeSubtitle = styled.div`
    font-size: 1.1rem;
    margin-top: -0.2rem;
`;

export const RecipeImage = styled.img`
    border-radius: 0.7rem;
    width: 100%;
    height: 100%;
    box-shadow: 0rem 0rem 0.3rem 0.5rem #fcf6e9;

    &:hover {
        border-radius: 1.5rem;
        box-shadow: 0rem 0rem 0.3rem 0.5rem #fcf6e9;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
