import styled from "styled-components";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const DropDownContainer = styled.div`
    position: absolute;
    width: 45rem;
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
    background: black;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
`;

export const StyledDownIcon = styled(ExpandMore)`
    color: black;
`;

export const StyledUpIcon = styled(ExpandLess)`
    color: black;
`;

export const RefContainer = styled.div`
    background: #eaeaea;
    margin-top: 0.8rem;
    border-radius: 1rem;
    height: ${({open}) => open ? "12rem" : "0rem"};
    transition: all 0.5s linear 0s;
    overflow-y: scroll;
    display: block;
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
    margin-top: 0.5rem;
`;