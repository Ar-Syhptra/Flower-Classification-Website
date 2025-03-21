import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage";
import NotFoundPage from "./page/NotFoundPage";
import ClassificationPage from "./page/ClassificationPage";

import "./assets/styles/globals.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/classification" element={<ClassificationPage />} />
        <Route path="*" element={<NotFoundPage />} />"
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
