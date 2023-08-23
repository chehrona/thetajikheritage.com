import { IconButton } from "@mui/material";
import styled from "styled-components";
import khorLogo from "./images/khorasan.png";
import usLogo from "./images/united-states.png";
import ruLogo from "./images/russia.png";
import tjLogo from "./images/tajikistan.png";

export const FlagWrapper = styled.div`
    height: 2rem;
    width: 2.4rem;
    cursor: pointer;
    margin-bottom: 0.4rem;
`;

export const StyledFlag = styled.div`
    width: 1.25rem;
    border-radius: 50%;
    height: 1.25rem;
    filter: ${({hovered}) => hovered === "true" ? 'grayscale(0%)': 'grayscale(100%)'};
    background-size: 100%;
    background-image: ${({lang}) => lang === "kh" ? `url(${khorLogo})` :
                                    lang === "us" ? `url(${usLogo})` :
                                    lang === "ru" ? `url(${ruLogo})` :
                                    `url(${tjLogo})`};
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