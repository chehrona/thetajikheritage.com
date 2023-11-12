import { useContext, createContext, useMemo, useState, useEffect, useRef } from 'react';
import Header from './components/common/header/Header';
import Menu from './components/common/menu/Menu';
import Footer from './components/common/footer/Footer';
import AnimationRoutes from './components/common/animationRoutes/AnimationRoutes';
import Flags from './components/common/flags/Flags';
import Tooltip from './components/common/tooltip/Tooltip';

const LangContext = createContext({
    lang: 'us',
    setLang: () => {},
    isMenuShown: null,
    setIsMenuShown: () => {},
    isPrint: false,
    setIsPrint: () => {},
});

export function useSetLang() {
    return useContext(LangContext);
}

function App() {
    const [lang, setLang] = useState('us');
    const [isPrint, setIsPrint] = useState(false);
    const [anchor, setAnchor] = useState(null);
    const [tooltipText, setTooltipText] = useState(null);
    const [isMenuShown, setIsMenuShown] = useState(null);

    const value = useMemo(() => (
        {
            lang, setLang,
            isMenuShown, setIsMenuShown,
            isPrint, setIsPrint
        }
    ), [lang, isMenuShown, isPrint]);

    useEffect(() => {
        if (isMenuShown) {
            document.querySelector('.content-container').style.overflowY = 'hidden';
        } else {
            document.querySelector('.content-container').style.overflowY = 'scroll';
        }
    }, [isMenuShown]);

    useEffect(() => {
        const tooltip = document.querySelector(".tooltip");
        const container = document.querySelector('.content-container');

        if (tooltip) {
            const tooltipText = document.querySelector(".tooltiptext");
            const grandparentElement = tooltipText.parentElement.parentElement;

            setTooltipText(tooltipText.innerHTML);
            setAnchor(tooltip);
        }
    }, [lang]);

    return (
        <LangContext.Provider value={value}>
            <div className='fixed-container'>
                <div className='content-container'>
                    <Tooltip anchor={anchor} text={tooltipText} />
                    {!isPrint && <Header />}
                    {!isPrint && <Flags />}
                    <Menu />
                    <AnimationRoutes />
                    {!isPrint && <Footer />}
                </div>
            </div>
        </LangContext.Provider>
    );
}

export default App;
