import React from "react";

import { BoxOne, LeftWrapper, Year, Desc, RightWrapper, Image, ImgInfo } from "./poetBioStyles";

export default function FirstBox({ poet }) {
    return (
        <BoxOne>
            <LeftWrapper>
                <Year>{poet?.year}</Year>
                <Desc dangerouslySetInnerHTML={{__html: poet?.desc}} />
            </LeftWrapper>
            <RightWrapper>
                <Image src={poet?.img}/>
                <ImgInfo color={'#0F0A00'} dangerouslySetInnerHTML={{__html: poet?.text}} />
            </RightWrapper>
        </BoxOne>
    )
}