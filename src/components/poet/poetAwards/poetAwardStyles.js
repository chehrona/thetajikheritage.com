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
    width: 9rem;
    height: 13rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: transparent;
    perspective: 62.5rem;
    box-shadow: -1px -0.25rem 0.3rem -0.3rem #0F0A00, 1px -2px 0.3rem -1px #0F0A00, 0rem 0.01rem 0.01rem #0F0A00;
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
`;

export const Title = styled.div`
    text-align: center;
    margin: 0.5rem;
`;

export const Subtitle = styled.div`
    text-align: center;
    margin: 0.5rem;
`;

export const Image = styled.img`
    width: 5.5rem;
    height: 9.2rem;
`;

export const Desc = styled.div`
    width: 100%;
    height: 100%;
    color: #dedbdb;
    line-height: 1.5rem;
`;

export const Gap = styled.div`
    height: 10rem;
`;

export const Year = styled.div`
    font-size: 3rem;
`;

export const StyledIconButton = styled(IconButton)`
    position: absolute !important;
    width: 3rem;
    height: 3rem;
    bottom: ${({ dialog }) => !dialog && "1rem"};
    top: ${({ dialog }) => dialog && "0rem"};
    right: ${({ dialog }) => dialog && "0rem"};
`;

export const StyledInfoIcon = styled(Info)`
    color: #ffffff;
    height: 2rem !important;
`;

export const StyledContent = styled(DialogContent)`
    background: linear-gradient(90deg, rgba(15, 10, 0, 0.90), rgba(15, 10, 0, 0.95), rgba(15, 10, 0, 0.98), rgba(15,10,0,1) 65%);
    border-radius: 2rem;
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    border-radius: 2rem;
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
    width: 3.5rem !important;
    height: 2.5rem !important;
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
    border: 0.15rem solid #bd9d52;
    background: #0F0A00;
    border-radius: 1rem;
    height: 15rem;
    width: 11rem;
    padding: 1rem;
    box-shadow: -1px -0.25rem 0.3rem -0.3rem #000, 1px -2px 0.3rem -1px #000, 0rem 0.05rem 0.01rem #000;
`;