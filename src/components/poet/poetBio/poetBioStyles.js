import styled from "styled-components";
import { IconButton } from '@mui/material';

export const MainContainer = styled.div`
    background-image: url(${'/noise.png'});
    min-height: fit-content;
    padding-bottom: 6rem;
`;

export const BoxOne = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LeftWrapper = styled.div`
    height: 100%;
    padding-left: 5rem;
    padding-right: 3rem;
    padding-top: 2rem;
`;

export const Year = styled.div`
    font-size: 2.2rem;
    font-family: "EB Garamond", serif;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: ${({ align }) => align && 'center'};
`;

export const Desc = styled.div`
    font-size: 1.1rem;
`;

export const Image = styled.img`
    height: 100%;
    width: 35rem;
    filter: grayscale(1);
`;

export const RightWrapper = styled.div`
    padding-right: 5rem;
    padding-top: 2rem;
`;

export const BoxTwo = styled.div`
    margin-top: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const InnerOverlay = styled.div`
    background: #0f0a00;
    margin-top: 4rem;
    height: 45rem;
    width: 100%;
    overflow: hidden;
    filter: grayscale(1);
`;

export const Backdrop = styled.div`
    height: 45rem;
    width: 100%;
    background-size: cover;
    opacity: 0.15;
    filter: grayscale(1);
    background-image: ${({ backdrop }) => `url(${ backdrop })`};
`;

export const Slides = styled.div`
    position: absolute;
    left: 10%;
    top: -3.2rem;
    z-index: 1;
`;

export const SlideImg = styled.img`
    width: 20rem;
    display: block;
    filter: grayscale(1) ${({ show }) => show ? 'brightness(100%)': 'brightness(40%)'};
    box-shadow: ${({ show }) => show && '-0.3rem 0rem 0.3rem -0.2rem #dedbdb, 0.3rem 0rem 0.3rem -0.2rem #dedbdb'};
    margin-right: 3rem;
    position: relative;
    top: ${({ y }) => y && `${y}rem`};
    transition: all 0.5s;
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
    background: #bd9d5282;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: ${({ bottom }) => bottom && '0rem'};
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
    border: 0.125rem solid #bd9d52;
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
    align-items: start;
    height: 20rem;
    width: 100%;
    padding-right: 3rem;
`;

export const Text = styled.div`
    text-align: justify;
    font-size: 1.1rem;
    line-height: 1.5rem;
`;