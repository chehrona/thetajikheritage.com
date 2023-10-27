import styled, { keyframes } from "styled-components";

const zoomIn = keyframes`
    from {
        transform: scale(1.5);
    }
    to {
        transform: scale(1);
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

export const MainContainer = styled.div`
    background: #0F0A00;
    background-image: url(${'/noise.png'});
    display: flex;
    justify-content: space-between;
    position: relative;
    border-radius: 4rem 4rem 0rem 0rem;
    overflow: hidden;

    &:after {
        content: "";
        padding: 3rem;  
        width: 100%;
        background: #fcf6e9;
        background-image: url(${'/noise.png'});
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        bottom: -0.01rem;
        box-sizing: border-box;
    }
    
    @media (max-width: 768px) {
        border-radius: 0rem;
        flex-direction: column-reverse;

        &:after {
            content: "";
            padding: 3rem;  
            width: 100%;
            background: #fcf6e9;
            background-image: url(${'/noise.png'});
            -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
            clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
            position: absolute;
            bottom: -0.01rem;
            box-sizing: border-box;
        }
    }
`;

export const FadedImage = styled.img`
    width: 47rem;
    min-height: 50rem;
    height: auto;
    background: #0F0A00;
    transform-origin: center;
    border-radius: 5rem 4rem 0rem 5rem;
    animation: ${zoomIn} 0.5s ease-out;
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    @media (max-width: 768px) {
        width: 100%;
        min-height: 25rem;
        border-radius: 2.5rem 2rem 0rem 2.5rem;
        margin-left: -12%;
    }
`;

export const SegmentContainer = styled.div`
    margin: 5rem;
    margin-left: 5rem;
    font-size: 1.5rem;
    width: 100%;
    z-index: 10;
    position: relative;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const SectionTitle = styled.div`
    line-height: 3rem;
    color: #dedbdb;
    text-decoration: none;
    display: block;
    overflow: hidden;
`;

export const TitleSpan = styled.span`
    padding-left: 0.3rem;
    display: block;
    opacity: 0;
    transform: translateY(-100%);
    animation: ${slideUp} 1s ease-in-out forwards;
    animation-delay: ${({ delay }) => delay ? delay : '0s'};

    &:hover {
        text-shadow: 0.1rem 1rem 2rem #dedbdb;
        font-size: 1.6rem;
        cursor: pointer;
    }
`;

export const PoetName = styled.div`
    opacity: 0;
    color: #dedbdb;
    font-size: 8rem;
    font-weight: bold;
    font-style: italic;
    animation-delay: 0.1s;
    text-shadow: 0rem 0rem 5rem black;
    -webkit-text-stroke-color: #bd9d52;
    animation: ${slideOut} 1s ease-in-out forwards;

    ${({ color }) => color && `
        animation-delay: 0s;
        color: transparent;
        margin-right: 2rem;
        -webkit-text-stroke-width: 0.22rem;
    `}

    @media (max-width: 768px) {
        font-size: 5rem;
        line-height: 5.2rem;
        text-align: left;
        color: transparent;
        text-shadow: 0rem 0rem 2rem black;
        -webkit-text-stroke-width: 0.22rem;

        ${({ color }) => color && `
            color: #dedbdb;
            text-align: right;
            margin-right: 2rem;
            -webkit-text-stroke-color: transparent;
        `}
    }
`;

export const PoetNameContainer = styled.div`
    position: absolute;
    left: 5rem;
    bottom: 6rem;
    display: flex;

    @media (max-width: 768px) {
        left: 2rem;
        display: block;
    }
`;

export const YearsContainer = styled.div`
    color: #dedbdb;
    font-size: 10rem;
    min-height: 24rem;
    position: absolute;
    top: 4rem;
    left: 14rem;
    opacity: 0.25;
    font-weight: bold;
    z-index: 10;

    @media (max-width: 768px) {
        font-size: 4.2rem;
        min-height: 12rem;
        position: absolute;
        top: 2rem;
        right: 0.5rem;
        text-align: right;
    }
`;

export const Year = styled.div`
    margin-left: 9rem;

    @media (max-width: 768px) {
        margin-left: 0rem;
        margin-right: 2.5rem;
    }
`;

export const NumSpan = styled.span`
    display: inline-block;
    opacity: 0;
    animation: ${slideOut} 1s ease-in-out forwards;
    animation-delay: ${({ delay }) => delay ? delay : '0s'};
`;