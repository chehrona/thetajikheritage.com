import React from "react";
import { useSetLang } from "../../App";
import { pageInfo } from "../../data/pageNames"

import { MenuContainer,
        LogoContainer,
        Logo,
        PageName,
        LogoHalf,
        PageNamesContainer,
        Background,
        PageDesc,
        StyledLink 
} from "./menuStyles";

export default function Menu() {
    const { lang, setIsMenuShown } = useSetLang();

    return (
        <MenuContainer>
            <Background />
            <LogoContainer>
                {/* <LogoHalf src="zarduzi.png"></LogoHalf> */}
                <Logo src={'/tajiks.svg'}></Logo>
            </LogoContainer>
            <PageNamesContainer>
                {pageInfo[lang]?.map((entry) => {
                    return (
                        <StyledLink to={entry.link}>
                            <div onClick={() => setIsMenuShown(false)}>
                                <PageName>{entry.title}</PageName>
                                <PageDesc>{entry.desc}</PageDesc>
                            </div>
                        </StyledLink>
                    )
                })}
            </PageNamesContainer>
        </MenuContainer>

    )

}