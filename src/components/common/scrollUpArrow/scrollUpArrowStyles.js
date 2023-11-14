import styled from "styled-components";
import { IconButton } from "@mui/material";

export const MainContainer = styled.div`
    position: fixed;
    bottom: 8rem;
    right: 1.95rem;
    height: 5rem;
    width: 5rem;
    z-index: 1000;

    @media (max-width: 896px) {
        display: none;
    }
`;

export const StyledIconButton = styled(IconButton)`
    width: 3.5rem;
    height: 3.5rem;

    @media (max-width: 480px) {
        width: 5.5rem;
        height: 5.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 896px) {
        width: 4.5rem;
        height: 4.5rem;
    }
`;

export const Arrow = styled.div`
    color: #bd9d52;
    height: 100%;
    width: 100%;
    border: 0.0625rem solid #bd9d52;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;