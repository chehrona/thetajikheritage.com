import styled from "styled-components";
import { ExpandMore } from "@mui/icons-material";

export const DropDownContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
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