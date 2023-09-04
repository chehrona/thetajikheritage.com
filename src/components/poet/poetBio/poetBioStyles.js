import styled from "styled-components";
import { IconButton } from '@mui/material';

export const MainContainer = styled.div`
    background-image: url(${'/noise.png'});
    min-height: fit-content;
    padding-bottom: 6rem;
`;

// Box one ****************************
export const BoxOne = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    color: #0F0A00;
`;

export const LeftWrapper = styled.div`
    height: 100%;
    padding-left: 5rem;
    padding-right: 3rem;
    padding-top: ${({ half }) => half && '0rem'};
    width: ${({ half }) => half ? '50%' : '60%'};
    position: relative;
    border-bottom: ${({ half }) => half && '0.0625rem solid #bd9d52'};
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

export const Image = styled.img`
    height: 100%;
    width: 100%;
    filter: ${({ color }) => !color && 'grayscale(1)'};
`;

export const ImageDesc = styled.div`
    margin-left: 2rem;
    margin-top: -2rem;
    font-size: 1rem;
    font-style: italic;
`;

export const RightWrapper = styled.div`
    margin-right: ${({ half }) => half ? '0rem' : '5rem'};
    margin-top:  ${({ half }) => half ? '0rem' : '2rem'};
    width: ${({ half }) => half ? '50%' : '40%'};
`;

// Box two ****************************
export const BoxTwo = styled.div`
    margin-top: 6rem;
    margin-bottom: 10rem;
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
        show ? '-0.3rem 0rem 0.3rem -0.2rem #dedbdb, 0.3rem 0rem 0.3rem -0.2rem #dedbdb' : '0rem 0rem 1rem 0.2rem #504221e6'};
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
    line-height: 1.5rem;
`;

// Box three ****************************
export const BoxThree = styled.div`
    margin-top: 3rem;
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
`;

// Box four *****************************
export const BoxFour = styled.div`
    min-height: 20rem;
    width: 100%;
    position: relative;
    margin-top: 5rem;
    color: #fcf6e9;
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
export const BoxFive = styled.div`
    min-height: 20rem;
    width: 100%;
    color: #0F0A00;
    display: flex;
`;

export const FamilyDesc = styled.div`
    width: 100%;
    height: 30rem;
    color: #333333;
    margin-right: 3rem;
    font-size: 1.1rem;
    padding-bottom: 3rem;
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
`;

export const RightContainer = styled.div`
    width: 50%;
    height: 30rem;
    background: #0F0A00;
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