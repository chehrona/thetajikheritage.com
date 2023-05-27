import React from "react";
import {useParams} from "react-router-dom";
// import "./finalPagesStyles.css";
import { poets } from "../../data/poetData";

import { 
    PageContainer,
    MainImage,
} from "./poetPageStyles";

export default function PoetPage() {
    const { id } = useParams(),
        poet = poets.filter((poet) => poet.id === id)[0];

    if (poet) {
        return (
            <PageContainer>
                <MainImage src={poet?.img} />
            </PageContainer>
        )
    }
}