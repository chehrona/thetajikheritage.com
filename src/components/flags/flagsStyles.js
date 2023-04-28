import { IconButton } from "@mui/material";
import { CircleFlag } from "react-circle-flags";
import styled from "styled-components";

export const FlagWrapper = styled.div`
    height: 2rem;
    width: 2.4rem;
    cursor: pointer;
    margin-bottom: 0.4rem;
`;

export const StyledFlag = styled(CircleFlag)`
    width: 1.25rem;
    height: 1.25rem;
    filter: ${({hovered}) => hovered === "true" ? 'grayscale(0%)': 'grayscale(100%)'};
`

export const StyledKhorImg = styled.img`
    width: 1.25rem;
    border-radius: 50%;
    height: 1.25rem;
    filter: ${({hovered}) => hovered === "true" ? 'grayscale(0%)': 'grayscale(100%)'};
`;

export const FlagDropdown = styled.div`
    position: absolute;
    bottom: 14rem;
    left: 0rem;
    margin: 0 auto;
`;

export const StyledIconButton = styled(IconButton)`
    padding: 0.6rem !important;
`;