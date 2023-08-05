import React, { useState } from "react";
import { useSetLang } from "../../App";
import BookshelfDesign from "../bookshelfDesign/BookshelfDesign";
import { Gap, MainContainer } from "./poetWorksStyles";

export default function PoetWorks({ poet }) {
    const { lang } = useSetLang();
    const [overlay, setOverlay] = useState(-1);
    const numBooks = poet?.works[lang].length;
    const shelfNum = Math.ceil(numBooks/4);

    function renderShelves(n){
        let shelves = [];
        for(let i = 0; i < n; i++) {
            shelves.push(<BookshelfDesign
                            overlay={overlay}
                            setOverlay={setOverlay}
                            shelfNum={i * 4}
                            work={poet.works[lang].slice(i * 4, (i + 1) * 4)}
                        />);
        }

        return shelves;
    }

    return (
        <MainContainer id='Works'>
            <Gap></Gap>
            {renderShelves(shelfNum)}
        </MainContainer>
    )
}