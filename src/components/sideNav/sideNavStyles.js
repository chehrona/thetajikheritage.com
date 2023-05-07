import { IconButton } from "@mui/material";
import styled from "styled-components";
import mailIcon from "./icons/mail.png";

export const SideNavContainer = styled.div`
    height: 14rem;
    width: 2.4rem;
    position: fixed;
    left: 1rem;
    bottom: 0;
    z-index: 1;
`;

export const StyledIcon = styled.img`
    width: 1.20rem;
    filter: brightness(150%);
    border-radius: ${({rad}) => rad ? '100%': '0%'};
    height: 1.20rem;
    filter: ${({hovered}) => hovered === "true" ? 'grayscale(0%)': 'grayscale(100%)'};
`;

export const StyledIconButton = styled(IconButton)`
    padding: 0.6rem !important;
`;

export const Divider = styled.div`
    width: 0.125rem;
    height: 6rem;
    margin-top: 0.2rem;
    margin-left: 1.15rem;
    background: #757575;
`;