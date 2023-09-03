import React, { useState } from "react";
import { useSetLang } from "../../../App";

import FirstBox from "./FirstBox";
import SecondBox from "./SecondBox";
import ThirdBox from "./ThirdBox";
import ForthBox from "./ForthBox";
import FifthBox from "./FifthBox";

import { 
    MainContainer,
} from "./poetBioStyles";
import SixthBox from "./SixthBox";

export default function PoetBio({ poet }) {
    const { lang } = useSetLang();
 
    return (
        <MainContainer id='Biography'>
            <FirstBox poet={poet?.bio.one[lang]} />
            <SecondBox poet={poet?.bio} />
            <ThirdBox poet={poet?.bio} />
            <ForthBox poet={poet?.bio} />
            <FifthBox poet={poet?.bio} />
            <SixthBox poet={poet?.bio.six[lang]} />
        </MainContainer>
    )
}