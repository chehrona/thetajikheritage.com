import styled from "styled-components/macro";

export const StyledContainer = styled.div`
    position: relative;
    color: #fcf6e9;
    border-radius: 0.4rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    font-weight: normal;
    background-color: #70654a;
    font-size: inherit;
    font-family: inherit;
    width: 20rem;
    min-width: 20rem;

    &::after {
        content: "";
        top: 97%;
        left: 50%;
        position: absolute;
        border-width: 0.5rem;
        border-style: solid;
        transition: opacity 0.3s;
        border-color: #70654a transparent transparent transparent;
    }

    ${({ showBottom }) => showBottom && `
        &::before {
            content: "";
            bottom: 97%;
            left: 50%;
            position: absolute;
            margin-left: -0.5rem;
            border-width: 0.5rem;
            border-style: solid;
            transition: opacity 0.3s;
            border-color: transparent transparent #70654a transparent;
        }

        &::after {
            display: none;
        }
    `}
`;