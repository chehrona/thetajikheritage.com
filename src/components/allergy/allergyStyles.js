import styled from "styled-components";

export const AllergyContainer = styled.div`
    display: flex;
    margin-top: 4.3rem;
`;

export const ContainsBox = styled.div`
    background: rgb(244 225 225);
    border-radius: 1rem;
    padding: 0.8rem;
    padding-top: 0.5rem;
    min-width: 7rem;
`;

export const DietBox = styled.div`
    background: rgb(225 244 244);
    border-radius: 1rem;
    padding: 0.8rem;
    padding-top: 0.5rem;
    margin-left: 2rem;
    min-width: 7rem;
`;

export const LabelContainer = styled.div`
    margin-right: 1rem;
    text-align: center;

    &:last-child {
        margin-right: 0rem;
    }
`;

export const BoxTitle = styled.div`
    margin-bottom: 0.8rem;
    font-weight: 600;
    font-size: 1.2rem;
`;

export const LabelWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const LabelImage = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: white;
`;

export const AllergenName = styled.div`
    font-size: 0.85rem;
`;