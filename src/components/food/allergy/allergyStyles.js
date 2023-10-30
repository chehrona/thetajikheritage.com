import styled from "styled-components";

export const AllergyContainer = styled.div`
    width: 100%;
    display: flex;
    color: #ffffff;
    justify-content: space-between;
    gap: 0.5rem;

    @media (max-width: 768px) {
        padding: 0rem 1.5rem;
    }
`;

export const ContentBox = styled.div`
    min-width: 7rem;
    border-radius: 1rem;
    background: #504221d1;
    padding: 0.5rem 0.8rem 0.8rem 0.8rem;
    box-shadow: 0rem 0rem 0.4rem 0.01rem #504221;

    @media (max-width: 768px) {
        flex-grow: 1;
    }
`;

export const LabelContainer = styled.div`
    margin-right: 1rem;
    text-align: center;

    &:last-child {
        margin-right: 0rem;
    }

    @media (max-width: 768px) {
        margin-right: 0.25rem;
    }
`;

export const BoxTitle = styled.div`
    margin-bottom: 0.8rem;
    font-weight: 600;
    font-size: 1.2rem;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`;

export const LabelWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const LabelImage = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: white;

    @media (max-width: 768px) {
        width: 5rem;
        height: 5rem;
    }
`;

export const AllergenName = styled.div`
    font-size: 0.85rem;
    color: #dedbdb;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;