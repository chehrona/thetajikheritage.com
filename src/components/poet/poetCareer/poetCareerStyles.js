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
    height: 100%;
`;

export const UnitWrapper = styled.div`
    width: 100%;
    position: relative;
    color: #fcf6e9;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* overflow-x: scroll; */
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
    background-color: red;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
`;

export const InfoWrapper = styled.div`
    height: 25rem;
    width: ${({ main }) => main ? "70%" : "10%"};
    background-color: yellow;
`;

export const DescWrapper = styled.div`
    height: 90%;
    width: 100%;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 100%;
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
`;

export const Image = styled.img`
    height: 100%;
    width: 50%;
`;