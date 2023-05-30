import React from "react";
import {useParams} from "react-router-dom";
import { useSetLang } from "../../App";
import { poets } from "../../data/poetData";

import { 
    PageContainer,
} from "./poetPageStyles";
import PoetBio from "../../components/poetBio/PoetBio";
import PoetIntro from "../../components/poetIntro/PoetIntro";
import PoetWorks from "../../components/poetWorks/PoetWorks";

export default function PoetPage() {
    const { id } = useParams(),
        poet = poets.filter((poet) => poet.id === id)[0];

    if (poet) {
        return (
            <PageContainer>
                <PoetIntro poet={poet} />
                <PoetBio poet={poet} />
                <PoetWorks poet={poet} />
            </PageContainer>
        )
    }
}