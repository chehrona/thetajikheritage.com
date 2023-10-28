import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: calc(100svh - 9.23rem);
    overflow: hidden;
    position: relative;
    z-index: 1;
`;

export const SemiCircle = styled.div`
    position: absolute;
    left: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: #bd9d52;

    &::before {
        content: "";
        height: 3rem;
        width: 3rem;
        background: #0F0A00;
        position: absolute;
        left: -1.5rem;
        box-sizing: border-box;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const IndicatorStep = styled.div`
    font-size: 1.5rem;
    color: #ffffff;
    font-family: 'EB Garamond', serif;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NumLine = styled.div`
    background: #bd9d52;
    width: 0.05rem;
    height: 8rem;
    margin-left: 0.5%;
`;

export const StepperContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: scroll;
    padding-left: 10%;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }

    @media (max-width: 768px) {
        padding: 1rem 2rem 1rem 2rem;
        scroll-snap-type: mandatory;
        scroll-snap-type: y mandatory;
    }
`;

export const StepperBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    opacity: ${({ opacity }) => opacity && opacity};

    @media (max-width: 768px) {
        scroll-snap-align: start;
        padding-top: 2rem;
    }
`;

export const Step = styled.div`
    font-size: 1.2rem;
    color: #dedbdbb2;
    font-family: 'EB Garamond', serif;
    transition: 500ms ease-in-out;
`;

export const TitleWrapper = styled.div`
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10%;

    @media (max-width: 768px) {
        height: 30%;
        min-height: 20%;
        padding-top: 0%;
    }
`;

export const LargeTitle = styled.div`
    font-weight: bold;
    color: #ffffffb2;
    width: 45rem;
    padding-top: 1rem;
    overflow-wrap: break-word;
    text-transform: uppercase;
    font-family: 'EB Garamond', serif;
    text-shadow: 1rem 0rem 0rem #504221;
    font-size: ${({ fontSize }) => fontSize && `${fontSize}rem`};
    opacity: ${({ fontSize }) => fontSize ? "1" : "0"};
    line-height: ${({ fontSize }) => fontSize && `${fontSize - 1}rem`};

    @media (max-width: 768px) {
        width: 100%;
        padding-top: 0rem;
        line-height: ${({ fontSize }) => fontSize && `${fontSize - 0.5}rem`};
    }
`;

export const Desc = styled.div`
    color: #dedbdb;
    font-size: 1.1rem;
    width: 40%;
    margin-left: 10%;
    position: relative;
    margin-top: ${({ margin }) => margin && `${margin}rem`};

    @media (max-width: 768px) {
        font-size: 1.3rem;
        width: calc(100% - 2.2rem);
        margin-left: 2.2rem;
    }
`;

export const OtherSteps = styled.div`
    position: absolute;
    width: 3%;
    height: 20%;
    margin-left: 13%;
    ${({ bottom }) => bottom ? "bottom: 0rem" : "top: 0rem"};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const StyledButton = styled.div`
    color: #bd9d52;
    height: 20%;
    font-weight: 500;
    padding-bottom: 0.25rem;
    width: ${({ width }) => width && width};

    &::before {
        content: '';
        position: absolute;
        height: 0.1rem;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
        background-color: #ffffff;
        transform-origin: bottom right;
        transition: transform 0.3s ease-in-out;
        width: ${({ width }) => width && width};
    }

    &:hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    &:hover {
        border-right: 0.1rem solid #ffffff;
    }

    @media (max-width: 768px) {
        border-right: 0.1rem solid #ffffff;
        border-bottom: 0.1rem solid #ffffff;

        &::before {
            display: none;
        }

        &:hover {
            border-right: none;
        }
    }
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const ImageSemiCircle = styled.img`
    position: absolute;
    bottom: -9.5rem;
    right: -4rem;
    border-radius: 50%;
    width: 35rem;
    height: 35rem;
    padding: 0.5rem;
    border: 0.0625rem solid #bd9d52;
    z-index: -1;
    opacity: 0.3;
    transition: 500ms ease-in-out;
`;