import styled, { keyframes } from "styled-components/macro";

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
`;

export const FadedImage = styled.img`
    width: 47rem;
    min-height: 50rem;
    height: auto;
    box-shadow: 6rem 6rem 2rem 4rem #0F0A00 inset;
    transform-origin: center;
    border-radius: 5rem 4rem 0rem 5rem;
    animation: ${zoomIn} 0.5s ease-out;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
`;

export const SegmentContainer = styled.div`
    margin: 5rem;
    margin-left: 5rem;
    font-size: 1.5rem;
    width: 100%;
    z-index: 10;
    position: relative;
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
        text-shadow: 0.1rem 0.1rem 1.5rem #dedbdb;
        font-size: 1.6rem;
        cursor: pointer;
    }
`;

export const PoetName = styled.div`
    font-size: 8rem;
    font-weight: bold;
    font-style: italic;
    color: ${({color}) => color === 'true' ? "transparent" : "#dedbdb"};
    margin-right: ${({color}) => color === 'true' ? "2rem" : "0rem"};
    text-shadow: 0rem 0rem 5rem black;
    -webkit-text-stroke-width: ${({color}) => color === 'true' && '0.22rem'};
    -webkit-text-stroke-color: #bd9d52;
    opacity: 0;
    animation: ${slideOut} 1s ease-in-out forwards;
    animation-delay: ${({ color }) => color ? '0s' : '0.1s'};

`;

export const PoetNameContainer = styled.div`
    position: absolute;
    left: 5rem;
    bottom: 6rem;
    display: flex;
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
`;

export const Year = styled.div`
    margin-left: 9rem;
`;

export const NumSpan = styled.span`
    display: inline-block;
    opacity: 0;
    animation: ${slideOut} 1s ease-in-out forwards;
    animation-delay: ${({ delay }) => delay ? delay : '0s'};
`;