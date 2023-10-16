import React, { useState, useEffect, useRef } from "react";
import { stepInfo } from "../../components/homeStepper/helper";

import HomeStepper from '../../components/homeStepper/HomeStepper';
import ImageBall from '../../components/imageBall/ImageBall';

import { InnerContainer, PageContainer } from './homePageStyles';

function Home() {
    let newArr = [...stepInfo];
    const lastItem = newArr.pop();
    newArr.unshift(lastItem);
    const [visibleSteps, setVisibleSteps] = useState([...newArr]);
    const parentRef = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const container = parentRef.current;
    
        const handleWheel = (e) => {
            const scrollPosition = container.clientHeight;
            ;

            // if (scrollPosition <= portViewHeight) {
            //     setMoveRatio(28 / portViewHeight);
            //     setCustomStyle(prevState => ({
            //             ...prevState,
            //             two: {
            //             transform: `translateX(${scrollPosition * moveRatio}px)`
            //         }
            //     }));
            // }

            if (e.deltaY < 0) {
                if (visibleSteps.length > 1) {
                    const movedItem = visibleSteps.pop();
                    visibleSteps.unshift(movedItem);
                    setVisibleSteps([...visibleSteps]);

                    console.log(scrollPosition, 'down')
                }
            } else if (e.deltaY > 0) {
                if (visibleSteps.length > 1) {
                    const movedItem = visibleSteps.shift();
                    visibleSteps.push(movedItem);
                    setVisibleSteps([...visibleSteps]);

                    console.log(scrollPosition, 'up')

                }
            }

            // setMoveRatio(180 / portViewHeight);
            // setCustomStyle(prevState => ({
            //     ...prevState,
            //     two: {
            //     transform: `translateX(28px) rotateY(${(scrollPosition - 2 * portViewHeight) * moveRatio}deg)`
            //     }
            // }));
        };

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


        document.addEventListener('keydown', handleKeyDown);
        container.addEventListener('wheel', handleWheel);
    
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            container.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const handleScroll = (e) => {
        e.preventDefault();
        setCount((prevState) => prevState + 1);
        console.log(count, "window")
    }

    return (
        <PageContainer>
            <InnerContainer ref={parentRef} onWheel={(e) => handleScroll(e)}>
                <HomeStepper visibleSteps={visibleSteps} />
                <ImageBall outerSpheres={visibleSteps[1].outer} innerSpheres={visibleSteps[1].inner} />
            </InnerContainer>
        </PageContainer>
    );
}

export default Home;