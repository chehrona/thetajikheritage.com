import React from "react";
import {useParams} from "react-router-dom";
import { useSetLang } from "../../App";
import { poets } from "../../data/poetData";

import PoetSectionOne from "../../components/poetSectionOne/PoetSectionOne"; 

import { 
    PageContainer,
} from "./poetPageStyles";
import PoetBio from "../../components/poetBio/PoetBio";

export default function PoetPage() {
    const { id } = useParams(),
        poet = poets.filter((poet) => poet.id === id)[0];

    if (poet) {
        return (
            <PageContainer>
                <PoetSectionOne poet={poet} />
                <PoetBio poet={poet} />
            </PageContainer>
        )
    }
}