import styled from "styled-components";
import { IconButton } from '@mui/material';

export const MainContainer = styled.div`
    background-image: url(${'/noise.png'});
    min-height: fit-content;
    padding-bottom: 3rem;
    background-color: #fcf6e9;
    font-size: 1.1rem;

    @media (max-width: 768px) {
        position: relative;
        padding-bottom: 0rem;
        font-size: 1.3rem;

        &:after {
            content: "";
            padding: 3rem;  
            width: 100%;
            background: #0F0A00;
            background-image: url(${'/noise.png'});
            -webkit-clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            clip-path: polygon(100% 0, 0% 100%, 0% 100%, 100% 100%);
            position: absolute;
            bottom: 1rem;
            box-sizing: border-box;
        }
    }
`;

// Box one ****************************
export const BoxOne = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 3rem 1rem 3rem;
    color: #0F0A00;
    gap: 3rem;

    @media (max-width: 768px) {
        padding: 0rem 1.5rem 1rem 1.5rem;
        flex-wrap: wrap;
    }
`;

export const Year = styled.div`
    font-size: 3.5rem;
    font-family: "EB Garamond", serif;
    margin-bottom: 0.5rem;
`;

export const Desc = styled.div`
    color: #333333;
`;

// Box two ****************************
export const BoxTwo = styled.div`
    margin-top: 1rem;
    margin-bottom: 9rem;
    color: #fcf6e9;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    text-shadow: 0.0625rem 0.0625rem 0.1875rem #0F0A00;
`;

export const InnerOverlay = styled.div`
    background: #333333;
    margin-top: 8rem;
    width: 100%;
    overflow: hidden;
    filter: grayscale(1);
    height: ${({ four }) => four ? '30rem' : '40rem'};
`;

export const Backdrop = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    opacity: 0.2;
    filter: grayscale(1);
    background-image: ${({ backdrop }) => `url(${ backdrop })`};
`;

export const Slides = styled.div`
    position: absolute;
    left: 10%;
    top: 0rem;
    z-index: 1;
    pointer-events: none;
`;

export const SlideImg = styled.img`
    width: 18rem;
    display: block;
    filter: grayscale(1) ${({ show }) => show ? 'brightness(100%)': 'brightness(60%)'};
    box-shadow: ${({ show }) => 
        show ? '0rem 0rem 0.5rem 0.1rem #dedbdb' : '0rem 0rem 1rem 0.2rem #504221e6'};
`;

export const NavBox = styled.div`
    width: 100%;
    height: 10rem;
    position: absolute;
    ${({ bottom }) => bottom ? 'bottom: 0rem' : 'top: 8rem'};
    right: 0rem;
    display: flex;
`;

export const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
`;

export const Line = styled.div`
    width: 0.0625rem;
    height: 7rem;
    background: #bd9d52;
`;

export const StyledIconButton = styled(IconButton)`
    width: 3.5rem;
    height: 3.5rem;

    &.MuiIconButton-root {
        transform: ${({ bottom }) => bottom ? 'rotate(90deg)' : 'rotate(-90deg)'};
        margin-bottom: ${({ bottom }) => bottom && '-0.5rem'};
        margin-top: ${({ bottom }) => !bottom && '-0.5rem'};
    }
`;

export const Arrow = styled.div`
    color: #bd9d52;
    height: 100%;
    width: 100%;
    border: 0.0625rem solid #bd9d52;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: 0rem 0rem 0.3rem 0rem #dedbdb;
    }
`;

export const LineWrapper = styled.div`
    color: #dedbdb;
    display: flex;
    height: 20rem;
    width: 100%;
    transition: ease 1000ms;
    align-items: center;
`;

export const Info = styled.div`
    padding-right: 10%;
    padding-left: 10%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
`;

export const Text = styled.div`
    text-align: justify;
    line-height: 1.8rem;
`;

// Box three ****************************
export const BoxThree = styled.div`
    width: 100%;
    position: relative;
    padding: 0rem 3rem 3rem 3rem;

    @media (max-width: 768px) {
        padding: 2rem 2rem 1.5rem 1.5rem;
    }
`;

export const QuoteWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const QuoteOutline = styled.div`
    border: 0.125rem solid #bd9d52;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;

    @media (max-width: 768px) {
        width: 6rem;
        height: 6rem;
    }
