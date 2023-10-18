import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
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
    height: 5rem;   
    margin-left: 0.56%; 
`;

export const StepperContainer = styled.div`
    height: 90%;
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
    z-index: 3;
`;

export const OtherSteps = styled.div`
    position: relative;
    width: 100%;
    height: 10%;
`;

export const Overlay = styled.div`
    width: 100%;
    padding-left: 15.3%;
    height: 100%;
    background: 
        linear-gradient(90deg, rgba(189, 157, 82, 0.05), rgba(189, 157, 82, 0.07), rgba(189, 157, 82, 0.09), rgba(189, 157, 82, 0.11));
`;

export const HideBox = styled.div`
    background-color: #0F0A00;
    width: 100%;
    position: relative;
    bottom: ${({ bottom }) => bottom && "5.43rem"};
    z-index: 1;
`;