import React, { useState, useEffect } from "react";

import HomeStepper from '../../components/homeStepper/HomeStepper';
import ImageBall from '../../components/imageBall/ImageBall';

import { PageContainer } from './homePageStyles';

function Home() {
    return (
        <PageContainer>
            <HomeStepper />
            <ImageBall />
        </PageContainer>
    );
}

export default Home;