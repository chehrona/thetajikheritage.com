import React from "react";
import { PoetCard, PoetImage, PoetImgContainer, PoetName } from "./poetBoxStyles";

export default function PoetBox() {
    return (
        <PoetCard>
            <PoetImgContainer>
                <PoetImage src={'/poetImages/Ayni.png'} />
                <PoetName>
                    Sadriddin Ayni
                </PoetName>
            </PoetImgContainer>
        </PoetCard>
    );
}