import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Navbar from "./components/Navbar/Navbar";
import NotFoundPage from "./page/NotFoundPage";
import ClassificationPage from "./page/ClassificationPage";

import "./assets/styles/globals.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classification" element={<ClassificationPage />} />
        <Route path="*" element={<NotFoundPage />} />"
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
