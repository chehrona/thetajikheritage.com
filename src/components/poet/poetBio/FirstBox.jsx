import React from "react";

import { BoxOne, LeftWrapper, Year, Desc, RightWrapper, Image, ImageDesc } from "./poetBioStyles";

export default function FirstBox({ poet }) {
    return (
        <BoxOne>
            <LeftWrapper>
                <Year>{poet?.year}</Year>
                <Desc dangerouslySetInnerHTML={{__html: poet?.desc}} />
            </LeftWrapper>
            <RightWrapper>
                <Image src={poet?.img}/>
                <ImageDesc>{poet?.imgDesc}</ImageDesc>
            </RightWrapper>
        </BoxOne>
    )
}