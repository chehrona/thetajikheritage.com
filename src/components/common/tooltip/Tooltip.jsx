import React, { useEffect, useState } from "react";

import { Popper } from "@mui/material";

import {
    StyledContainer
} from "./tooltipStyles";

export default function Tooltip({ anchor, text, tooltipRef, showBottom }) {
    const [open, setOpen] = useState(0);

    useEffect(() => {
        if (anchor) {
            anchor.addEventListener("mouseenter", handleMouseEnter);
            anchor.addEventListener("mouseleave", handleMouseLeave);
    
            return () => {
                anchor.removeEventListener("mouseenter", handleMouseEnter);
                anchor.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [anchor]);

    const handleMouseEnter = () => {
        setOpen(1);
    };
    
    const handleMouseLeave = () => {
        setOpen(0);
    };
    
    return (
        <Popper
            open={open}
            anchorEl={anchor}
            placement="top"
        >
            <StyledContainer ref={tooltipRef} showBottom={showBottom}>{text}</StyledContainer>
        </Popper>
    );
};