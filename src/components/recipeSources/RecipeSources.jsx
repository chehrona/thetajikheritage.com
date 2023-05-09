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
} from "./recipeSourcesStyles";
import { useSetLang } from "../../App";

export default function RecipeSources({ recipe }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { lang } = useSetLang();

    return (
        <DropDownContainer>
            <IconContainer>
                <Line></Line>
                <IconButton onClick={() => setIsDropdownOpen(prevState => !prevState)}>
                    {isDropdownOpen ? <StyledUpIcon /> : <StyledDownIcon />}
                </IconButton>
                <Line></Line>
            </IconContainer>
            {isDropdownOpen && 
                <RefContainer>
                    <SubTitle>{recipe.referencesLang[lang]}</SubTitle>
                    {recipe.references[lang].map((source, i) => {
                        return (
                            <Reference>{source}</Reference>
                        )
                    })}
                </RefContainer>
            }
        </DropDownContainer>

    )
}