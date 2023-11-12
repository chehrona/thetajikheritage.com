import React from "react";
import { useSetLang } from "../../../App";
import { pageInfo } from "./pageNames";

import { Slide} from "@mui/material";

import { 
    LogoContainer,
    Logo,
    PageName,
    LogoHalf,
    PageNamesContainer,
    PageDesc,
    StyledLink, 
    StyledMenu
} from "./menuStyles";

export default function Menu({ isMenuShown, setIsMenuShown }) {
    const { lang } = useSetLang();

    return (    
        <StyledMenu
            open={isMenuShown}
            TransitionComponent={Slide}
            TransitionProps={{
                delay: 200
            }}
            slotProps={{
                paper: {
                    sx: {
                        position: 'static',
                        background: 'rgb(51 51 51)',
                        boxShadow: 'none',
                        maxWidth: '100vw',
                        width: '100vw',
                        borderRadius: '0rem',
                        overflow: 'hidden',
                    }
                }
            }}
        >
            <LogoContainer>
                {/* <LogoHalf src="zarduzi.png"></LogoHalf> */}
                <Logo src={'/tajiks.png'}></Logo>
            </LogoContainer>
            <PageNamesContainer>
                {pageInfo[lang]?.map((entry, i) => {
                    return (
                        <StyledLink to={entry.link} key={i}>
                            <div onClick={() => setIsMenuShown(false)}>
                                <PageName>{entry.title}</PageName>
                                <PageDesc>{entry.desc}</PageDesc>
                            </div>
                        </StyledLink>
                    )
                })}
            </PageNamesContainer>
        </StyledMenu>
    )

}