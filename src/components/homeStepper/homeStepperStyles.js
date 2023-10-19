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
    height: 8.5rem;
    margin-left: 0.5%;
`;

export const StepperContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: scroll;
    padding-left: 10%;
    /* scroll-snap-type: mandatory;
    scroll-snap-type: y mandatory; */

    &::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
    }
`;

export const StepperBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    /* scroll-snap-align: start; */
    opacity: ${({ opacity }) => opacity && opacity};
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
    margin-left: 10%;
    position: relative;
`;

export const OtherSteps = styled.div`
    position: absolute;
    width: 3%;
    height: 20%;
    margin-left: 13%;
    bottom: ${({ bottom }) => bottom && "0rem"};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`;