import { Copyright } from "@mui/icons-material";
import styled from "styled-components";

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