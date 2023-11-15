import { useContext, createContext, useMemo, useState, useEffect, useRef } from 'react';
import Header from './components/common/header/Header';
import Menu from './components/common/menu/Menu';
import Footer from './components/common/footer/Footer';
import AnimationRoutes from './components/common/animationRoutes/AnimationRoutes';
import Flags from './components/common/flags/Flags';
import ScrollUpArrow from './components/common/scrollUpArrow/ScrollUpArrow';
import AdSense from './components/common/adSense/AdSense';

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
    const [position, setPosition] = useState(0);
    const [showArrow, setShowArrow] = useState(0);
    const [isPrint, setIsPrint] = useState(false);
    const [isMenuShown, setIsMenuShown] = useState(null);

    const value = useMemo(() => (
        {
            lang, setLang,
            isPrint, setIsPrint
        }
    ), [lang, isPrint]);

    const handleScroll = () => {
        const currentScrollPos = parentRef.current.scrollTop;
        const parentHeight = parentRef.current.getBoundingClientRect().height;

        if (currentScrollPos < position && currentScrollPos > parentHeight/2) {
            setShowArrow(1);
        } else {
            setShowArrow(0);
        }

        setPosition(currentScrollPos);
    }

    return (
        <LangContext.Provider value={value}>
            <div className='content-container' ref={parentRef} onScroll={handleScroll}>
                {!isPrint && <Header setIsMenuShown={setIsMenuShown} isMenuShown={isMenuShown} />}
                <Menu setIsMenuShown={setIsMenuShown} isMenuShown={isMenuShown} />
                <AnimationRoutes />
                <div className='fixed-container'>
                    {!isPrint && <Flags />}
                    {showArrow ? <ScrollUpArrow parentRef={parentRef} /> : null}
                </div>
                <AdSense />
                {!isPrint ? <Footer /> : null}
            </div>
        </LangContext.Provider>
    );
}

export default App;
