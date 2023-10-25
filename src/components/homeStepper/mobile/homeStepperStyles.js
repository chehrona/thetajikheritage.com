import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: calc(100vh - 10.23rem);
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
`;

export const IndicatorStep = styled.div`
    font-size: 1.5rem;
    color: #ffffff;
    font-family: 'EB Garamond', serif;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
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
    padding: 1rem;
    scroll-snap-type: mandatory;
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }
`;

export const StepperBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    scroll-snap-align: start;
    opacity: ${({ opacity }) => opacity && opacity};
`;

export const Step = styled.div`
    font-size: 1.2rem;
    color: #dedbdbb2;
    font-family: 'EB Garamond', serif;
    transition: 500ms ease-in-out;
`;

export const TitleWrapper = styled.div`
    max-height: 25%;
    min-height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10%;
`;

export const LargeTitle = styled.div`
    font-size: ${({ fontSize }) => fontSize && `${fontSize}rem`};
    opacity: ${({ fontSize }) => fontSize ? "1" : "0"};
    font-family: 'EB Garamond', serif;
    font-weight: bold;
    color: #ffffffb2;
    text-shadow: 1rem 0rem 0rem #504221;
    overflow-wrap: break-word;
    width: 100%;
    text-transform: uppercase;
    line-height: ${({ fontSize }) => fontSize && `${fontSize - 0.5}rem`};
    padding: 1rem;
    padding-left: 2.5rem;
`;

export const Desc = styled.div`
    color: #dedbdb;
    font-size: 1.1rem;
    width: 100%;
    padding: 1rem;
    padding-left: 2.5rem;
    position: relative;
    margin-top: ${({ margin }) => margin && `${margin}rem`};
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
`;

export const StyledButton = styled.div`
    color: #bd9d52;
    height: 20%;
    width: ${({ width }) => width && width};
    font-weight: 500;
    padding-bottom: 0.25rem;
    border-right: 0.1rem solid #ffffff;
    border-bottom: 0.1rem solid #ffffff;
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const ImageSemiCircle = styled.img`
    position: absolute;
    bottom: -9.5rem;
    right: -6rem;
    border-radius: 50%;
    width: 35rem;
    height: 35rem;
    padding: 0.5rem;
    border: 0.0625rem solid #bd9d52;
    z-index: -1;
    opacity: 0.5;
    transition: 500ms ease-in-out;
`;