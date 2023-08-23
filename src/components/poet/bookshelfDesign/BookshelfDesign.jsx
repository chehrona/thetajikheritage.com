import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import * as FileSaver from "file-saver";

import {
    Book,
    BooksContainer,
    Cuboid,
    CuboidFace,
    MainContainer,
    Shelf,
    BookWrapper,
    Overlay,
    StyledClearIcon,
    ActionIcon,
    CloseWrapper,
    ActionWrapper,
} from "./bookshelfDesignStyles";
import BookReader from "../bookReader/BookReader";

export default function BookshelfDesign({ shelfNum, work, overlay, setOverlay }) {
    const [openBook, setOpenBook] = useState(false);

    function handleBookAction(e) {
        const bookIndex = e.target.getAttribute("data");
        setOverlay(parseInt(bookIndex));
    }

    function openReader() {
        setOpenBook(true);
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
                                    <Overlay open={overlay === shelfNum + i}>
                                        <CloseWrapper>
                                            <StyledClearIcon onClick={() => setOverlay(null)}/>
                                        </CloseWrapper>
                                        <ActionWrapper>
                                            <ActionIcon src={'/bookIcons/smartphone.png'} onClick={openReader} />
                                        </ActionWrapper>
                                    </Overlay>
                                    <Book data={shelfNum + i} src={book.cover} onClick={(e) => handleBookAction(e)}/>
                                </BookWrapper>
                            </span>
                        </Tooltip>
                    )
                })}
            </BooksContainer>
            <Shelf />
            {openBook && <BookReader book={work[overlay - shelfNum]} setOpenBook={setOpenBook} setOverlay={setOverlay} />}
        </section>
    )
}