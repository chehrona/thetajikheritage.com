import styled from "styled-components";
import { Pinterest } from "@mui/icons-material";

export const PageContainer = styled.div`
    box-sizing: border-box;
    margin: 5rem;
`;

export const MainImage = styled.img`
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const IntroSection = styled.div`
    display: flex;
    width: 100%;
    margin-top: 2rem;
`;

export const ImageContainer = styled.div`
    width: 30rem;
    height: 45rem;
    margin-right: 3rem;
    margin-bottom: 2.23rem;
    float: left;
`;

export const InfoContainer = styled.div`
    width: 45rem;
`;

export const StyledPinIcon = styled(Pinterest)`
    color: #e60022;
    position: absolute;
    left: 5.5rem;
    top: 13.5rem;
    font-size: 2em !important;
`;

export const InstructionContainer = styled.div`
    display: flex;
    align-items: start;
    margin-top: 3rem;
    height: ${({height}) => height};
`;