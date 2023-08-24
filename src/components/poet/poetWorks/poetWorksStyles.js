import styled from "styled-components/macro";

export const MainContainer = styled.div`
    background: #0F0A00;
    color: white;
    position: relative;
    background-image: url(${'/noise.png'});
    padding-bottom: 7.5rem;
    padding-top: 6rem;

    &:before {
        content: "";
        padding: 3rem;  
        width: 100%;
        background: #fcf6e9;
        background-image: url(${'/noise.png'});
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 0%, 0% 100%);
        clip-path: polygon(0 0, 100% 0%, 100% 0%, 0% 100%);
        position: absolute;
        top: 0rem;
        box-sizing: border-box;
    }
`;