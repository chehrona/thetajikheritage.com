import React from "react";
import { BoxSix, YearBig } from "./poetBioStyles";

export default function SixthBox({ poet }) {
    return (
        <BoxSix>
            <YearBig color={1}>{poet?.year}</YearBig>
            <div dangerouslySetInnerHTML={{__html: poet?.desc}}></div>
        </BoxSix>
    );
}