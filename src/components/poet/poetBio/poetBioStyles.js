import styled from "styled-components";
import { IconButton } from '@mui/material';

export const MainContainer = styled.div`
    background-image: url(${'/noise.png'});
    min-height: fit-content;
    padding-bottom: 3rem;
    background-color: #fcf6e9;
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
        flex-wrap: wrap;
    }
`;

export const Year = styled.div`
    font-size: 3rem;
    font-family: "EB Garamond", serif;
    margin-bottom: 1rem;
    text-align: ${({ align }) => align && 'center'};
`;

export const Desc = styled.div`
    font-size: 1.1rem;
    color: #333333;
`;

// Box two ****************************
export const BoxTwo = styled.div`
    margin-top: 6rem;
    margin-bottom: 8.5rem;
    color: #fcf6e9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    text-shadow: 0.0625rem 0.0625rem 0.1875rem #0F0A00;
`;

export const InnerOverlay = styled.div`
    background: #333333;
    margin-top: 4rem;
    height: ${({ four }) => four ? '30rem' : '40rem'};
    width: 100%;
    overflow: hidden;
    filter: grayscale(1);
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
    top: -4rem;
    z-index: 1;
`;

export const SlideImg = styled.img`
    width: 18rem;
    display: block;
    filter: grayscale(1) ${({ show }) => show ? 'brightness(100%)': 'brightness(60%)'};
    box-shadow: ${({ show }) => 
        show ? '0rem 0rem 0.5rem 0.1rem #dedbdb' : '0rem 0rem 1rem 0.2rem #504221e6'};
`;

export const NavBox = styled.div`
    width: 65%;
    height: 10rem;
    position: absolute;
    ${({ bottom }) => bottom ? 'bottom: 0rem' : 'top: 4rem'};
    right: 0rem;
    z-index: 10;
`;

export const Line = styled.div`
    width: 0.0625rem;
    height: 7rem;
    background: #bd9d52;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: ${({ bottom }) => bottom && '0rem'};
    top: ${({ top }) => top && '0rem'};
`;

export const StyledIconButton = styled(IconButton)`
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) ${({ bottom }) => bottom ? 'rotate(90deg)' : 'rotate(-90deg)'};
    ${({ bottom }) => bottom ? 'bottom: 0rem' : 'top: 6.5rem'};
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
    align-items: center;
    height: 20rem;
    width: 100%;
    transition: ease 1000ms;
`;

export const Info = styled.div`
    padding-right: 7%;
    padding-left: 7%;
`;

export const Text = styled.div`
    text-align: justify;
    font-size: 1.1rem;
    line-height: 1.8rem;
`;

// Box three ****************************
export const BoxThree = styled.div`
    width: 100%;
    position: relative;
    padding: 0rem 3rem 3rem 3rem;
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
`;

export const DescWrapper = styled.div`
    column-count: 2;
    column-gap: 3rem;
    overflow: hidden;
    color: #333333;
    font-family: 'IBM Plex Serif', serif;
    font-size: 1.1rem;
`;

export const YearBig = styled.div`
    font-size: 4.5rem;
    font-family: "EB Garamond", serif;
    margin-bottom: 1rem;
    text-align: ${({ align }) => align && 'center'};
    color: ${({ color }) => color && '#bd9d52'};
`;

export const TextWrapper = styled.div`
    font-size: 1.1rem;
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
    font-size: 1.1rem;
    border-bottom: 0.0625rem solid #bd9d52;
    border-top: 0.0625rem solid #bd9d52;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }
`;

// Box six ********************************
export const BoxSix = styled.div`
    width: 100%;
    text-align: center;
    color: #0F0A00;
    font-size: 1.1rem;
    padding: 1.5rem 3rem 3rem 3rem;
`;

// Box seven ********************************
export const BoxSeven = styled.div`
    width: 100%;
    display: flex;
    min-height: 20rem;
`;

export const LeftContainer = styled.div`
    width: 50%;
    position: relative;
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const RightContainer = styled.div`
    width: 50%;
    height: 30rem;
    background: #333333
        url("/loader.svg") center no-repeat;
    background: ${({ src }) => `url(${ src })`};
    background-size: ${({ src }) => src ? 'cover' : 'contain'};
    background-repeat: no-repeat;
    background-position: center center;
    transition: all 0.5s;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        width: 100%;
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
    opacity: 0.2;
    filter: grayscale(1);
    background-image: ${({ src }) => `url(${ src })`};
`;

export const FinalQuote = styled.div`
    position: absolute;
    text-align: center;
    width: 100%;
    left: 50%;
    top: 50%;
    color: #bd9d52;
    font-size: 2.5rem;
    font-style: italic;
    font-family: "EB Garamond", serif;
    transform: translate(-50%, -50%);
    padding-right: 10%;
    padding-left: 10%;
    text-shadow: 0.0625rem 0.0625rem 0.1875rem #0F0A00;
`;

export const Author = styled.div`
    color: #fcf6e9;
    font-size: 1.1rem;
    font-style: normal;
    font-family: 'IBM Plex Serif', serif;
    text-align: end;
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
        ${({ left }) => left ? 'left: 0.5rem' : 'right: 0.5rem'};
        top: 50%;
        transform: translateY(-50%) ${({ left }) => left && 'rotate(-180deg)'};
        z-index: 10;
    }
`;

export const ImgInfo = styled.div`
    position: absolute;
    z-index: 10;
    font-style: italic;
    right: 0.5rem;
    padding-left: 0.5rem;    
    color: ${({ color }) => color && color};
    bottom: ${({ up }) => up ? '3.2rem' : '0.5rem'};
`;