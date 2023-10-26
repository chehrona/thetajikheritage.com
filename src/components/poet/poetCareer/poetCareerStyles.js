import styled from "styled-components/macro";
import { IconButton } from '@mui/material';

export const MainContainer = styled.div`
    background: #0F0A00;
    position: relative;
    background-image: url(${'/noise.png'});
    padding-bottom: 9rem;
    padding-top: 9rem;

    &:before {
        content: "";
        padding: 3rem;  
        width: 100%;
        background: #fcf6e9;
        background-image: url(${'/noise.png'});
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 0%, 0% 100%);
        clip-path: polygon(0 0, 100% 0%, 100% 0%, 0% 100%);
        position: absolute;
        top: -0.03rem;
        box-sizing: border-box;
    }

    @media (max-width: 768px) {
        padding-top: 7rem;
    }
`;

export const YearSlider = styled.div`
    padding: 2rem 5rem 2rem 5rem;
    height: 36rem;

    @media (max-width: 768px) {
        padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    }
`;

export const UnitWrapper = styled.div`
    width: 100%;
    position: relative;
    color: #fcf6e9;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const YearWrapper = styled.div`
    z-index: 1;
    background: #0F0A00;
    border-radius: 1.5rem;
    position: relative;
    background-image: url(${'/noise.png'});
    width: ${({ size }) => size ? "fit-content" : "0rem"};
    height: ${({ size }) => size ? "fit-content" : "0rem"};
    border: ${({ size }) => size ? "0.15rem" : "0.5rem"} solid #bd9d52;
`;

export const Year = styled.div`
    display: ${({ show }) => show && "none"};
    margin: 0.4rem 1rem 0.4rem 1rem;
`;

export const Line = styled.div`
    background: #bd9d52;
    height: 0.15rem;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const InfoContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    overflow: hidden;
    position: relative;
    height: 25rem;

    @media (max-width: 768px) {
        height: 30rem;
    }
`;

export const InfoInnerContainer = styled.div`
    position: absolute;
    display: flex;
    gap: 50px;

    @media (max-width: 768px) {
        position: relative;
        gap: 30px;
    }
`;

export const InfoWrapper = styled.div`
    height: 25rem;
    min-width: 800px;
    max-width: 800px;
    background: #fcf6e9;
    border-radius: 1rem;
    display: flex;
    transition: all 0.5s;
    transform: translateX(${({ translate }) => `${translate}px`});

    @media (max-width: 768px) {
        display: block;
        height: 30rem;
        min-width: calc(100vw - 3rem);
        max-width: calc(100vw - 3rem);
        height: 29rem;
    }
`;

export const DescWrapper = styled.div`
    width: 65%;
    height: 100%;
    border-radius: 1rem;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Desc = styled.div`
    padding: 2rem 3rem;
    font-size: 1.1rem;
    line-height: 2rem;
    text-align: justify;

    @media (max-width: 768px) {
        padding: 1.5rem;
        font-size: 1.3rem;

        .imgDesc {
            display: none;
        }
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #fcf6e9;
    border-radius: 0rem 0rem 1rem 1rem;
    position: absolute;
    bottom: 0.5rem;
    right: 0rem;

    @media (max-width: 768px) {
        width: calc(100vw - 3rem);
        right: auto;
        bottom: 0rem;
    }
`;

export const Step = styled.div`
    width: 5rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-family: "EB Garamond", serif;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const StyledIconButton = styled(IconButton)`
    height: 2rem;
    width: 2rem;
    transform: ${({ left }) => left && 'rotate(180deg)'};

    svg {
        fill: #bd9d52;
    }

    &:disabled {
        svg {
            fill: lightgray;
        }
    }

    @media (max-width: 768px) {
        height: 4rem;
        width: 4rem;

        svg {
            font-size: 2rem;
        }
    }
`;

export const Image = styled.img`
    height: 100%;
    width: 35%;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    transition: 100ms ease-in-out;
    background: grey
        url("/loader.svg") center
        no-repeat;
    
    @media (max-width: 768px) {
        display: none;
    }
`;