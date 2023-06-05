import styled from "styled-components/macro";

export const MainContainer = styled.div`
    background: #000;
    height: 10rem;
    color: white;
    position: relative;
    background-image: url(${'/noise.png'});

    &:before {
        content: "";
        padding: 3rem;  
        width: 100%;
        background: white;
        -webkit-clip-path: polygon(0 0, 100% 0%, 100% 0%, 0% 100%);
        clip-path: polygon(0 0, 100% 0%, 100% 0%, 0% 100%);
        position: absolute;
        top: 0rem;
        box-sizing: border-box;
    }
`;

export const Gap = styled.div`
    height: 6rem;
`;