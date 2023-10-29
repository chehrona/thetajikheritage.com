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
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;

    @media (max-width: 768px) {
        justify-content: space-between;
        gap: 1rem;
    }
`;

export const RecipeCard = styled.div`
    opacity: 0;
    color: #0F0A00;
    cursor: pointer;
    position: relative;
    animation: ${slideOut} 1s ease-in-out forwards;
    animation-delay: ${({ delay }) => delay ? delay : '0s'};
`;

export const RecipeNameBox = styled.div`
    display: flex;
    font-size: 2rem;
    margin-top: 0.5rem;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        margin-top: 0rem;
    }
`;

export const StyledIconButton = styled(IconButton)`
    width: 2.5rem;
    height: 2.5rem;
    margin-top: -0.1rem;

    &.MuiIconButton-root {
        margin-left: 0.3rem;
    }

    &:hover {
        color: #59a959;
    }

    @media (max-width: 768px) {
        &.MuiIconButton-root {
            color: #59a959;
        }
    }
`;

export const RecipeInfo = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-style: italic;
    font-family: 'EB Garamond', serif;
`;

export const RecipeSubtitle = styled.div`
    font-size: 1.1rem;
`;

export const RecipeImage = styled.img`
    height: 35rem;
    width: 23rem;
    border-radius: 0.7rem;

    &:hover {
        border-radius: 1.5rem;
        box-shadow: 0rem 0rem 0.6rem #504221d1;
    }

    @media (max-width: 768px) {
        height: 19.025rem;
        width: 12.5rem;
        box-shadow: 0rem 0rem 0.6rem #504221d1;

        &:hover {
            border-radius: 0.7rem;
        }
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
