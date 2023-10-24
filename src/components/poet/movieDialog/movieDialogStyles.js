import styled from "styled-components";
import { Close, PlayArrow } from "@mui/icons-material";
import { IconButton, DialogContent } from "@mui/material";

export const Desc = styled.div`
    width: 100%;
    line-height: 1.5rem;
    text-align: justify;
    margin-top: 1.5rem;
    padding-right: 25%;
`;

export const StyledIconButton = styled(IconButton)`
    width: 5.5rem;
    height: 5.5rem;

    &.MuiIconButton-root {
        background: #504221d1;

        &:hover {
            background: #504221;
        }
    }
`;

export const StyledCloseButton = styled(IconButton)`
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: 0.25rem;
    right: 0.3rem;
`;


export const StyledContent = styled(DialogContent)`
    border-radius: 2rem;
    position: relative;
    padding: 0.001rem;
    height: 20rem;
    color: #0F0A00;
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    background: #0F0A00;
    box-shadow: 0rem 0rem 0.3rem 0rem #dedbdb;
    display: flex;
`;

export const InnerBox = styled.div`
    width: ${({ width }) => width ? "35%" : "65%"};
    background: ${({ width }) => width ? "#0F0A00" : "#fcf6e9"};
    position: ${({ width }) => width && "relative"};
    border-radius: ${({ width }) => width ? "0rem 2.01rem 2.01rem 0rem" : "2.01rem 0rem 0rem 2.01rem"};
    padding: 2rem;
`;

export const StudioName = styled.img`
    height: 3rem;
`;

export const InfoTitle = styled.div`
    overflow-wrap: break-word;
    font-style: bold;
    font-size: 3.5rem;
    text-transform: uppercase;
    width: 30rem;
    margin-top: -0.8rem;
    font-family: 'EB Garamond', serif;
    text-shadow: 0.0625rem 0.0625rem 0.1875rem #504221e6;
`;

export const StyledCloseIcon = styled(Close)`
    color: #bd9d52;
    width: 3rem !important;
    height: 2rem !important;
`;

export const StyledPlayIcon = styled(PlayArrow)`
    color: #fcf6e9;
    width: 3rem !important;
    height: 3rem !important;
`;

export const MovieImg = styled.img`
    height: 85%;
    width: auto;
    box-shadow: 0rem 0rem 1rem 0.2rem #504221d1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
`;

export const ReleaseInfo = styled.div`
    display: flex;
    align-items: center;
    height: 4rem;
    width: 30rem;
    justify-content: space-around;
    padding-right: 2rem;
`;

export const InfoWrapper = styled.div`
    border: ${({ genre }) => genre && '1px solid #0F0A00'};
    box-shadow: ${({ genre }) => genre && '0rem 0rem 0.5rem 0.01rem #0F0A00'};
    width: ${({ year }) => year ? '5rem' : '10rem'};
    border-radius: 1.5rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    font-style: bold;
    margin-top: 3rem;
    margin-bottom: 3rem;
`;

export const Director = styled.div`
    width: 30rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: 'EB Garamond', serif;
    margin-top: 1.5rem;
    margin-bottom: 0.3rem;
`;

export const DirBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    position: absolute;
    right: 9%;
    top: 15%;
`;

export const Line = styled.div`
    width: 4rem;
    background: #fcf6e9;
    height: 0.05rem;
    margin-right: 1rem;
`;

export const Direction = styled.div`
    text-transform: uppercase;
    font-size: 1rem;
    color: #fcf6e9;
    font-family: 'EB Garamond', serif;
`;

export const StyledFrame = styled.iframe`
    width: 100%;
    border-radius: 2rem;
    padding: 5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const Loader = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: #202020
        url("/loader.svg") center
        no-repeat;
    z-index: 1;
    border-radius: 2rem;
    opacity: 0.7;
`;