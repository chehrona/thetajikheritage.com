import styled from "styled-components";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const DropDownContainer = styled.div`
    width: 100%;
    margin-bottom: 2rem;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.8rem;
    opacity: 0.4;

    &:hover {
        opacity: 1;
    }
`;

export const Line = styled.div`
    height: 0.1rem;
    width: 15rem;
    background: #dedbdb;
    margin-right: ${({right}) => right ? "0.3rem" : "0rem"};
    margin-left: ${({right}) => right ? "0rem" : "0.3rem"};
`;

export const StyledDownIcon = styled(ExpandMore)`
    color: #dedbdb;
`;

export const StyledUpIcon = styled(ExpandLess)`
    color: #dedbdb;
`;

export const RefContainer = styled.div`
    background: #fcf6e9;
    max-width: 100%;
    margin-top: 0.8rem;
    border-radius: 1rem;
    height: ${({open}) => open ? "15rem" : "0rem"};
    transition: all 0.5s linear 0s;
    overflow-y: scroll;
    display: block;
    color: #0F0A00;
    box-shadow: ${({open}) => open && '0rem 0rem 0.4rem 0.01rem #fcf6e9'};
`;

export const RefWrapper = styled.div`
    margin: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
`;

export const SubTitle = styled.div`
    font-size: 2rem;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-weight: 500;
    margin-bottom: 1rem;
`;

export const Reference = styled.div`
    font-size: 1.1rem;
    line-height: 1.7rem;
`;

export const RefBox = styled.div`
    display: flex;
    align-items: start;
    font-size: 1.1rem;
    line-height: 1.7rem;
`;

export const RefIndex = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`;