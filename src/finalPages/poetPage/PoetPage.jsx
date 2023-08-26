import React from "react";
import {useParams} from "react-router-dom";
import { poets } from "../../data/poetData";

import { 
    PageContainer,
} from "./poetPageStyles";
import PoetBio from "../../components/poet/poetBio/PoetBio";
import PoetIntro from "../../components/poet/poetIntro/PoetIntro";
import PoetWorks from "../../components/poet/poetWorks/PoetWorks";
import PoetAwards from "../../components/poet/poetAwards/PoetAwards";
import PoetMovies from "../../components/poet/poetMovies/PoetMovies";

export default function PoetPage() {
    const { id } = useParams(),
        poet = poets.filter((poet) => poet.id === id)[0];

    if (poet) {
        return (
            <PageContainer>
                <PoetIntro poet={poet} />
                <PoetBio poet={poet} />
                <PoetWorks poet={poet.works} />
                <PoetMovies poet={poet.movies} />
                <PoetAwards poet={poet.awards} />
            </PageContainer>
        )
    }
}