import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    margin-bottom: 5rem;
    text-align: center;

    @media (max-width: 768px) {
        margin-bottom: 1.5rem;
        padding: 0rem 1.5rem 0rem 1.5rem;
    }
`;

export const InviteContainer = styled.div`
    font-family: 'Caveat', cursive;
    font-size: 2rem;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`;