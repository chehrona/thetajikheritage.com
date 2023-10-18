import styled, { keyframes } from "styled-components/macro";

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
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    top: 0rem;
    pointer-events: none;
`;

export const SphereBox = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

export const Border = styled.div`
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    opacity: ${({ opacity }) => opacity && opacity};
    transform: scale(${({ opacity }) => opacity && opacity});
    width: ${({ size }) => size && `${size}rem`};
    height: ${({ size }) => size && `${size}rem`};
    bottom: ${({ bottom }) => bottom && bottom};
    top: ${({ top }) => top && top};
    right: ${({ right }) => right && right};
    border: 0.0625rem solid #bd9d52;
    z-index: 1000;
    will-change: transform;
`;

export const HomeImage = styled.img`
    position: absolute;
    object-fit: contain;
    border-radius: 50%;
    transform: scale(${({ opacity }) => opacity && opacity});
    width: ${({ size }) => size && `${size}rem`};
    height: ${({ size }) => size && `${size}rem`};
    box-shadow: 0rem 0rem 0.5rem 0.25rem #504221;
    bottom: ${({ bottom }) => bottom && bottom};
    opacity: ${({ opacity }) => opacity && opacity};
    top: ${({ top }) => top && top};
    right: ${({ right }) => right && right};
    z-index: 100;
    will-change: transform;
`;