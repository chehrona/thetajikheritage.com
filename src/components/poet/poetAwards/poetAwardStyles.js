import styled from "styled-components";
import { Info } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const MainContainer = styled.div`
    background: #fcf6e9;
    background-image: url(${'/noise.png'});
    color: white;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    padding-top: 2rem;
    border-radius: 0rem 0rem 4rem 4rem;

    &:before {
        content: "";
        padding: 3rem;  
        width: 100%;
        background: #fcf6e9;
        background-image: url(${'/noise.png'});
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        top: -5.99rem;
        box-sizing: border-box;
    }
`;

export const AwardCard = styled.div`
    width: 10rem;
    height: 14.1rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: transparent;
    perspective: 62.5rem;
    box-shadow: 0rem 0rem 0.5rem 0.1rem #0F0A00;

    &&&:first-child {
        margin-left: 3rem;
    }

    &&&:last-child {
        margin-right: 3rem;
    }
`;

export const InnerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    ${AwardCard}:hover & {
        transform: rotateY(180deg);
    }
`;

export const Face = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: ${({ back }) => back && "rotateY(180deg)"};
    background: ${({ back }) => back ? "#504221d1" : "#0F0A00"};
    background-image: ${({ back }) => back && "url(${'/noise.png'})"};
    border-radius: 1rem;
    padding: 0.8rem;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 1.2rem;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Year = styled.div`
    font-size: 3rem;
`;

export const StyledIconButton = styled(IconButton)`
    position: absolute !important;
    width: 3rem;
    height: 3rem;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
`;

export const StyledInfoIcon = styled(Info)`
    color: #ffffff;
    height: 2.3rem !important;
    width: 2.3rem !important;
`;