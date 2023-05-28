import styled from "styled-components/macro";
import noise from "./noise.png";

export const PageContainer = styled.div`
    box-sizing: border-box;
    min-height: 37rem;
    box-shadow: 0 0 2rem grey;
    margin: 2rem;
    margin-left: 4.5rem;
    margin-right: 4.5rem;
`;

export const MainContainer = styled.div`
    background: #000;
    background-image: url(${noise});
    display: flex;
    justify-content: space-between;

    &:after {
        content: "";
        padding: 3rem;  
        width: 84%;
        background: white;
        -webkit-clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        top: 55.7rem;
    }
`;

export const FadedImage = styled.img`
    width: 50rem;
    height: auto;
    box-shadow: 6rem 6rem 4rem 4rem black inset;
    margin-top: -15rem;
`;

export const SegmentContainer = styled.div`
    color: white;
    margin: 5rem;
    margin-left: 8rem;
    font-size: 1.5rem;
    width: 100%;
    z-index: 1000;
    position: relative;
`;

export const SectionTitle = styled.div`
    line-height: 3rem;
`;

export const PoetName = styled.div`
    font-size: 8rem;
    font-weight: bold;
    font-style: italic;
    color: ${({color}) => color ? "rgb(51, 94, 120)" : "white"};
    margin-right: ${({color}) => color ? "2rem" : "0rem"};
    text-shadow: 0rem 0rem 5rem black;
`;

export const PoetNameContainer = styled.div`
    position: absolute;
    left: 8rem;
    bottom: -5rem;
    display: flex;
`;

export const YearsContainer = styled.div`
    color: white;
    font-size: 12rem;
    position: absolute;
    top: 12rem;
    left: 15.5rem;
    opacity: 0.2;
    font-weight: bold;
`;
export const Year = styled.div`
    margin-left: 8rem;
`;