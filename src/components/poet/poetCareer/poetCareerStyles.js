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
`;

export const YearSlider = styled.div`
    padding: 2rem 5rem 2rem 5rem;
    height: 36rem;
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
    width: ${({ size }) => size ? "fit-content" : "0rem"};
    height: ${({ size }) => size ? "fit-content" : "0rem"};
    background: #0F0A00;
    border-radius: 1.5rem;
    border: ${({ size }) => size ? "0.15rem" : "0.5rem"} solid #bd9d52;
    position: relative;
    background-image: url(${'/noise.png'});
    z-index: 1;
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
`;

export const InfoInnerContainer = styled.div`
    position: absolute;
    display: flex;
    gap: 50px;
`;

export const InfoWrapper = styled.div`
    height: 25rem;
    min-width: 800px;
    max-width: 800px;
    background: #fcf6e9;
    border-radius: 1rem;
    display: flex;
    transform: translateX(${({ translate }) => `${translate}px`});
    transition: all 0.5s;
`;

export const DescWrapper = styled.div`
    width: 65%;
    height: 100%;
    border-radius: 1rem;
    position: relative;
`;

export const Desc = styled.div`
    padding: 2rem 3rem;
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: justify;
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
`;

export const Step = styled.div`
    width: 5rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-family: "EB Garamond", serif;
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
`;