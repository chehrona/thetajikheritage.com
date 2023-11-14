import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Menu } from "@mui/material";

export const StyledMenu = styled(Menu)`
    & .MuiPaper-root {
        color: #bd9d52;
        height: 100svh;
        max-height: 100svh;
        padding-top: 6rem;
        background: rgb(51 51 51);
        position: static;
    }

    & .MuiList-root {
        display: flex;
        padding: 3rem;
        justify-content: space-around;
        align-items: center;

        @media screen and (min-device-width: 481px) and (max-device-width: 896px) {
            padding: 10rem 10rem 15rem 5rem;
            flex-direction: column-reverse;
        }
    }
`;

export const LogoContainer = styled.div`
    opacity: 0.5;

    @media screen and (max-device-width: 480px) {
        display: none;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 896px) {
        opacity: 0.3;
        width: 100%;
        position: absolute;
        right: -53.1%;
        top: 50%;
        transform: translateY(-50%);
    }
`

export const Logo = styled.img`
    border-radius: 50%;
    height: 40rem;
    width: 40rem;

    @media screen and (min-device-width: 481px) and (max-device-width: 896px) {
        height: 60rem;
        width: 60rem;
    }
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
    position: relative;
    z-index: 1;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 480px) {
        justify-content: start;
        margin-top: 5rem;
        width: 100%;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 896px) {
        font-size: 2.5rem;
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
    font-size: 1.3rem;
    cursor: pointer;

    @media screen and (min-device-width: 481px) and (max-device-width: 896px) {
        font-size: 1.5rem;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;