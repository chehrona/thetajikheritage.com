import React, { useState, useEffect } from "react";

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
    Cursor,
    CursorImg,
} from "./bookshelfDesignStyles";
import BookReader from "../bookReader/BookReader";

export default function BookshelfDesign({ shelfNum, work, overlay, setOverlay }) {
    const [openBook, setOpenBook] = useState(false);
    const [customCursor, setCustomCursor] = useState(false);
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const mouseMove = (e) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        });

        return window.removeEventListener("mousemove", mouseMove);
    };

    window.addEventListener("mousemove", mouseMove);

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y
        }
    }

    function handleBookAction(e) {
        const bookIndex = e.target.getAttribute("data");
        setOverlay(parseInt(bookIndex));
    }

    function openReader() {
        setOpenBook(true);
    }

    return (
        <section>
            <MainContainer
                onMouseLeave={() => setCustomCursor(false)}
                onMouseEnter={() => setCustomCursor(true)}
            >
                <Cuboid>
                    <CuboidFace />
                </Cuboid>
            </MainContainer>
            <BooksContainer>
                {customCursor && 
                    <Cursor variants={variants} animate="default">
                        <CursorImg src="/cursor.svg" />
                    </Cursor>
                }
                {work?.map((book, i) => {
                    return (
                        <BookWrapper key={i}>
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
                    )
                })}
            </BooksContainer>
            <Shelf />
            {openBook && <BookReader book={work[overlay - shelfNum]} setOpenBook={setOpenBook} setOverlay={setOverlay} />}
        </section>
    )
}