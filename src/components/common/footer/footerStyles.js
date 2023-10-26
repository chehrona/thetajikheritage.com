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

    @media (max-width: 768px) {
        margin-left: -15%;
        font-size: 1.3rem;
    }
`;

export const SocialsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 1rem;
    flex-direction: row;
    gap: 0.5rem;

    @media (max-width: 768px) {
        gap: 0rem;
        right: 0rem;
    }
`;

export const StyledIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    filter: brightness(150%) grayscale(100%);
    border-radius: ${({rad}) => rad ? '100%': '0%'};

    &:hover {
        filter: grayscale(0%);
    }
`;

export const StyledIconButton = styled(IconButton)`
    padding: 0.6rem !important;
`;
