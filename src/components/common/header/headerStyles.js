import styled from "styled-components";
import { Close, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    background: #0F0A00;
    width: 100%;
`;

export const HeaderInnerBox = styled.div`
    background: #0F0A00;
    height: 6rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: #ffffff;
    position: relative;
    z-index: 1000;
    max-width: 1920px;
    margin: 0 auto;

    @media (max-width: 768px) {
        height: 5rem;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5.5rem;
    width: 5.5rem;
    margin-left: 1rem;

    @media (max-width: 768px) {
        margin-left: 0.5rem;
    }
`;

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-family: 'EB Garamond', serif;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const Title = styled.div`
    font-style: italic;
    font-weight: bold;
`;

export const TitleSpan = styled.span`
    font-style: normal;
    font-weight: bold;
    margin-right: 0.4rem;
    color: #bd9d52;
`;

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 4rem;
    width: 6rem;

    @media (max-width: 768px) {
        width: 4rem;
        margin-left: 0rem;
    }
`;

export const StyledIconButton = styled(IconButton)`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const StyledMenuIcon = styled(Menu)`
    color: #bd9d52;    

    &.MuiSvgIcon-root {
        width: 3.5rem;
        height: 2.5rem;
    }
`;

export const StyledCloseIcon = styled(Close)`
    color: #bd9d52;
    
    &.MuiSvgIcon-root {
        width: 3.5rem;
        height: 2.5rem;
    }
`;

export const Logo = styled.img`
    height: 100%;
    width: 100%;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;