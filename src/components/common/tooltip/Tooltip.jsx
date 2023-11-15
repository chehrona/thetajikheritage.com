import React from "react";

import {
    StyledTooltip,
    WordWrapper,
    StyledTypography
} from "./tooltipStyles";

export const DescWrapper = ({ desc, TextWrapper }) => {
    const renderContent = () => {
        return Object.keys(desc).map((key) => {
            const content = desc[key];
    
            if (key === 'tooltip') {
                return (
                    <StyledTooltip key={key} title={<StyledTypography dangerouslySetInnerHTML={{ __html: content.text }} />} arrow>
                        <WordWrapper dangerouslySetInnerHTML={{ __html: content.word }} />
                    </StyledTooltip>
                );
            } else {
                return <span key={key} dangerouslySetInnerHTML={{ __html: content }} />;
            }
        });
    };
  
    return <TextWrapper>{renderContent()}</TextWrapper>;
};