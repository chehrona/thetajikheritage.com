import styled from "styled-components";
import { Info, Close } from "@mui/icons-material";
import { IconButton, DialogContent } from "@mui/material";

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

export const Desc = styled.div`
    width: 100%;
    height: 100%;
    color: #dedbdb;
    line-height: 1.5rem;
`;

export const Year = styled.div`
    font-size: 3rem;
`;

export const StyledIconButton = styled(IconButton)`
    position: absolute !important;
    width: 3rem;
    height: 3rem;
    bottom: ${({ dialog }) => !dialog && "1rem"};
    top: ${({ dialog }) => dialog && "1.5rem"};
    right: ${({ dialog }) => dialog && "1.6rem"};
    left: ${({ dialog }) => !dialog && "50%"};
    transform: ${({ dialog }) => !dialog && "translateX(-50%)"};
`;

export const StyledInfoIcon = styled(Info)`
    color: #ffffff;
    height: 2.3rem !important;
    width: 2.3rem !important;
`;

export const StyledContent = styled(DialogContent)`
    border-radius: 2rem;
    position: relative;
    padding: 0.001rem;
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    background: linear-gradient(90deg, rgba(15, 10, 0, 0.90), rgba(15, 10, 0, 0.95), rgba(15, 10, 0, 0.98), rgba(15,10,0,1) 65%);
    box-shadow: 0rem 0rem 0.3rem 0rem #dedbdb;
    padding: 0.5rem;
`;

export const InfoTitle = styled.div`
    color: #ffffff;
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: 2rem;
    font-family: 'EB Garamond', serif;
`;

export const StyledCloseIcon = styled(Close)`
    color: #bd9d52;
    width: 3rem !important;
    height: 2rem !important;
`;

export const BodyContainer = styled.div`
    display: flex;
    margin: 1rem;
`;

export const Wrapper = styled.div`
    width: ${({ first }) => first ? "25%" : "75%"};
    height: 100%;
`;

export const AwardImg = styled.img`
    border: 0.08rem solid #bd9d52;
    background: #0F0A00;
    border-radius: 1rem;
    height: 15rem;
    width: 11rem;
    padding: 1rem;
    box-shadow: 0rem 0rem 1rem 0.2rem #504221d1;
    background-image: url(${'/noise.png'});
`;