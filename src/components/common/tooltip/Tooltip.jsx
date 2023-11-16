import React, { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import { useMediaQuery } from 'react-responsive';

import {
    StyledTooltip,
    WordWrapper,
    StyledTypography
} from "./tooltipStyles";

export const DescWrapper = ({ desc, TextWrapper }) => {
    const [show, setShow] = useState(0);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });

    function handleShow() {
        setShow(1);
    }

    function handleClickAway() {
        setShow(0);
    }

    const renderContent = () => {
        return Object.keys(desc).map((key) => {
            const content = desc[key];
    
            if (key.startsWith('tooltip')) {
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
            } else {
                return <span key={key} dangerouslySetInnerHTML={{ __html: content }} />;
            }
        });
    };
  
    return <TextWrapper>{renderContent()}</TextWrapper>;
};