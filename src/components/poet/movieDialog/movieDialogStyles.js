import styled from "styled-components";
import { Close, PlayArrow } from "@mui/icons-material";
import { IconButton, DialogContent } from "@mui/material";

export const Desc = styled.div`
    width: 100%;
    line-height: 1.5rem;
    text-align: justify;
    margin-top: 1.5rem;
    padding-right: 28%;
`;

export const StyledIconButton = styled(IconButton)`
    position: absolute !important;
    width: ${({ play }) => play ? "5.5rem" : "3rem"};
    height: ${({ play }) => play ? "5.5rem" : "3rem"};
    top: ${({ play }) => play ? "7rem" : "1.5rem"};
    background: ${({ play }) => play && "#504221d1 !important"};
    right: ${({ play }) => play ? "16%" : "1.6rem"};

    &:hover {
        background: ${({ play }) => play && "#504221 !important"};
    }
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
    border-radius: 2rem;
    background: #0F0A00;
    box-shadow: 0rem 0rem 0.3rem 0rem #dedbdb;
    display: flex;
`;

export const InnerBox = styled.div`
    width: ${({ width }) => width ? "32%" : "68%"};
    background: ${({ width }) => width ? "#0F0A00" : "#fcf6e9"};
    position: ${({ width }) => width && "relative"};
    border-radius: ${({ width }) => width ? "0rem 2.01rem 2.01rem 0rem" : "2.01rem 0rem 0rem 2.01rem"};
    padding: 2rem;
`;

export const StudioName = styled.img`
    height: 3rem;
    width: 5rem;
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
    height: 80%;
    width: 28%;
    box-shadow: 0rem 0rem 1rem 0.2rem #504221d1;
    position: absolute;
    top: 10.25%;
    left: 53%;
`;

export const ReleaseInfo = styled.div`
    display: flex;
    align-items: center;
    height: 4rem;
    width: 30rem;
    justify-content: space-between;
    padding-left: 2rem
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
    right: 4.65%;
    top: 23.44%;
`;

export const Line = styled.div`
    width: 4rem;
    background: #fcf6e9;
    height: 0.05rem;
    margin-right: 0.5rem;
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