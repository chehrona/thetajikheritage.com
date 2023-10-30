import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem 2rem 1rem;

    @media (max-width: 768px) {
        padding: 1rem 1.5rem 2rem 1.5rem;
        font-size: 1.3rem;
    }
`;

export const QuantityContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 4.7rem;
`;

export const StyledAddIcon = styled(Add)`
    background: #504221d1;
    border-radius: 0.5rem;
    color: #fff;
    box-shadow: 0rem 0rem 0.25rem 0.01rem #504221;

    &.MuiSvgIcon-root {
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        &.MuiSvgIcon-root {
            font-size: 2.5rem;
        }
    }
`;

export const ServeAmount = styled.input`
    width: 3rem;
    height: 2rem;
    outline: none;
    font-size: 1.1rem;
    padding: 0.2rem;
    text-align: center;
    font-family: 'IBM Plex Serif', serif;

    @media (max-width: 768px) {
        width: 3.5rem;
        height: 2.5rem;
        font-size: 1.3rem;
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
`;

export const StyledMinusIcon = styled(Remove)`
    background: #504221d1;
    border-radius: 0.5rem;
    color: #fff;
    box-shadow: 0rem 0rem 0.25rem 0.01rem #504221;

    &.MuiSvgIcon-root {
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        &.MuiSvgIcon-root {
            font-size: 2.5rem;
        }
    }
`;

export const SubTitle = styled.div`
    padding-bottom: 0.8rem;
    font-weight: 600;
    font-size: 1.2rem;
    color: #000;

    @media (max-width: 768px) {
        padding-bottom: 0rem;
        font-size: 1.3rem;
    }
`;

export const ServeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.3rem;

    @media (max-width: 768px) {
        margin-top: 1rem;
    }
`;

export const TimeBox = styled.div`
    margin-top: 2rem;
    font-size: 1.2rem;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`;

export const PrintContainer = styled.div`
    padding-top: 0.5rem;
    text-align: center;
    margin: 0rem 1rem 0rem 2rem;
`;

export const PrintBox = styled.img`
    width: 1.8rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;