import styled from "styled-components";
import { device } from "../../common/deviceSizes/size";
import { IconButton } from '@mui/material';

export const MainContainer = styled.div`
    background-image: url(${'/noise.png'});
    min-height: fit-content;
    padding-bottom: 3rem;

    @media (max-width: 768px) { 
    
    }
`;

// Box one ****************************
export const BoxOne = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 4.3rem 1rem 5rem;
    color: #0F0A00;
    gap: 3rem;
    flex-wrap: wrap;

    @media (max-width: 768px) { 
        padding: 0rem 2rem 0rem 2rem;
        gap: 0rem;
    }
`;

export const Year = styled.div`
    font-size: 3rem;
    font-family: "EB Garamond", serif;
    margin-bottom: 1rem;
    text-align: ${({ align }) => align && 'center'};

    @media (max-width: 768px) {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }
`;

export const Desc = styled.div`
    font-size: 1.1rem;
    color: #333333;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
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

    @media (max-width: 768px) { 
        margin-top: 3rem;
        margin-bottom: 5rem;
    }
`;

export const InnerOverlay = styled.div`
    background: #333333;
    margin-top: 4rem;
    height: ${({ four }) => four ? '30rem' : '40rem'};
    width: 100%;
    overflow: hidden;
    filter: grayscale(1);

    @media (max-width: 768px) { 
        height: ${({ four }) => four ? '20rem' : '35rem'};
    }   
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
    left: 5%;
    top: -4rem;
    z-index: 1;

    @media (max-width: 768px) { 
        top: -0.1%;
    }
`;

export const SlideImg = styled.img`
    width: 18rem;
    display: block;
    filter: grayscale(1) ${({ show }) => show ? 'brightness(100%)': 'brightness(60%)'};
    box-shadow: ${({ show }) => 
        show ? '-0.3rem 0rem 0.3rem -0.2rem #dedbdb, 0.3rem 0rem 0.3rem -0.2rem #dedbdb' : '0rem 0rem 1rem 0.2rem #504221e6'};

    @media (max-width: 768px) { 
        width: 14rem;
    }
`;

export const NavBox = styled.div`
    width: 65%;
    height: 10rem;
    position: absolute;
    ${({ bottom }) => bottom ? 'bottom: 0rem' : 'top: 4rem'};
    right: 0rem;
    z-index: 10;

    @media (max-width: 768px) { 
        height: 8.5rem;
    }
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

    @media (max-width: 768px) { 
        height: 5.5rem;
    }
`;

export const StyledIconButton = styled(IconButton)`
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) ${({ bottom }) => bottom ? 'rotate(90deg)' : 'rotate(-90deg)'};
    ${({ bottom }) => bottom ? 'bottom: 0rem' : 'top: 6.5rem'};

    @media (max-width: 768px) { 
        ${({ bottom }) => bottom ? 'bottom: 0rem' : 'top: 5rem'};
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
    align-items: center;
    height: 20rem;
    width: 100%;
    transition: ease 1000ms;

    @media (max-width: 768px) { 
        height: 15rem;
    }
`;

export const Info = styled.div`
    padding-right: 7%;
    padding-left: 7%;

    @media (max-width: 768px) {
        padding-right: 2rem;
        padding-left: 2rem;
    }
`;

export const Text = styled.div`
    text-align: justify;
    font-size: 1.1rem;
    line-height: 1.8rem;

    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.2rem;
    }
`;

// Box three ****************************
export const BoxThree = styled.div`
    width: 100%;
    position: relative;
    min-height: 30rem;
`;

export const QuoteWrapper = styled.div`
    border: 0.125rem solid #bd9d52;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 768px) {
        width: 4rem;
        height: 4rem;
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
    position: absolute;
    top: 1rem;
    margin: 5rem;

    @media (max-width: 768px) {
        font-size: 1.8rem;
        top: 1rem;
        margin: 3.5rem;
    }
`;

export const DescWrapper = styled.div`
    column-count: 2;
    column-gap: 3rem;
    max-height: 30rem;
    overflow: hidden;
    color: #333333;
    padding: 5rem;
    position: absolute;
    top: 9rem;
    font-size: 1.1rem;
    font-family: 'IBM Plex Serif', serif;

    @media (max-width: 768px) {
        column-count: 1;
        padding: 3.5rem 2rem 2rem 2rem;
        font-size: 1rem;
        max-height: 100%;
    }
`;

// Box four *****************************
export const BoxFour = styled.div`
    min-height: 20rem;
    width: 100%;
    position: relative;
    color: #fcf6e9;
`;

export const YearBig = styled.div`
    font-size: 4.5rem;
    font-family: "EB Garamond", serif;
    margin-bottom: 1rem;
    text-align: ${({ align }) => align && 'center'};
    color: ${({ color }) => color && '#bd9d52'};

    @media (max-width: 768px) {
        font-size: 3.5rem;
        line-height: 1.5rem;
    }
`;

export const TextWrapper = styled.div`
    font-size: 1.1rem;
    padding-left: 5rem;
    padding-right: 5rem;
    text-align: center;
    width: 100%;
    position: absolute;
    left: 50%;
    color: #fcf6e9;
    top: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 0.0625rem 0.0625rem 0.1875rem #0F0A00;
`;

export const Dot = styled.div`
    border-radius: 50%;
    background: #bd9d52;
    height: 0.3rem;
    width: 0.3rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    ${({ bottom }) => bottom ? 'bottom: 7rem' : 'top: 7rem'};
`;

// Box five ********************************
export const FamilyDesc = styled.div`
    width: 100%;
    height: 30rem;
    color: #333333;
    padding: 0rem 2.8rem 3rem 3rem;
    font-size: 1.1rem;
    border-bottom: 0.0625rem solid #bd9d52;
`;

// Box six ********************************
export const BoxSix = styled.div`
    width: 100%;
    text-align: center;
    color: #0F0A00;
    font-size: 1.1rem;
    padding-top: 1.5rem;
    padding-bottom: 3rem;
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
    background-image: ${({ src }) => `url(${ src })`};
    background-size: cover;
    background-position: center center;
    transition: all 0.5s;
    position: relative;

    @media (max-width: 768px) { 
        width: 100%;
        height: 22rem;
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

    @media (max-width: 768px) { 
        bottom: ${({ up }) => up ? '0rem' : '0.5rem'};
    }
`;