import React, { useState } from "react";
import { useSetLang } from "../../App";

import { StyledFlag,
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
                <StyledFlag lang={lang} title={lang} hovered={hovered}></StyledFlag> 
            </StyledIconButton>
            {showLangMenu && <FlagDropdown>
                {lang !== 'us' && <StyledIconButton title={'us'} onClick={changeLang}>
                    <StyledFlag lang={'us'} title={'us'} hovered={"true"}></StyledFlag> 
                </StyledIconButton>}
                {lang !== 'tj' && <StyledIconButton title={"tj"} onClick={changeLang}>
                    <StyledFlag lang={'tj'} title={"tj"} hovered={"true"}></StyledFlag> 
                </StyledIconButton>}
                {lang !== 'kh' && <StyledIconButton title={'kh'} onClick={changeLang}>
                    <StyledFlag lang={'kh'} title={'kh'} hovered={"true"}></StyledFlag> 
                </StyledIconButton>}
                {lang !== 'ru' && <StyledIconButton title={'ru'} onClick={changeLang}>
                    <StyledFlag lang={'ru'} title={'ru'} hovered={"true"}></StyledFlag> 
                </StyledIconButton>}
            </FlagDropdown>}
        </FlagWrapper>
    )
} 