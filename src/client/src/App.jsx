import "./assets/styles/globals.css";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load untuk halaman
const HomePage = lazy(() => import("./page/HomePage"));
const LoginPage = lazy(() => import("./page/LoginPage"));
const RegisterPage = lazy(() => import("./page/RegisterPage"));
const NotFoundPage = lazy(() => import("./page/NotFoundPage"));
const ClassificationPage = lazy(() => import("./page/ClassificationPage"));

// Komponen Loading Fallback
const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
    <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
    <p className="text-xl font-poppins text-primary ">FlorAI is Loading...</p>
  </div>
);

function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/classification" element={<ClassificationPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
