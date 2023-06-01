import React from "react";
import { useSetLang } from "../../App";
import BookshelfDesign from "../bookshelfDesign/BookshelfDesign";
import { Gap, MainContainer } from "./poetWorksStyles";

export default function PoetWorks({ poet }) {
    const { lang } = useSetLang();
    return (
        <MainContainer>
            <Gap></Gap>
            {poet?.works[lang].map((work, i) => {
                return (
                    <BookshelfDesign work={work}/>
                )
            })}
        </MainContainer>
    )
}