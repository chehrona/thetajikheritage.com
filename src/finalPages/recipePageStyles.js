import styled from "styled-components";
import { Pinterest } from "@mui/icons-material";

export const PageContainer = styled.div`
    box-sizing: border-box;
    margin: 4.5rem;
`;

export const MainImage = styled.img`
    border-radius: 1rem;
    width: 100%;
    height: 100%;
`;

export const IntroSection = styled.div`
    display: flex;
    width: 100%;
`;

export const MainTitle = styled.div`
    font-size: 5rem;
`;

export const ImageContainer = styled.div`
    width: 30rem;
    height: 45rem;
    margin-right: 8rem;
`;

export const InfoContainer = styled.div`
    width: 42rem;
`;

export const HistoryInfo = styled.div`
    font-size: 1.2rem;
    margin-top: 2rem;
`;

export const AllergyContainer = styled.div`
    display: flex;
`;

export const ContainsBox = styled.div`
    
`;

export const StyledPinIcon = styled(Pinterest)`
    color: #e60022;
    position: absolute;
    left: 5rem;
    top: 13rem;
    font-size: 2em !important;
`;