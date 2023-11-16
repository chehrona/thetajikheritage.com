import React, { useState } from "react";
import { ClickAwayListener } from "@mui/material";

import {
    StyledTooltip,
    WordWrapper,
    StyledTypography
} from "./tooltipStyles";

export const Tooltip = ({ key, content }) => {
    const [show, setShow] = useState(0);

    function handleShow() {
        setShow(1);
    }

    function handleClickAway() {
        setShow(0);
    }

    return (
        <StyledTooltip
            open={show}
            key={key}
            title={<StyledTypography dangerouslySetInnerHTML={{ __html: content.text }} />} 
            arrow
        >
            <span>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <WordWrapper
                        dangerouslySetInnerHTML={{ __html: content.word }}
                        onClick={handleShow}
                        onMouseEnter={() => setShow(1)}
                        onMouseLeave={() => setShow(0)}
                    />
                </ClickAwayListener>
            </span>
        </StyledTooltip>
    );
};