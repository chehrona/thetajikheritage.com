import { useContext, createContext, useMemo, useState, useEffect, useRef } from 'react';
import Header from './components/common/header/Header';
import Menu from './components/common/menu/Menu';
import Footer from './components/common/footer/Footer';
import AnimationRoutes from './components/common/animationRoutes/AnimationRoutes';
import Flags from './components/common/flags/Flags';
import Tooltip from './components/common/tooltip/Tooltip';
import ScrollUpArrow from './components/common/scrollUpArrow/ScrollUpArrow';

const LangContext = createContext({
    lang: 'us',
    setLang: () => {},
    isPrint: false,
    setIsPrint: () => {},
});

export function useSetLang() {
    return useContext(LangContext);
}

function App() {
    const [lang, setLang] = useState('us');
    const parentRef = useRef(null);
    const [position, setPosition] = useState({left: 0, right: 0});
    const [isPrint, setIsPrint] = useState(false);
    const [anchor, setAnchor] = useState(null);
    const [tooltipText, setTooltipText] = useState(null);
    const [isMenuShown, setIsMenuShown] = useState(null);

    const value = useMemo(() => (
        {
            lang, setLang,
            isPrint, setIsPrint
        }
    ), [lang, isPrint]);

    useEffect(() => {
        const parentContainer = parentRef.current.getBoundingClientRect();

        setPosition({left: parentContainer.x, right: parentContainer.x + parentContainer.width});
    }, []);

    return (
        <LangContext.Provider value={value}>
            <div className='content-container' ref={parentRef}>
                <Tooltip anchor={anchor} text={tooltipText} />
                {!isPrint && <Header setIsMenuShown={setIsMenuShown} isMenuShown={isMenuShown} />}
                {!isPrint && <Flags position={position} />}
                <Menu setIsMenuShown={setIsMenuShown} isMenuShown={isMenuShown} />
                <AnimationRoutes />
                <ScrollUpArrow position={position} />
                {!isPrint && <Footer />}
            </div>
        </LangContext.Provider>
    );
}

export default App;
