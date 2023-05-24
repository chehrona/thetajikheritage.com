import styled from "styled-components";

export const PoetCard = styled.div`
    border-radius: 0.7rem;
    margin-bottom: 7rem;
    height: 35rem;
    width: 23rem;
    cursor: pointer;
    position: relative;
    background: #22282a;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PoetImgContainer = styled.div`
    height: 24rem;
    width: 18rem;
    border-radius: 9rem;
    border: 0.15rem solid #335e78;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0rem 0rem 5rem rgba(51, 94, 120, 0.8);
`;

export const PoetImage = styled.img`
    border-radius: 9rem;
    height: 22.5rem;
    width: 16.5rem;
    margin: 0.5rem;
    box-shadow: 0rem 0rem 1rem rgba(51, 94, 120);
`;

export const PoetName = styled.div`
    position: absolute;
    color: rgb(213 213 213);
    bottom: 15rem;
    left: 1rem;
`;