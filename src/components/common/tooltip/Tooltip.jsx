import React, { useState } from "react";

import {
    MainContainer
} from "./tooltipStyles";

export default function Tooltip({ targetClassName, text }) {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleMouseEnter = () => {
        setIsVisible(true);
    };
  
    const handleMouseLeave = () => {
        setIsVisible(false);
    };
  
    const element = document.querySelector(`.${targetClassName}`);
        element?.addEventListener('mouseenter', handleMouseEnter);
        element?.addEventListener('mouseleave', handleMouseLeave);
  
    return (
        <>
            {isVisible && (
                <MainContainer>
                    {text}
                </MainContainer>
            )}
        </>
    );
  };