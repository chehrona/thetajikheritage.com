import React from "react";
import {useParams} from "react-router-dom";
import { poets } from "../../data/poetData";

import { 
    PageContainer,
    RefContainer
} from "./poetPageStyles";

import PoetBio from "../../components/poet/poetBio/PoetBio";
import PoetIntro from "../../components/poet/poetIntro/PoetIntro";
import PoetWorks from "../../components/poet/poetWorks/PoetWorks";
import PoetAwards from "../../components/poet/poetAwards/PoetAwards";
import PoetMovies from "../../components/poet/poetMovies/PoetMovies";
import Politics from "../../components/poet/politics/Politics";
import Sources from "../../components/common/sources/Sources";

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
                <Politics poet={poet} />
                <PoetAwards poet={poet.awards} />
                <RefContainer>
                    <Sources
                        data={poet}
                        line={'#504221d1'}
                        color={'#dedbdb'}
                        title={'#fcf6e9'}
                        background={'#0F0A00'}
                    />
                </RefContainer>
            </PageContainer>
        )
    }
}