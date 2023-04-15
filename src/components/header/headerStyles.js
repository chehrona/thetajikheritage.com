import styled from "styled-components";
import { Close, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const HeaderContainer = styled.div`
    background: #000000;
    height: 8em;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: #D5D5D5;
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6em;
    width: 6em;
    margin: 1em;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.8em;
`;

export const Title = styled.div`
    font-style: italic;
    font-weight: bold;
`;

export const TitleSpan = styled.span`
    font-style: normal;
    font-weight: bold;
    margin-right: 0.4em;
`;

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-left: 1em;
    height: 4em;
    width: 6em;
`;

export const StyledIconButton = styled(IconButton)`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const StyledMenuIcon = styled(Menu)`
    color: #D5D5D5;
    width: 2.5em !important;
    height: 1.5em !important;
`;

export const StyledCloseIcon = styled(Close)`
    color: #D5D5D5;
    width: 2.5em !important;
    height: 1.5em !important;
`;

export const Logo = styled.img`
    height: 100%;
    width: 100%;
`;