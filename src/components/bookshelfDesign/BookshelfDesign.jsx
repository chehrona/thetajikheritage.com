import React from "react";
import "./bookshelfDesignStyles.css";
import { useSetLang } from "../../App";

export default function BookshelfDesign({ work }) {
    const { lang } = useSetLang();
    return (
        <section>
            <div class="container">
                <div class="cuboid">
                <div class="cuboid__face cuboid__face--bottom"></div>
                </div>
            </div>
            <div class="books-container">
                {work?.map((book, i) => {
                    return (
                        <img class="book" key={i} src={book.cover} />
                    )
                })}
            </div>
            <div class="floor-thickness"></div>
        </section>
    )
}