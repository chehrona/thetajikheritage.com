import { IconButton } from "@mui/material";
import { CircleFlag } from "react-circle-flags";
import styled from "styled-components";

export const FlagWrapper = styled.div`
    height: 2em;
    width: 2.4em;
    cursor: pointer;
    margin-bottom: 0.4em;
`;

export const StyledFlag = styled(CircleFlag)`
    width: 0.8em;
    height: 0.8em;
    filter: ${({hovered}) => hovered === "true" ? 'grayscale(0%)': 'grayscale(100%)'};
`

export const StyledKhorImg = styled.img`
    width: 0.8em;
    border-radius: 50%;
    height: 0.8em;
    filter: ${({hovered}) => hovered === "true" ? 'grayscale(0%)': 'grayscale(100%)'};
`;

export const FlagDropdown = styled.div`
    position: absolute;
    bottom: 14em;
    left: 0em;
    margin: 0 auto;
`;

export const StyledIconButton = styled(IconButton)`
    padding: 0.4em !important;
`;