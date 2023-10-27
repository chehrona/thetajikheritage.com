import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0rem;
`;

export const SphereBox = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Border = styled.div`
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
    will-change: transform;
    z-index: 1;
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
    will-change: transform;
    z-index: 0;
`;