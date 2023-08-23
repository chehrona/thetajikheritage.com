import styled from "styled-components";

export const MainContainer = styled.div`
    width: ${({ size }) => size && size};
    height: ${({ size }) => size && size};
    position: fixed;
    bottom: ${({ bottom }) => bottom && bottom};
    top: ${({ top }) => top && top};
    right: ${({ right }) => right && right};
    border-radius: 50%;
    border: ${({ border }) => border ? "0.15rem solid #bd9d52" : "none"};
`;

export const HomeImage = styled.img`
    object-fit: contain;
    border-radius: 50%;
    width: ${({ size }) => size && size};
    height: ${({ size }) => size && size};
    box-shadow: 0.2rem 0.2rem 0.02rem #504221d1;
`;