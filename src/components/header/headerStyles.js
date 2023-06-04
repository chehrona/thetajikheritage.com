import styled from "styled-components/macro";
import { Close, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    background: #000000;
    height: 6rem;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: #dedbdb;
    position: relative;
    z-index: 1000;
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5.5rem;
    width: 5.5rem;
    margin-left: 1rem;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-family: 'EB Garamond', serif;
`;

export const Title = styled.div`
    font-style: italic;
    font-weight: bold;
`;

export const TitleSpan = styled.span`
    font-style: normal;
    font-weight: bold;
    margin-right: 0.4rem;
`;

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-left: 1rem;
    height: 4rem;
    width: 6rem;
`;

export const StyledIconButton = styled(IconButton)`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const StyledMenuIcon = styled(Menu)`
    color: #dedbdb;
    width: 3.5rem !important;
    height: 2.5rem !important;
`;

export const StyledCloseIcon = styled(Close)`
    color: #dedbdb;
    width: 3.5rem !important;
    height: 2.5rem !important;
`;

export const Logo = styled.img`
    height: 100%;
    width: 100%;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`