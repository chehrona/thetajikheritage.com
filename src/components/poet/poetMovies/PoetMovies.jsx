import React, { useState } from "react";
import { useSetLang } from "../../../App";
import { MainContainer, MovieCard, Image, StyledIconButton, StyledExpand } from "./poetMovieStyles.js";

import MovieDialog from "../movieDialog/MovieDialog";

export default function PoetMovies({ poet }) {
    const { lang } = useSetLang();
    const [showMovieInfo, setShowMovieInfo] = useState(false);
    const [movieInfo, setMovieInfo] = useState(null);

    function handleMovieDialog(e, movie) {
        setShowMovieInfo(true);
        setMovieInfo(movie);
    }

    return (
        <MainContainer id="movies">
            {poet[lang].map((movie, i) => {
                return (
                    <MovieCard key={i}>
                        <Image src={movie.img} />
                        <StyledIconButton onClick={(e) => handleMovieDialog(e, movie)}>
                            <StyledExpand />
                        </StyledIconButton>
                    </MovieCard>
                )})
            }
            <MovieDialog movieInfo={movieInfo} showMovieInfo={showMovieInfo} setShowMovieInfo={setShowMovieInfo} />
        </MainContainer>
    );
}