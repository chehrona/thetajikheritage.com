import React, { useState } from "react";
import { useSetLang } from "../../../App";
import { MainContainer } from "./politicStyles";

export default function Politics({ poet }) {
    const { lang } = useSetLang();
    const [overlay, setOverlay] = useState(null);

    return (
        <MainContainer id='Politics'>
        </MainContainer>
    )
}