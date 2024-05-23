import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './Components/Footer';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import ScrollToTopButton from "./Components/ScrollToTopButton";


const App = () => { //changement function App() par const App = () => { ?
  return (
   
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </BrowserRouter>
 
  )
}

export default App;

//<Route path="/Contact" element={<Contact />} />
//import Contact from "./Pages/Contact";