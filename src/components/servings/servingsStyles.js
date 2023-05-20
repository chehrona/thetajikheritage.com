import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    margin-bottom: 2rem;
    min-height: 9rem;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
`;

export const QuantityContainer = styled.div`
    text-align: center;
    padding-top: 0.5rem;
`;

export const StyledAddIcon = styled(Add)`
    background: #eaeaea;
    border-radius: 0.5rem;
    color: black;
    font-size: 2rem !important;
`;

export const ServeAmount = styled.input`
    width: 3rem;
    height: 2rem;
    outline: none;
    font-size: 1.1rem;
    padding: 0.2rem;
    text-align: center;
    font-family: 'IBM Plex Serif', serif;
`;

export const StyledMinusIcon = styled(Remove)`
    background: #eaeaea;
    border-radius: 0.5rem;
    color: black;
    font-size: 2rem !important;
`;

export const SubTitle = styled.div`
    margin-bottom: 0.8rem;
    font-weight: 600;
    font-size: 1.2rem;
`;

export const ServeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.3rem;
`;

export const TotalContainer = styled.div`
    padding-top: 0.5rem;
    margin-left: 2rem;
    text-align: center;
    width: fit-content;
    min-width: 4.7rem;
`;

export const TimeBox = styled.div`
    margin-top: 2rem;
    font-size: 1.2rem;
`;

export const PrintContainer = styled.div`
    padding-top: 0.5rem;
    text-align: center;
    margin-left: 2rem;
    margin-right: 1rem;
`;

export const PrintBox = styled.img`
    width: 1.8rem;
`;