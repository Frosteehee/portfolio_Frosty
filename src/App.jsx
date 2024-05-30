import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ThemeSwitcher from "./Components/ThemeSwitcher";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./Components/LanguageSwitcher";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Contact from "./Components/Contact"; 

const App = () => {
  const basename = import.meta.env.MODE === "production" ? "/portfolio_Frosty" : "";
  return (
    <BrowserRouter basename= {basename}>
      <LanguageProvider>
        <ThemeSwitcher />
        <Header />
        <LanguageSwitcher />
        <AnimatePresence>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/contact" // Test formulaire
              element={<Contact />}
            />
           
            <Route  
              path="*"
              element={<Error />}
            />
          </Routes>
        </AnimatePresence>
        <ScrollToTopButton />
        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
