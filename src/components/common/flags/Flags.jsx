import React, { useState } from "react";
import { useSetLang } from "../../../App";
import { langNames } from "./langNames";
import { Tooltip, ClickAwayListener } from "@mui/material";

import { StyledFlag,
         FlagWrapper,
         FlagDropdown,
         StyledIconButton
} from "./flagsStyles";

export default function Flags() {
    const [showLangMenu, setShowLangMenu] = useState(false),
        { lang, setLang } = useSetLang();

    function showLangOptions() {
        setShowLangMenu(true);
    }

    function changeLang(e) {
        const iconTitle = e.currentTarget.getAttribute("data");

        setLang(iconTitle);
        setShowLangMenu(false);
    }

    function handleClickAway() {
        setShowLangMenu(false);
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <FlagWrapper>
                <StyledIconButton onMouseEnter={showLangOptions}>
                    <Tooltip title={langNames[lang]} placement="right" arrow>
                        <span><StyledFlag lang={lang}></StyledFlag></span>
                    </Tooltip> 
                </StyledIconButton>
                {showLangMenu &&
                    <FlagDropdown>
                        {lang !== 'us' && <StyledIconButton data='us' onClick={changeLang}>
                            <Tooltip title={langNames['us']} placement="right" arrow>
                                <span><StyledFlag lang={'us'}></StyledFlag></span>
                            </Tooltip> 
                        </StyledIconButton>}
                        {lang !== 'tj' && <StyledIconButton data='tj' onClick={changeLang}>
                            <Tooltip title={langNames['tj']} placement="right" arrow>
                                <span><StyledFlag lang={'tj'}></StyledFlag></span>
                            </Tooltip> 
                        </StyledIconButton>}
                        {/* {lang !== 'kh' && <StyledIconButton data='kh' onClick={changeLang}>
                            <Tooltip title={langNames['kh']} placement="right" arrow>
                                <span><StyledFlag lang={'kh'} hovered={"true"}></StyledFlag></span>
                            </Tooltip>  
                        </StyledIconButton>} */}
                        {lang !== 'ru' && <StyledIconButton data='ru' onClick={changeLang}>
                            <Tooltip title={langNames['ru']} placement="right" arrow>
                                <span><StyledFlag lang={'ru'}></StyledFlag></span>
                            </Tooltip> 
                        </StyledIconButton>}
                    </FlagDropdown>}
            </FlagWrapper>
        </ClickAwayListener>
    )
} 