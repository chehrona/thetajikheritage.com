import styled from "styled-components";

export const PageContainer = styled.div`
    box-sizing: border-box;
    min-height: 100vh;
    box-shadow: 0.8rem 0.5rem 0rem 0.08rem #504221d1;
    margin: 2rem 4.5rem 2rem 4.5rem;
    background-color: #fcf6e9;
    border-radius: 4rem;

    @media (max-width: 768px) { 
        margin: 1.2rem 2rem 1.2rem 1.2em;
    }
`;

export const RefContainer = styled.div`
    border-radius: 0rem 0rem 4rem 4rem;
    background: #fcf6e9;
    background-image: url(${'/noise.png'});
    padding: 3rem;
    padding-top: 0rem;

    @media (max-width: 768px) { 
        padding: 2rem;
        padding-top: 0rem;
    }
`;