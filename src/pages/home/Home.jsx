import React, { useState, useEffect, useRef } from "react";
import { stepInfo } from "../../components/homeStepper/helper";

import HomeStepper from '../../components/homeStepper/HomeStepper';
import ImageBall from '../../components/imageBall/ImageBall';

import { InnerContainer, PageContainer } from './homePageStyles';

function Home() {
    const parentRef = useRef(null);

    return (
        <PageContainer>
            <InnerContainer ref={parentRef}>
                <HomeStepper />
                {/* <ImageBall outerSpheres={visibleSteps[1].outer} innerSpheres={visibleSteps[1].inner} /> */}
            </InnerContainer>
        </PageContainer>
    );
}

export default Home;