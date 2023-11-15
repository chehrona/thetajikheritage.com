import styled from "styled-components";
import { Tooltip, tooltipClasses } from '@mui/material';

export const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
    ))(() => ({
        [`& .${tooltipClasses.tooltip}`]: {
            fontSize: 'inherit',
            fontWeight: 'normal',
        },
        [`& .${tooltipClasses.tooltipArrow}`]: {
            backgroundColor: '#70654a',
        },
        [`& .${tooltipClasses.arrow}`]: {
            color: '#70654a'
        },
}));

export const StyledTypography = styled.div`
    font-family: 'IBM Plex Serif', serif;
    padding: 0.5rem;
`;

export const WordWrapper = styled.span`
    border-bottom: 1px dotted #70654a;
`;