import styled from "styled-components";
import { Close } from "@mui/icons-material";
import { IconButton, DialogContent } from "@mui/material";

export const Desc = styled.div`
    width: 100%;
    height: 100%;
    color: #0F0A00;
    line-height: 1.5rem;
    text-align: center;
`;

export const StyledIconButton = styled(IconButton)`
    position: absolute !important;
    width: 3rem;
    height: 3rem;
    top: 1.5rem;
    right: 1.6rem;
`;

export const StyledContent = styled(DialogContent)`
    border-radius: 1.5rem;
    position: relative;
    padding: 0.001rem;
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 1.5rem;
    background: #fcf6e9;
    box-shadow: 0rem 0rem 0.3rem 0rem #0F0A00;
    padding: 0.5rem;
`;

export const InfoTitle = styled.div`
    color: #000000;
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: 2rem;
    font-family: 'EB Garamond', serif;
`;

export const StyledCloseIcon = styled(Close)`
    color: #bd9d52;
    width: 3rem !important;
    height: 2rem !important;
`;

export const BodyContainer = styled.div`
    display: flex;
    margin: 1rem;
`;