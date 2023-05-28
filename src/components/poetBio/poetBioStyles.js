import styled from "styled-components/macro";

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;

    &:after {
        content: "";
        padding: 3rem;  
        width: 83.8%;
        background: white;
        -webkit-clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
        clip-path: polygon(0 0, 100% 100%, 100% 100%, 0% 100%);
        position: absolute;
        top: 52.2rem;
    }
`;