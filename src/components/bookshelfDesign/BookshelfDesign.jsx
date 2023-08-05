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
                                    <Overlay open={overlay === book.title}>
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
                                    <Book data={book.title} src={book.cover} onClick={(e) => handleBookAction(e)}/>
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