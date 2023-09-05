import React from 'react';

import {
    BoxOne,
    LeftContainer,
    RightContainer,
    ImgInfo,
    Year,
    Desc
} from './poetBioStyles';

export default function FirstBox({ poet }) {
    return (
        <BoxOne>
            <LeftContainer>
                <Year>{poet?.year}</Year>
                <Desc dangerouslySetInnerHTML={{__html: poet?.desc}} />
            </LeftContainer>
            <RightContainer src={poet?.slides.img} >
                <ImgInfo
                    up={true}
                    color={poet?.slides.color} dangerouslySetInnerHTML={{__html: poet?.slides.text}} 
                />
            </RightContainer>
        </BoxOne>
    )
}