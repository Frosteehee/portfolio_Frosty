import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ThemeSwitcher from "./Components/ThemeSwitcher";
import Home from "./Pages/Home";
//import Error from "./Pages/Error";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./Components/LanguageSwitcher";

const App = () => {
  return (
    <Router>
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
          </Routes>
        </AnimatePresence>
        <ScrollToTopButton />
        <Footer />
      </LanguageProvider>
    </Router>
  );
};

export default App;