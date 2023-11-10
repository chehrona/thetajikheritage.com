import styled, { keyframes } from "styled-components/macro";
import { Clear } from "@mui/icons-material";
import { motion}  from "framer-motion";
import { Tooltip, tooltipClasses } from "@mui/material";

const openAnimation = keyframes`
    to {
        transform: translateY(0%)
    }
`;

const closeAnimation = keyframes`
    from {
        transform: translateY(0%)
    }    
    to {
        transform: translateY(-100%)
    }
`;

export const MainContainer = styled.div`
    width: 100%;
    height: 17rem;
    perspective: 45rem;
    overflow: hidden;
    background-color: #0F0A00;
    position: absolute;
    background-image: url(${'/noise.png'});
`;

export const Cuboid = styled.div`
    position: relative;
    width: 100%;
    height: 17rem;
    transform-style: preserve-3d;
`;

export const CuboidFace = styled.div`
    width: 100%;
    height: 17rem;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    font-size: 2rem;
    box-shadow: 0 1px 3px 0 #dedbdb, 0 1px 2px -1px #dedbdb;
    transform: translateZ(calc(17rem * -0.5)) translateY(calc(17rem * 0.5)) rotateX(-90deg);
    height: 17rem;
    background: rgb(213, 213, 213);
    box-shadow: 0rem 0rem 2rem 0.5rem inset black;
`;

export const BooksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 4rem;
    position: relative;
    height: 17rem;
    padding-bottom: 1rem;
    box-sizing: border-box;
    cursor: none;
    position: relative;
`;

export const BookWrapper = styled.div`
    box-shadow: -1px -4px 0.3rem -0.3rem #dedbdb, 1px -2px 0.3rem -1px #dedbdb, 0px 0.3rem 0.3rem black;
    border-radius: 0.4rem;
    height: 13rem;
    width: 9rem;
    position: relative;
    overflow: hidden;
`;
  
export const Book = styled.img`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    object-fit: cover;
    background: #0F0A00
        url("/loader.svg") center
        no-repeat;
`;

export const Shelf = styled.div`
    height: 1rem;
    width: 100%;
    background: grey;
    position: relative;
    z-index: 10;
    border-radius: 0.3rem;
    box-shadow: 0rem 0rem 0.5rem 0.1rem inset black;
`;

export const Overlay = styled.div`
    width: 100%;
    background: rgb(0, 0, 0, 0.7);
    z-index: 1000;
    opacity: ${({ open }) => (!open || open === null) && '0'};
    animation-name: ${({open}) => (open && open !== null) && openAnimation};
    animation-name: ${({open}) => (!open && open !== null)  && closeAnimation};
    animation-duration: 1s;
    animation-fill-mode: both;
    position: absolute;
    top: 0rem;
    height: 100%;
    border-radius: 0.4rem;
    transform: translateY(-100%);
`;

export const StyledClearIcon = styled(Clear)`
    color: #dedbdb;
    margin: 0.2rem;
    width: 2rem;
    height: 2rem;
`;

export const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ActionIcon = styled.img`
    width: 4rem;
    margin-bottom: 4rem;
    height: auto;
`;

export const ActionWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 100%;
`;

export const Cursor = styled(motion.div)`
    position: fixed;
    width: 4rem;
    height: 4rem;
    top: 0rem;
    left: 0rem;
`;

export const CursorImg = styled.img`
    width: 100%;
    height: 100%;
    background: transparent;
`;

export const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
    ))(() => ({
        [`& .${tooltipClasses.tooltip}`]: {
            fontSize: 'inherit',
            fontFamily: 'inherit',
            fontWeight: 'normal',
            padding: '0.5rem 1rem',
        },
        [`& .${tooltipClasses.tooltipArrow}`]: {
            backgroundColor: '#70654a',
        },
        [`& .${tooltipClasses.arrow}`]: {
            color: '#70654a'
        },
        '@media (max-width: 896px)': {
            [`& .${tooltipClasses.tooltip}`]: {
                display: 'none',
            },
        },
}));