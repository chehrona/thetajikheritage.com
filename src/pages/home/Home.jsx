import React, { useState, useEffect, useRef } from "react";
import { stepInfo } from "../../components/homeStepper/helper";
import { useSetLang } from "../../App";

import HomeStepper from '../../components/homeStepper/HomeStepper';
import ImageBall from '../../components/imageBall/ImageBall';

import { PageContainer } from './homePageStyles';

function Home() {
    let newArr = [...stepInfo];
    const lastItem = newArr.pop();
    newArr.unshift(lastItem);
    const [visibleSteps, setVisibleSteps] = useState([...newArr]);
    const parentRef = useRef(null);
    const [fontSize, setFontSize] = useState();
    const { lang } = useSetLang();


    useEffect(() => {
        let baseFont = 7.8;
        const length = visibleSteps[1].text[lang]?.length;
        if (length > 18) {
            baseFont = (length/24) * 7.8;
        } else if (length > 14) {
            baseFont = (length/21.18) * 7.8;
        } else if (length <= 7) {
            baseFont = 9.2;
        }

        setFontSize(baseFont);
    }, [lang, visibleSteps]);

    useEffect(() => {
        const container = parentRef.current;
    
        const handleWheel = (e) => {
            if (e.deltaY < 0) {
                if (visibleSteps.length > 1) {
                    const movedItem = visibleSteps.pop();
                    visibleSteps.unshift(movedItem);
                    setVisibleSteps([...visibleSteps]);
                }
            } else if (e.deltaY > 0) {
                if (visibleSteps.length > 1) {
                    const movedItem = visibleSteps.shift();
                    visibleSteps.push(movedItem);
                    setVisibleSteps([...visibleSteps]);
                }
            }
        };
    
        container.addEventListener('wheel', handleWheel);
    
        return () => {
          container.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <PageContainer ref={parentRef}>
            <HomeStepper fontSize={fontSize} visibleSteps={visibleSteps} />
            <ImageBall outerSpheres={visibleSteps[1].outer} innerSpheres={visibleSteps[1].inner} />
        </PageContainer>
    );
}

export default Home;