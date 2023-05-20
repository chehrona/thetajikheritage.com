import React from "react";
import { useSetLang } from "../../App";

import {
    AllergyContainer,
    ContainsBox,
    BoxTitle,
    LabelWrapper,
    LabelContainer,
    LabelImage,
    AllergenName,
    DietBox,
} from "./allergyStyles"

export default function Allergy({ recipe }) {
    const { lang } = useSetLang();
    return (
        <AllergyContainer>
            {recipe.contains && 
                <ContainsBox>
                    <BoxTitle>{recipe?.containsLang[lang]}</BoxTitle>
                    <LabelWrapper>
                        {recipe?.contains?.map((label, i) => {
                            return (
                                <LabelContainer key={i}>
                                    <LabelImage src={`/allergyLabels/${label}.png`} />
                                    <AllergenName>
                                        {recipe?.labels[i][lang]}
                                    </AllergenName>
                                </LabelContainer>
                            )
                        })}
                    </LabelWrapper>
                </ContainsBox>
            }
            {recipe.diet && 
                <DietBox>
                    <BoxTitle>{recipe?.dietLang[lang]}</BoxTitle>
                    <LabelWrapper>
                        {recipe?.diet.map((label, i) => {
                            return (
                                <LabelContainer key={i}>
                                    <LabelImage src={`/allergyLabels/${label}.png`} />
                                    <AllergenName>
                                        {recipe?.dietLabels[i][lang]}
                                    </AllergenName>
                                </LabelContainer>
                            )
                        })}
                    </LabelWrapper>
                </DietBox>
            }
        </AllergyContainer>
    )
}