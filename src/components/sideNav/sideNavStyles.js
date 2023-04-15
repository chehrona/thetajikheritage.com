import { IconButton } from "@mui/material";
import styled from "styled-components";

export const SideNavContainer = styled.div`
    height: 14em;
    width: 2.4em;
    position: fixed;
    left: 1em;
    bottom: 0em;
    z-index: 1;
`;

export const StyledIcon = styled.img`
    width: 0.8em;
    filter: brightness(150%);
    border-radius: ${({rad}) => rad ? '100%': '0%'};
    height: 0.8em;
    filter: ${({hovered}) => hovered === "true" ? 'grayscale(0%)': 'grayscale(100%)'};
`;

export const StyledIconButton = styled(IconButton)`
    padding: 0.4em !important;
`;

export const Divider = styled.div`
    width: 0.15em;
    height: 5em;
    margin-top: 0.2em;
    margin-left: 1.125em;
    background: #757575;
`;