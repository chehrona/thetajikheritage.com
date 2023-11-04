import { useContext, createContext, useMemo, useState, useEffect } from 'react';
import Header from "./components/common/header/Header";
import Menu from './components/common/menu/Menu';
import Footer from './components/common/footer/Footer';
import AnimationRoutes from './components/common/animationRoutes/AnimationRoutes';
import Flags from './components/common/flags/Flags';

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
        const tooltipText = document.querySelector(".tooltiptext");

        if (tooltip) {
            const tooltipTextRect = tooltipText.getBoundingClientRect();

            if (tooltipText) {
                const grandparentElement = tooltipText.parentElement.parentElement;
            
                if (grandparentElement) {
                    const grandparentBoundingBox = grandparentElement.getBoundingClientRect();

                    if (tooltipTextRect.x < 0) {
                        tooltipText.style.left = '0%';
                        tooltipText.style.right = 'auto';
                        tooltipText.style.transform = `translateX(0%)`;
                    } else if ((tooltipTextRect.x + tooltipTextRect.width) > window.outerWidth) {
                        tooltipText.style.right = '0%';
                        tooltipText.style.left = 'auto';
                        tooltipText.style.transform = `translateX(0%)`;
                    }

                    if (grandparentBoundingBox.y - (tooltipTextRect.y + tooltipTextRect.width) < 0) {
                        tooltip.classList.add('modified');
                        const computedStyle = window.getComputedStyle(tooltipText);
                        const transformValue = computedStyle.getPropertyValue('transform');

                        tooltipText.style.bottom = '0%';
                        tooltipText.style.transform = `${transformValue} translateY(115%)`;
                    }
                }
            }
        }
    }, [lang]);

    return (
        <LangContext.Provider value={value}>
            <div className='content-container'>
                {!isPrint && <Header />}
                {!isPrint && <Flags />}
                <Menu />
                <AnimationRoutes />
                {!isPrint && <Footer />}
            </div>
        </LangContext.Provider>
    );
}

export default App;
