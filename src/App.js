import { useContext, createContext, useMemo, useState } from 'react';
import Home from './pages/home/Home'
import { Routes, Route } from "react-router-dom"
import Cuisine from './pages/cuisine/Cuisine';
import Customs from './pages/customs/Customs';
import Arts from './pages/arts/Arts';
import Language from './pages/language/Language';
import History from './pages/history/History';
import Header from './components/header/Header';
import SideNav from './components/sideNav/SideNav';
import Menu from './components/menu/Menu';
import RecipePage from './finalPages/recipePage/RecipePage';
import Footer from './components/footer/Footer';
import RecipePagePrint from './finalPages/recipePage/RecipePagePrint';
import PoetPage from './finalPages/poetPage/PoetPage';

const LangContext = createContext({
    lang: 'us',
    setLang: () => {},
    isMenuShown: false,
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
        [isMenuShown, setIsMenuShown] = useState(false);

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
      {isMenuShown && <Menu />}
        <Routes>
          <Route path="/arts" element={<Arts />} />
          <Route path="/customs" element={<Customs />} />
          <Route path="/cuisine/:id" element={<RecipePage />} />
          <Route path="/cuisine/:id/print" element={<RecipePagePrint />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/language" element={<Language />} />
          <Route path="/language/poets/:id" element={<PoetPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/" element={<Home />} />
       </Routes>
       {!isPrint && <Footer />}
    </LangContext.Provider>
  );
}

export default App;
