import "./assets/styles/globals.css";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import NotFoundPage from "./page/NotFoundPage";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import ClassificationPage from "./page/ClassificationPage";

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
