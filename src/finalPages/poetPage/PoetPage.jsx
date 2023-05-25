import React, {useState} from "react";
import {useParams} from "react-router-dom";
import { useSetLang } from "../../App";
// import "./finalPagesStyles.css";
import { poets } from "../../data/poetData";

import { 
    PageContainer,
    MainImage,
} from "./poetPageStyles";

export default function PoetPage() {
    const { id } = useParams(),
          { isMenuShown } = useSetLang(),
          poet = poets.filter((poet) => poet.id === id)[0];

    if (poet && !isMenuShown) {
        return (
            <PageContainer>
                <MainImage src={poet?.img} />
            </PageContainer>
        )
    }
}