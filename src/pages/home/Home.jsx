import React, { useState, useEffect, useRef } from "react";
import { stepInfo } from "../../components/homeStepper/helper";

import HomeStepper from '../../components/homeStepper/HomeStepper';
import ImageBall from '../../components/imageBall/ImageBall';

import { InnerContainer, PageContainer, SphereTest } from './homePageStyles';

function Home() {
    const parentRef = useRef(null);
    const containerRef = useRef(null);
    const divRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const [opacities, setOpacities] = useState([1, 0, 0, 0, 0]);
    let newArr = [...stepInfo];
    const lastItem = newArr.pop();
    newArr.unshift(lastItem);
    const [visibleSteps, setVisibleSteps] = useState([...newArr]);

    useEffect(() => {
        const handleScroll = () => {
            const containerRect = containerRef.current.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerBottom = containerRect.bottom;

            const newOpacities = divRefs.map((ref, index) => {
                const divRect = ref.current.getBoundingClientRect();
                const divTop = divRect.top;
                const divBottom = divRect.bottom;

                if (divBottom < containerTop || divTop > containerBottom) {
                    return 0;
                } else {
                    const opacity = 1 - (Math.abs(containerTop - divTop) / (0.8 * containerRect.height));
                    return opacity;
                }
            });

            setOpacities(newOpacities);
        }

        const handleKeyDown = (e) => {
            if (e.keyCode === 38) {
                if (visibleSteps.length > 1) {
                    const movedItem = visibleSteps.pop();
                    visibleSteps.unshift(movedItem);
                    setVisibleSteps([...visibleSteps]);
                }
            } else if (e.keyCode === 40) {
                if (visibleSteps.length > 1) {
                    const movedItem = visibleSteps.shift();
                    visibleSteps.push(movedItem);
                    setVisibleSteps([...visibleSteps]);
                }
            }
        }

        containerRef.current.addEventListener('scroll', handleScroll);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <PageContainer>
            <InnerContainer ref={parentRef}>
                <HomeStepper containerRef={containerRef} divRefs={divRefs} opacities={opacities} />
                {stepInfo?.map((entry, i) => {
                    return (
                        <ImageBall key={i} entry={entry} index={i} opacities={opacities} />
                    );
                })}
            </InnerContainer>
        </PageContainer>
    );
}

export default Home;