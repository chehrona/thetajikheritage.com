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

export const MenuContainer = styled.div`
    width: 100%;
    overflow: hidden;
    color: #bd9d52;
    display: flex;
    align-items: center;
    padding: 3rem;
    justify-content: space-around;
    background: rgb(51 51 51);
    height: calc(100vh - 6rem);
    transform: translateY(-100%);
    animation-name: ${({ open }) => (open && open !== null) && openAnimation};
    animation-name: ${({ open }) => (!open && open !== null) && closeAnimation};
    animation-duration: 700ms;
    animation-fill-mode: both;
    position: absolute;
    z-index: 100;

    @media (max-width: 768px) {
        height: calc(100svh - 5rem);
    }
`;

export const LogoContainer = styled.div`
    opacity: 0.5;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Logo = styled.img`
    border-radius: 50%;
    height: 40rem;
    width: 40rem;
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
    width: 40%;
    height: 100%;
    gap: 2rem;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        justify-content: start;
        margin-top: 5rem;
        width: 100%;
    }
`;

export const MenuItem = styled.div`
    width: 100%;
`;

export const PageName = styled.div`
    font-weight: bold;
    font-style: italic;
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