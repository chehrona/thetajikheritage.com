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
    StyledClearIcon,
    ActionIcon,
    CloseWrapper,
    ActionWrapper,
} from "./bookshelfDesignStyles";

export default function BookshelfDesign({ shelfNum, work, overlay, setOverlay }) {
    function handleBookAction(e) {
        const bookIndex = e.target.getAttribute("data");
        setOverlay(parseInt(bookIndex));
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
                                            <ActionIcon src={'/bookIcons/smartphone.png'} />
                                        </ActionWrapper>
                                        <ActionWrapper>
                                            <ActionIcon src={'/bookIcons/pdf.png'} margin={'true'}/>
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
        </section>
    )
}