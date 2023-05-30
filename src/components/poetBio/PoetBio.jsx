import React from "react";
import { useSetLang } from "../../App";

import { 
    MainContainer,
} from "./poetBioStyles";

export default function PoetBio({ poet }) {
    const { lang } = useSetLang();

    return (
        <MainContainer>
            {poet?.bio[lang]}
            <div>eferfef</div>
            <div>eferfef</div>
            <div>eferfef</div>
            <div>eferfef</div>
            <div>eferfef</div>
            <div>eferfef</div>
            <div>eferfef</div>
            <div>eferfef</div>
        </MainContainer>
    )
}