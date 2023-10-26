import styled from "styled-components/macro";

export const PageContainer = styled.div`
    box-sizing: border-box;
    min-height: 100vh;
    background-color: white;
    padding: 1rem;
    
    @media (max-width: 768px) {
        margin: 0rem;
        padding: 0rem;
    }
`;

export const PoetContainer = styled.div`
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem #504221d1;
    border-radius: 4rem;
    margin: 1rem 3.5rem 1.5rem 3.5rem;
    background: #fcf6e9;

    @media (max-width: 768px) {
        margin: 0rem;
        border-radius: 0rem;
        box-shadow: 0rem 0rem 0rem 0rem;
    }
`;

export const RefContainer = styled.div`
    border-radius: 0rem 0rem 4rem 4rem;
    background: #fcf6e9;
    background-image: url(${'/noise.png'});
    padding: 3rem;
    padding-top: 0rem;

    @media (max-width: 768px) {
        border-radius: 0rem 0rem 2rem 2rem;
        padding: 0rem 1rem 1rem 1rem;
    }
`;