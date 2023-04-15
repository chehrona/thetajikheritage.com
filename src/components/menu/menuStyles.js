import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    color: #D5D5D5;
    display: flex;
`;

export const Background = styled.div`
    min-width: 100%;
    min-height: calc(100vh - 7.95em);
    background: #000000;
    opacity: 0.8;
`;

export const LogoContainer = styled.div`
    padding-top: 2em;
    opacity: 0.5;
    position: absolute;
    left: 7em;
    top: 10em;
`

export const Logo = styled.img`
    border-radius: 50%;
    height: 35em;
    width: 35em;
`;

export const LogoHalf = styled.img`
    border-radius: 50%;
    height: 43em;
    width: 44.5em;
    position: absolute;
    top: 11em;
    z-index: 1;
    left: 5.25em;
`;

export const PageNamesContainer = styled.div`
    width: 35%;
    position: absolute;
    right: 0em;
    top: 7em;
    padding: 1em;
    padding-top: 0em;
    font-size: 1.8em;
`;

export const MenuItem = styled.div`
    width: 100%;
`;

export const PageName = styled.div`
    font-weight: bold;
    padding-top: 1em;
    cursor: pointer;
`;

export const PageDesc = styled.div`
    color: rgb(181 181 181);
    font-size: 0.8em;
    cursor: pointer;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`