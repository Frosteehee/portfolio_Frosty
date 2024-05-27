import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Footer from './Components/Footer';
import Header from "./Components/Header";
import ThemeSwitcher from './Components/ThemeSwitcher';
import Home from './Pages/Home';
import Error from './Pages/Error';
import ScrollToTopButton from "./Components/ScrollToTopButton";
import { LanguageProvider } from './context/LanguageContext';
import LanguageSwitcher from './Components/LanguageSwitcher'; 

const App = () => {
  return (
    <BrowserRouter>
       
      <LanguageProvider>
      <ThemeSwitcher />
        <Header />
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="*" element={<Error />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
    </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;


