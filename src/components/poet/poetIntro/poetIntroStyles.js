import styled from "styled-components/macro";

export const MainContainer = styled.div`
    background: #0F0A00;
    background-image: url(${'/noise.png'});
    display: flex;
    justify-content: space-between;
    position: relative;
    border-radius: 4rem;

    &:after {
        content: "";
        padding: 3rem;  
        width: 100%;
        background: #fcf6e9;
        background-image: url(${'/noise.png'});
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        bottom: -0.01rem;
        box-sizing: border-box;
    }
`;

export const FadedImage = styled.img`
    width: 45rem;
    background-color: #0F0A00;
    height: auto;
    box-shadow: 6rem 6rem 2rem 4rem #0F0A00 inset;
    border-radius: 5rem 4rem 0rem 5rem;
`;

export const SegmentContainer = styled.div`
    margin: 5rem;
    margin-left: 5rem;
    font-size: 1.5rem;
    width: 100%;
    z-index: 10;
    position: relative;
`;

export const SectionTitle = styled.a`
    line-height: 3rem;
    color: #dedbdb;
    text-decoration: none;
    display: block;
    
    &:hover {
        text-shadow: 0rem 0rem 2rem #dedbdb;
        font-size: 1.6rem;
        cursor: pointer;
    }
`;

export const PoetName = styled.div`
    font-size: 8rem;
    font-weight: bold;
    font-style: italic;
    color: ${({color}) => color === 'true' ? "transparent" : "#dedbdb"};
    margin-right: ${({color}) => color === 'true' ? "2rem" : "0rem"};
    text-shadow: 0rem 0rem 5rem black;
    -webkit-text-stroke-width: ${({color}) => color === 'true' && '0.22rem'};
    -webkit-text-stroke-color: #bd9d52;
`;

export const PoetNameContainer = styled.div`
    position: absolute;
    left: 5rem;
    bottom: 6rem;
    display: flex;
`;

export const YearsContainer = styled.div`
    color: #dedbdb;
    font-size: 10rem;
    position: absolute;
    top: 4rem;
    left: 14rem;
    opacity: 0.25;
    font-weight: bold;
`;
export const Year = styled.div`
    margin-left: 9rem;
`;