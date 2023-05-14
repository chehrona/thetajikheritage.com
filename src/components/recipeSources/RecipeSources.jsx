import React, { useState } from "react";
import { IconButton } from "@mui/material";

import { DropDownContainer,
         IconContainer,
         Line,
         StyledDownIcon,
         RefContainer,
         Reference,
         SubTitle,
         StyledUpIcon,
         RefWrapper,
} from "./recipeSourcesStyles";
import { useSetLang } from "../../App";

export default function RecipeSources({ recipe }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { lang } = useSetLang();

    return (
        <DropDownContainer>
            <IconContainer>
                <Line right={true}></Line>
                <IconButton onClick={() => setIsDropdownOpen(prevState => !prevState)}>
                    {isDropdownOpen ? <StyledUpIcon /> : <StyledDownIcon />}
                </IconButton>
                <Line right={false}></Line>
            </IconContainer>
            <RefContainer open={isDropdownOpen}>
                <RefWrapper>
                    <SubTitle>{recipe.referencesLang[lang]}</SubTitle>
                    {recipe.references[lang].map((source, i) => {
                        return (
                            <Reference key={i}>{i+1}. {source}</Reference>
                        )
                    })}
                </RefWrapper>
            </RefContainer>
        </DropDownContainer>

    )
}