import React, { useState } from "react";
import { useSetLang } from "../../App";

import { StyledFlag,
         StyledKhorImg,
         FlagWrapper,
         FlagDropdown,
         StyledIconButton
} from "./flagsStyles";

export default function Flags() {
    const [showLangMenu, setShowLangMenu] = useState(false),
          [hovered, setHovered] = useState("false"),
          { lang, setLang } = useSetLang();

    function showLangOptions() {
        setShowLangMenu(prevState => !prevState);
    }

    function changeLang(e) {
        const iconTitle = e.target.title;

        setLang(iconTitle);
        setShowLangMenu(false);
        setHovered("false");
    }

    return (
        <FlagWrapper>
            <StyledIconButton onClick={showLangOptions}
                onMouseEnter={() => setHovered("true")}
                onMouseLeave={() => !showLangMenu && setHovered("false")}>
                {lang !== 'kh' ? 
                    <StyledFlag countryCode={lang} hovered={hovered}></StyledFlag> :
                    <StyledKhorImg src='khorasan.png' title='kh' hovered={hovered}
                    ></StyledKhorImg>}  
            </StyledIconButton>
            {showLangMenu && <FlagDropdown>
                {lang !== 'us' && <StyledIconButton onClick={changeLang}>
                    <StyledFlag countryCode='us' hovered={"true"}></StyledFlag>
                </StyledIconButton>}
                {lang !== 'tj' && <StyledIconButton onClick={changeLang}>
                    <StyledFlag countryCode='tj' hovered={"true"}></StyledFlag>
                </StyledIconButton>}
                {lang !== 'kh' && <StyledIconButton onClick={changeLang}>
                    <StyledKhorImg src='khorasan.png' title='kh' hovered={"true"}
                    ></StyledKhorImg>
                </StyledIconButton>}
                {lang !== 'ru' && <StyledIconButton onClick={changeLang}>
                    <StyledFlag countryCode='ru' hovered={"true"}></StyledFlag>
                </StyledIconButton>}
            </FlagDropdown>}
        </FlagWrapper>
    )
} 