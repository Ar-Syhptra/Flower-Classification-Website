import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Navbar from "./components/Navbar/Navbar";
import NotFoundPage from "./page/NotFoundPage";
import ClassificationPage from "./page/ClassificationPage";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import "./assets/styles/globals.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />"
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/classification" element={<ClassificationPage />} />
      </Routes>
    </>
  );
}

export default App;
