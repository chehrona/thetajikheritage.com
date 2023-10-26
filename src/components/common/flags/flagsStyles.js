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
    position: fixed;
    left: 0.5rem;
    bottom: 1rem;
    z-index: 1000;

    @media (max-width: 768px) {
        left: 0rem;
    }
`;

export const StyledFlag = styled.div`
    width: 1.5rem;
    border-radius: 50%;
    height: 1.5rem;
    box-shadow: 0.05rem 0.05rem 0.8rem 0.05rem #0F0A00b2;
    background-size: 100%;
    background-image: ${({lang}) => lang === "kh" ? `url(${khorLogo})` :
                                    lang === "us" ? `url(${usLogo})` :
                                    lang === "ru" ? `url(${ruLogo})` :
                                    `url(${tjLogo})`};

    @media (max-width: 768px) {
        height: 2rem;
        width: 2rem;
    }
`;

export const FlagDropdown = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 0rem;
    margin: 0 auto;
`;

export const StyledIconButton = styled(IconButton)`
    padding: 0.6rem !important;
`;