`;

export const QuoteSymbol = styled.div`
    height: 100%;
    width: 100%;
    color: #bd9d52;
    transform: rotateZ(180deg);
    background-image: url('/poetImages/quote.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 60%;
`;

export const Quote = styled.div`
    font-size: 2.2rem;
    font-family: "EB Garamond", serif;
    font-style: bold;
    text-align: center;
    margin: 1rem 3rem 2rem 3rem;

    @media (max-width: 768px) {
        margin: 0.5rem 0rem 1rem 0rem;
        font-size: 2.5rem;
        line-height: 2.8rem;
    }
`;

export const DescWrapper = styled.div`
    column-count: 2;
    column-gap: 3rem;
    overflow: hidden;
    color: #333333;
    font-family: 'IBM Plex Serif', serif;

    @media (max-width: 768px) {
        column-count: 1;
    }
`;

export const YearBig = styled.div`
    font-size: 4.5rem;
    font-family: "EB Garamond", serif;
    margin-bottom: 1rem;
    text-align: ${({ align }) => align && 'center'};
    color: ${({ color }) => color && '#bd9d52'};

    @media (max-width: 768px) {
        margin-bottom: ${({ align }) => align && '0rem'};
    }
`;

export const TextWrapper = styled.div`
    padding-left: 3rem;
    padding-right: 3rem;
    text-align: center;
    width: 100%;
    position: absolute;
    left: 50%;
    color: #fcf6e9;
    top: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 0.0625rem 0.0625rem 0.1875rem #0F0A00;
`;

// Box five ********************************
export const FamilyDesc = styled.div`
    width: 100%;
    height: 30rem;
    color: #333333;
    padding: 0rem 2.8rem 3rem 3rem;
    border-bottom: 0.0625rem solid #bd9d52;
    border-top: 0.0625rem solid #bd9d52;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }

    @media (max-width: 768px) {
        padding: 0rem 1.5rem 1.5rem 1.5rem;
        height: auto;
    }
`;

export const ImageContainer = styled.div`
    position: absolute;
    display: flex;
`;

export const ImageWrapper = styled.div`
    background-repeat: no-repeat;
    background-position: center center;
    transition: all 0.5s;
    position: relative;
    height: 30rem;
    transition: all 0.5s;
    min-width: ${({ width }) => width && `${width}px`};
    max-width: ${({ width }) => width && `${width}px`};;
    background: ${({ src }) => src ? `url(${ src })` : ''};
    transform: translateX(${({ translate }) => `${translate}px`});
    background-size: ${({ src }) => src && 'cover'};

    @media (max-width: 768px) {
        height: 23rem;
    }
`;

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;

    @media (max-width: 768px) {
        padding: 1.5rem;
        padding-bottom: 2.1rem;
    }
`;

// Box six ********************************
export const BoxSix = styled.div`
    width: 100%;
    text-align: center;
    color: #0F0A00;
    padding: 1.5rem 3rem 3rem 3rem;

    @media (max-width: 768px) {
        padding: 1.5rem;
        padding-bottom: 2.1rem;
    }
`;

// Box seven ********************************
export const BoxSeven = styled.div`
    width: 100%;
    display: flex;
    min-height: 20rem;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const LeftContainer = styled.div`
    width: 50%;
    position: relative;
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;
        height: ${({ first, seven }) => first ? '15rem': (seven ? '30rem': 'auto')};
    }
`;

export const RightContainer = styled.div`
    width: 50%;
    height: 30rem;
    background: #333333;
    background: ${({ src }) => src ? `url(${ src })` : ''};
    background-size: ${({ src }) => src ? 'cover' : 'contain'};
    background-repeat: no-repeat;
    background-position: center center;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        width: 100%;
        margin-top: ${({ first }) => first && '-2rem'};
        height: ${({ first }) => first ? '17rem': '23rem'};
    }
`;

export const Overlay = styled.div`
    background: #333333;
    height: 30rem;
    width: 100%;
    overflow: hidden;
    filter: grayscale(1);
`;

export const BackImg = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: 0.2;
    filter: grayscale(1);
    background-image: ${({ src }) => `url(${ src })`};

    @media (max-width: 768px) {
        margin-top: -3rem;
    }
`;

export const FinalQuote = styled.div`
    position: absolute;
    text-align: center;
    width: 100%;
    left: 50%;
    top: 50%;
    color: #bd9d52;
    font-size: 2.2rem;
    font-style: italic;
    padding-right: 10%;
    padding-left: 10%;
    font-family: "EB Garamond", serif;
    transform: translate(-50%, -50%);
    text-shadow: 0.0625rem 0.0625rem 0.1875rem #0F0A00;

    @media (max-width: 768px) {
        line-height: 2.8rem;
        font-size: 2.5rem;
    }
`;

export const Author = styled.div`
     color: #fcf6e9;
    font-size: 1.1rem;
    font-style: normal;
    text-align: end;
    font-family: 'IBM Plex Serif', serif;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`;

export const StyledButton = styled(IconButton)`
    width: 3.5rem;
    height: 3.5rem;
    color: #bd9d52;
    display: flex;
    justify-content: center;
    align-items: center;

    &.MuiButtonBase-root {
        position: absolute;
        top: 50%;
        z-index: 10;
        ${({ left }) => left ? 'left: 0.5rem' : 'right: 0.5rem'};
        transform: translateY(-50%) ${({ left }) => left && 'rotate(-180deg)'};
    }

    &:disabled {
        display: none;
    }

    @media (max-width: 768px) {
        width: 5rem;
        height: 5rem;
    }
`;

export const ImgInfo = styled.div`
    position: absolute;
    z-index: 10;
    font-style: italic;
    width: 100%;
    text-align: left;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    color: ${({ up }) => up ? '#0F0A00' : '#fcf6e9'};
    bottom: ${({ up }) => up ? '3.2rem' : '0.5rem'};
    background-color: ${({ up }) => up ? 'transparent' : '#26262680'};

    @media (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 1.3rem;
        width: 100%;
        bottom: ${({ up }) => up ? '-1rem' : '0.5rem'};
    }
`;