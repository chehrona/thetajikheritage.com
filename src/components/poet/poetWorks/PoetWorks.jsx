import React, { useState } from "react";
import { useSetLang } from "../../../App";
import BookshelfDesign from "../bookshelfDesign/BookshelfDesign";
import { MainContainer } from "./poetWorksStyles";

export default function PoetWorks({ poet }) {
    const { lang } = useSetLang();
    const [overlay, setOverlay] = useState(null);

    const numBooks = poet[lang].length;
    const shelfNum = Math.ceil(numBooks/4);

    function renderShelves(n){
        let shelves = [];
        for (let i = 0; i < n; i++) {
            shelves.push(<BookshelfDesign
                            key={i}
                            overlay={overlay}
                            setOverlay={setOverlay}
                            shelfNum={i * 4}
                            work={poet[lang].slice(i * 4, (i + 1) * 4)}
                        />);
        }

        return shelves;
    }

    return (
        <MainContainer id='Works'>
            {renderShelves(shelfNum)}
        </MainContainer>
    )
}