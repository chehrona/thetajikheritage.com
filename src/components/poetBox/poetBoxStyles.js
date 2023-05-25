import { Link } from "react-router-dom";
import styled from "styled-components";

export const PoetBoxContainer = styled.div`
    margin: 5rem;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const PoetCard = styled.div`
    border-radius: 0.7rem;
    margin-bottom: 7rem;
    height: 35rem;
    width: 23rem;
    cursor: pointer;
    background: #000;
    color: rgb(213 213 213);
    position: relative;

    &:hover {
        border-radius: 1.5rem;
        box-shadow: 0rem 0rem 0.6rem rgba(0, 0, 0, 0.5);
    }
`;

export const PoetImgContainer = styled.div`
    height: 20rem;
    width: 15rem;
    border-radius: 9rem;
    border: 0.15rem solid #335e78;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0rem 0rem 5rem rgba(51, 94, 120, 0.8);
    margin-top: 2rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

export const PoetImage = styled.img`
    border-radius: 9rem;
    height: 18.5rem;
    width: 13.5rem;
    margin: 0.3rem;
    box-shadow: 0rem 0rem 1rem rgba(51, 94, 120);
`;

export const PoetName = styled.div`
    font-size: 2.5rem;
    font-family: "EB Garamond", serif;
    font-style: italic;
    text-shadow: 0rem 0rem 0.25rem black;
`;

export const PoetNameBox = styled.div`
    position: absolute;
    top: 15.8rem;
    line-height: 2.5rem;
    left: -2rem;
`;

export const PoetDates = styled.div`
    font-size: 1rem;
    font-family: 'IBM Plex Serif', serif;
`;

export const PoetInfoContainer = styled.div`
    position: absolute;
    left: 2rem;
    bottom: 5rem;
    width: 20rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;