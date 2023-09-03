import React from "react";
import { BoxSix, YearBig } from "./poetBioStyles";

export default function SixthBox({ poet }) {
    return (
        <BoxSix>
            <YearBig color={true}>{poet?.year}</YearBig>
            <div>{poet?.desc}</div>
        </BoxSix>
    );
}