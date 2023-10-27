import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const openAnimation = keyframes`
    to {
        transform: translateY(0%)
    }
`;

const closeAnimation = keyframes`
    from {
        transform: translateY(0%)
    }    
    to {
        transform: translateY(-100%)
    }
`;
 
const fadeInAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const MenuContainer = styled.div`
    width: 100%;
    overflow: hidden;
    color: #bd9d52;
    display: flex;
    padding: 3rem;
    justify-content: center;
    background: rgb(51 51 51);
    height: calc(100vh - 6rem);
    transform: translateY(-100%);
    animation-name: ${({ open }) => (open && open !== null) && openAnimation};
    animation-name: ${({ open }) => (!open && open !== null)  && closeAnimation};
    opacity: ${({ open }) => (!open && open !== null) && '0'};
    animation-duration: 1s;
    animation-fill-mode: both;
    position: absolute;
    z-index: 100;

    @media (max-width: 768px) {
        height: calc(100svh - 5rem);
    }
`;

export const LogoContainer = styled.div`
    opacity: 0.5;
    margin-right: 12%;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Logo = styled.img`
    border-radius: 50%;
    height: 35em;
    width: 35em;
    color: black;
`;

export const LogoHalf = styled.img`
    border-radius: 50%;
    height: 43em;
    width: 44.5em;
    position: absolute;
    top: 11em;
    left: 5.25em;
`;

export const PageNamesContainer = styled.div`
    width: 35%;
    padding: 1em;
    padding-top: 0em;
    font-size: 2em;
    animation: ${fadeInAnimation};
    animation-fill-mode: forwards;
    animation-delay: 2s;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0rem;
        align-items: center;
    }
`;

export const MenuItem = styled.div`
    width: 100%;
`;

export const PageName = styled.div`
    font-weight: bold;
    font-style: italic;
    padding-top: 1em;
    cursor: pointer;
    font-family: 'EB Garamond', serif;
`;

export const PageDesc = styled.div`
    color: #dedbdb;
    font-size: 0.65em;
    cursor: pointer;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;