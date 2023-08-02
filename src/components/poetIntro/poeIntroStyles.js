import styled from "styled-components/macro";

export const MainContainer = styled.div`
    background: #000;
    background-image: url(${'/noise.png'});
    display: flex;
    justify-content: space-between;
    position: relative;

    &:after {
        content: "";
        padding: 3rem;  
        width: 100%;
        background: white;
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        bottom: 0rem;
        box-sizing: border-box;
    }
`;

export const FadedImage = styled.img`
    width: 45rem;
    background-color: black;
    height: auto;
    box-shadow: 6rem 6rem 2rem 4rem #00000087 inset;
    border-radius: 5rem 0rem 0rem 5rem;
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
    -webkit-text-stroke-color: rgb(81 130 160);
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