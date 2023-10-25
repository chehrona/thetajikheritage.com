import { useContext, createContext, useMemo, useState, useEffect } from 'react';
import Header from "./components/common/header/Header";
import SideNav from "./components/common/sideNav/SideNav";
import Menu from './components/common/menu/Menu';
import Footer from './components/common/footer/Footer';
import AnimationRoutes from './components/common/animationRoutes/AnimationRoutes';

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
  const [lang, setLang] = useState('us'),
        [isPrint, setIsPrint] = useState(false),
        [isMenuShown, setIsMenuShown] = useState(null);

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

  return (
      <LangContext.Provider value={value}>
          <div className='content-container'>
              {!isPrint && <Header />}
              {!isPrint && <SideNav />}
              <Menu />
              <AnimationRoutes />
              {!isPrint && <Footer />}
          </div>
      </LangContext.Provider>
  );
}

export default App;
