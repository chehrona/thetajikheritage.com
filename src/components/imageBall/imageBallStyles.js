import styled, { keyframes } from "styled-components";

const shrink = keyframes`
  from {
    top: 0;
    left: 0;
    transform: scale(1);
  }
  to {
    top: 350px;
    left: 350px;
    transform: scale(0);
  }
`;

export const MainContainer = styled.div`
    width: 50%;
    height: 100%;
    overflow: auto;
`;

export const Border = styled.div`
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    width: ${({ size }) => size && `${size}rem`};
    height: ${({ size }) => size && `${size}rem`};
    bottom: ${({ bottom }) => bottom && bottom};
    top: ${({ top }) => top && top};
    right: ${({ right }) => right && right};
    opacity: ${({ opacity }) => opacity && opacity};
    border: ${({ border }) => border ? "0.15rem solid #bd9d52" : "none"};
    z-index: 10;
`;

export const HomeImage = styled.img`
    position: absolute;
    object-fit: contain;
    border-radius: 50%;
    width: ${({ size }) => size && `${size}rem`};
    height: ${({ size }) => size && `${size}rem`};
    box-shadow: 0rem 0rem 0.5rem 0.25rem #504221;
    bottom: ${({ bottom }) => bottom && bottom};
    opacity: ${({ opacity }) => opacity && opacity};
    top: ${({ top }) => top && top};
    right: ${({ right }) => right && right};
    z-index: 1;
`;