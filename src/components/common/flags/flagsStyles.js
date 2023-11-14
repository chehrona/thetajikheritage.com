import { IconButton } from "@mui/material";
import styled from "styled-components";
import khorLogo from "./images/khorasan.png";
import usLogo from "./images/united-states.png";
import ruLogo from "./images/russia.png";
import tjLogo from "./images/tajikistan.png";

export const FlagWrapper = styled.div`
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    position: absolute;
    z-index: 100;
    left: 0.3rem;
    margin-bottom: 1rem;
    transition: bottom 0.1s;
    bottom: ${({ position }) => position && `-${position}px`};

    @media (max-width: 480px) {
        position: fixed;
        bottom: 0.25rem;
        left: 0.5rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 896px) {
        position: fixed;
        left: 0.75rem;
        bottom: 0.75rem;
    }
`;

export const StyledFlag = styled.div`
    width: 1.5rem;
    border-radius: 50%;
    height: 1.5rem;
    background-size: 100%;
    box-shadow: 0.05rem 0.05rem 0.8rem 0.05rem #0F0A00b2;
    background-image: ${({lang}) => 
        lang === "kh" ? `url(${khorLogo})` :
        lang === "us" ? `url(${usLogo})` :
        lang === "ru" ? `url(${ruLogo})` :
        `url(${tjLogo})`};

    @media (max-width: 480px) {
        height: 2rem;
        width: 2rem;
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 896px) {
        height: 2.25rem;
        width: 2.25rem;
    }
`;

export const FlagDropdown = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 0rem;
    margin: 0 auto;
`;

export const StyledIconButton = styled(IconButton)`
    &.MuiIconButton-root {
        height: 2.5rem;
        width: 2.5rem;
        margin-bottom: 0.25rem;
    }

    @media (max-width: 480px) {
        &.MuiIconButton-root {
            margin-bottom: 0.5rem;
        }
    }

    @media screen and (min-device-width: 481px) and (max-device-width: 896px) {
        &.MuiIconButton-root {
            margin-bottom: 1.25rem;
        }
    }
`;