import React from "react";
import { useSetLang } from "../../App";
import { pageInfo } from "../../pages/pageNames";

import { MenuContainer,
        LogoContainer,
        Logo,
        PageName,
        LogoHalf,
        PageNamesContainer,
        PageDesc,
        StyledLink 
} from "./menuStyles";

export default function Menu() {
    const { lang, setIsMenuShown, isMenuShown } = useSetLang();

    return (    
        <MenuContainer open={isMenuShown}>
            <LogoContainer>
                {/* <LogoHalf src="zarduzi.png"></LogoHalf> */}
                <Logo src={'/tajiks.svg'}></Logo>
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
        </MenuContainer>
    )

}