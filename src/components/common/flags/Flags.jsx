import React, { useState } from "react";
import { useSetLang } from "../../../App";
import { langNames } from "./langNames";

import { StyledFlag,
         FlagWrapper,
         FlagDropdown,
         StyledIconButton
} from "./flagsStyles";
import { Tooltip } from "@mui/material";

export default function Flags() {
    const [showLangMenu, setShowLangMenu] = useState(false),
          [hovered, setHovered] = useState("false"),
          { lang, setLang } = useSetLang();

    function showLangOptions() {
        setShowLangMenu(true);
        setHovered("true")
    }

    function changeLang(e) {
        const iconTitle = e.currentTarget.getAttribute("data");

        setLang(iconTitle);
        setShowLangMenu(false);
        setHovered("false");
    }

    return (
        <FlagWrapper>
            <StyledIconButton
                onMouseEnter={showLangOptions}
                onMouseLeave={() => setHovered("false")}>
                <Tooltip title={langNames[lang]} placement="right" arrow>
                    <span><StyledFlag lang={lang} hovered={hovered}></StyledFlag></span>
                </Tooltip> 
            </StyledIconButton>
            {showLangMenu &&
                <FlagDropdown onMouseLeave={() => setHovered("false")}>
                    {lang !== 'us' && <StyledIconButton data='us' onClick={changeLang}>
                        <Tooltip title={langNames['us']} placement="right" arrow>
                            <span><StyledFlag lang={'us'} hovered={"true"}></StyledFlag></span>
                        </Tooltip> 
                    </StyledIconButton>}
                    {lang !== 'tj' && <StyledIconButton data='tj' onClick={changeLang}>
                        <Tooltip title={langNames['tj']} placement="right" arrow>
                            <span><StyledFlag lang={'tj'} hovered={"true"}></StyledFlag></span>
                        </Tooltip> 
                    </StyledIconButton>}
                    {lang !== 'kh' && <StyledIconButton data='kh' onClick={changeLang}>
                        <Tooltip title={langNames['kh']} placement="right" arrow>
                            <span><StyledFlag lang={'kh'} hovered={"true"}></StyledFlag></span>
                        </Tooltip>  
                    </StyledIconButton>}
                    {lang !== 'ru' && <StyledIconButton data='ru' onClick={changeLang}>
                        <Tooltip title={langNames['ru']} placement="right" arrow>
                            <span><StyledFlag lang={'ru'} hovered={"true"}></StyledFlag></span>
                        </Tooltip> 
                    </StyledIconButton>}
                </FlagDropdown>}
        </FlagWrapper>
    )
} 