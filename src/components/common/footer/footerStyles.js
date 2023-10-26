import { Copyright } from "@mui/icons-material";
import styled from "styled-components";
import { IconButton } from "@mui/material";

export const FooterContainer = styled.div`
    background: #0F0A00;
    width: 100%;
`;

export const FooterInnerContainer = styled.div`
    background: #0F0A00;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: #ffffff;
    justify-content: center;
    max-height: 4.23rem;
    min-height: 4.23rem;
    position: relative;
    z-index: 10;
`;

export const StyledCopyrightIcon = styled(Copyright)`
    margin-right: 0.5rem;
`;

export const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SocialsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
