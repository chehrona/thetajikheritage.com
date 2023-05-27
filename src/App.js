import { useContext, createContext, useMemo, useState } from 'react';
import Header from './components/header/Header';
import SideNav from './components/sideNav/SideNav';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import AnimationRoutes from './components/animationRoutes/AnimationRoutes';

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

  return (
    <LangContext.Provider value={value}>
      {!isPrint && <Header />}
      {!isPrint && <SideNav />}
      <Menu />
      <AnimationRoutes />
      {!isPrint && <Footer />}
    </LangContext.Provider>
  );
}

export default App;
