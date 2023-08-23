import styled from "styled-components/macro";

export const MainContainer = styled.div`
    background: #0F0A00;
    color: white;
    position: relative;
    background-image: url(${'/noise.png'});

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

export const Gap = styled.div`
    height: 6rem;
`;

export const LowerGap = styled.div`
    height: 6.5rem;
`;