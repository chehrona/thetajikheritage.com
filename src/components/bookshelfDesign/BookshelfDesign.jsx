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

export default function BookshelfDesign({ shelfNum, work, overlay, setOverlay }) {
    function handleBookAction(e) {
        const bookIndex = e.target.getAttribute("data");
        setOverlay(parseInt(bookIndex));
    }

    function handleDownload(e) {
        const pdfExternalLink = e.target.getAttribute('data');
        const fileName = e.target.getAttribute('name');
        const a = document.createElement('a');
        a.setAttribute('href', pdfExternalLink);
        a.setAttribute('download', fileName);
        a.click();

        setOverlay(null);
    };

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
                                            <ActionIcon
                                                src={'/bookIcons/pdf.png'}
                                                margin={'true'}
                                                data={book.link}
                                                name={book.title}
                                                onClick={(e) => handleDownload(e)}
                                            />
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