import { useContext, createContext, useMemo, useState } from 'react';
import Home from './pages/home/Home'
import { Routes, Route } from "react-router-dom"
import Cuisine from './pages/cuisine/Cuisine';
import Customs from './pages/customs/Customs';
import Arts from './pages/arts/Arts';
import Language from './pages/language/Language';
import History from './pages/history/History';

const LangContext = createContext({
    lang: 'us',
    setLang: () => {},
    isMenuShown: 'us',
    setIsMenuShown: () => {},
});

export function useSetLang() {
  return useContext(LangContext);
}

function App() {
  const [lang, setLang] = useState('us'),
        [isMenuShown, setIsMenuShown] = useState(false);

  const value = useMemo(() => (
    {
      lang, setLang,
      isMenuShown, setIsMenuShown
    }
  ), [lang, isMenuShown]);

  return (
    <LangContext.Provider value={value}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/искусства" element={<Arts />} />
          <Route path="/customs" element={<Customs />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/language" element={<Language />} />
          <Route path="/history" element={<History />} />
       </Routes>
    </LangContext.Provider>
  );
}

export default App;
