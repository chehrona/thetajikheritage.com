import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import {
    Book,
    BooksContainer,
    Cuboid,
    CuboidFace,
    MainContainer,
    Shelf,
    BookWrapper,
    Overlay,
} from "./bookshelfDesignStyles";

export default function BookshelfDesign({ work }) {
    const [overlay, setOverlay] = useState();

    function handleBookAction(e) {
        const bookIndex = e.target.getAttribute("data");
        setOverlay(bookIndex);
    }
    return (
        <section>
            <MainContainer>
                <Cuboid>
                    <CuboidFace />
                </Cuboid>
            </MainContainer>
            <BooksContainer>
                {work?.map((book, i) => {
                    return (
                        <Tooltip key={i} title={book.title} placement="top" arrow>
                            <span>
                                <BookWrapper>
                                    {overlay === i && <Overlay open={overlay === i}>
                                        I am here!!!!!!!!!!!!!!
                                    </Overlay>}
                                    <Book data={i} src={book.cover} onClick={(e) => handleBookAction(e)}/>
                                </BookWrapper>
                            </span>
                        </Tooltip>
                    )
                })}
            </BooksContainer>
            <Shelf />
        </section>
    )
}