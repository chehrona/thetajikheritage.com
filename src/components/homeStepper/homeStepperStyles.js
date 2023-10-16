import styled from "styled-components";

export const MainContainer = styled.div`
    width: 45%;
    height: 100%;
    margin-right: 5%;
`;

export const Indicator = styled.div`
    position: absolute;
    left: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SemiCircle = styled.div`
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
    margin-left: 1rem;
`;

export const NumLine = styled.div`
    background: #bd9d52;
    width: 0.05rem;
    height: 5rem;
    position: absolute;
    ${({ bottom }) => bottom ? "bottom: 0rem" : "top: 0rem"};
`;

export const StepperBox = styled.div`
    position: relative;
    top: 16%;
    left: 10.7%;
    width: 100%;
    height: 68%;
`;

export const Step = styled.div`
    font-size: 1.2rem;
    color: #dedbdbb2;
    font-family: 'EB Garamond', serif;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    ${({ bottom }) => bottom ? "bottom: 5.5rem" : "top: 5.5rem"};
`;

export const TitleWrapper = styled.div`
    position: absolute;
    top: 10%;
    left: 10%;
    height: 65%;
    display: flex;
    align-items: center;
`;

export const LargeTitle = styled.div`
    font-size: ${({ fontSize }) => fontSize && `${fontSize}rem`};
    opacity: ${({ fontSize }) => fontSize ? "1" : "0"};
    font-family: 'EB Garamond', serif;
    font-weight: bold;
    color: #ffffffb2;
    text-shadow: 1rem 0rem 0rem #504221;
    overflow-wrap: break-word;
    width: 45rem;
    text-transform: uppercase;
    line-height: ${({ fontSize }) => fontSize && `${fontSize - 1}rem`};
`;

export const Desc = styled.div`
    color: #dedbdb;
    font-size: 1rem;
    margin-top: 2rem;
    width: 70%;
    position: absolute;
    bottom: -15%;
    left: 35%;
`;

export const OtherSteps = styled.div`
    position: absolute;
    left: 18%;
    height: 100%;
`;
