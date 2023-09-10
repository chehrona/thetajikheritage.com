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

export const InfoContainer = styled.div`
    display: inline;
    margin-bottom: 0.8rem;
`;

export const MainTitle = styled.div`
    font-size: 5rem;
    color: #000;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-weight: 500;
    margin-bottom: 0.5rem;
    text-shadow: 0.0625rem 0.0625rem 0.0875rem #0F0A00;
    opacity: 0;
    animation: ${slideOut} 0.5s ease-in-out forwards;
`;

export const HistoryInfo = styled.div`
    font-size: 1.1rem;
    line-height: 1.7rem;
    color: #0F0A00;
    opacity: 0;
    animation: ${slideOut} 0.5s ease-in-out forwards;
    animation-delay: 0.01s;
`;