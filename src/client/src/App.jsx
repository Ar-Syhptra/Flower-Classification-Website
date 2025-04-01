import "./assets/styles/globals.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/Loaders/LoadingSpinner";
import ClassificationMiddleware from "./middleware/ClassificationMiddleware";

// Lazy load untuk halaman
const HomePage = lazy(() => import("./page/HomePage"));
const LoginPage = lazy(() => import("./page/LoginPage"));
const RegisterPage = lazy(() => import("./page/RegisterPage"));
const NotFoundPage = lazy(() => import("./page/NotFoundPage"));
const ClassificationPage = lazy(() => import("./page/ClassificationPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/classification"
            element={
              <ClassificationMiddleware>
                <ClassificationPage />
              </ClassificationMiddleware>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
