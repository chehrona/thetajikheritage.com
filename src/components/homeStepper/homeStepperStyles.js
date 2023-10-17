import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
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
    margin-left: 0.56%; 
`;

export const StepperContainer = styled.div`
    height: 90%;
    width: 100%;
    overflow: scroll;
    padding-left: 10%;

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }
`;

export const StepperBox = styled.div`
    width: 100%;
    height: 100%;
`;

export const Step = styled.div`
    font-size: 1.2rem;
    color: #dedbdbb2;
    font-family: 'EB Garamond', serif;
`;

export const TitleWrapper = styled.div`
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
    padding-top: 2rem;
`;

export const Desc = styled.div`
    color: #dedbdb;
    font-size: 1rem;
    width: 40%;
    margin-left: 11%;
    padding-bottom: 2rem;
    position: relative;
    z-index: 2;
`;

export const OtherSteps = styled.div`
    position: relative;
    width: 100%;
    height: 10%;
`;

export const Overlay = styled.div`
    width: 100%;
    padding-left: 17.3%;
    height: 100%;
    background: 
        linear-gradient(90deg, rgba(189, 157, 82, 0.05), rgba(189, 157, 82, 0.07), rgba(189, 157, 82, 0.09), rgba(189, 157, 82, 0.11));
`;

export const HideBox = styled.div`
    background-color: #0F0A00;
    width: 100%;
    position: absolute;
    bottom: ${({ bottom }) => bottom && "4.2rem"};
    z-index: 1;
`;