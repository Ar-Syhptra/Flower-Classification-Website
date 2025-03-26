import React, { useState, useRef } from "react";
import Button from "../components/Button/Button";
import BackgroundPattern from "../components/Background";
import Navbar from "../components/Navbar/Navbar";

const user = localStorage.getItem("user");

const ClassificationPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  // Fungsi untuk menangani unggahan gambar
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setClassificationResult(null);
    }
  };

  // Fungsi untuk menghapus gambar
  const handleRemoveImage = () => {
    setSelectedImage(null);
    setClassificationResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Fungsi simulasi klasifikasi
  const handleClassify = () => {
    if (!selectedImage) {
      alert("Unggah gambar terlebih dahulu!");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setClassificationResult({
        flowerName: "Rose",
        probability: 0.95,
      });
      setIsLoading(false);
    }, 2000); // delay
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-200 flex flex-col relative overflow-hidden">
        {/* BG Patter */}
        {/* <BackgroundPattern /> */}

        {/* Konten Utama */}
        <main className="flex-grow container mx-auto px-4 py-12 sm:py-16 relative z-10">
          {/* Spacer untuk Navbar fixed */}
          <div className="h-20" />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-8 sm:mb-12 font-noto animate-fade-in-down">
          Selamat Datang, {user}!
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Area Unggah dan Pratinjau */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-full max-w-md">
                <label className="block mb-2 text-lg font-medium text-gray-700 font-noto">
                  Unggah gambar
                </label>
                <div className="relative group">
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    className="file-input file-input-bordered file-input-primary w-full transition-all duration-300 hover:shadow-md hover:border-primary-focus"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 group-hover:text-primary transition-colors duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="w-full max-w-md relative group">
                <img
                  src={selectedImage}
                  alt=""
                  className={`w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl shadow-lg transition-all duration-300 ${
                    !selectedImage ? "opacity-50 grayscale" : "opacity-100"
                  }`}
                  loading="lazy"
                />
                {selectedImage && (
                  <button
                    onClick={handleRemoveImage}
                    className="absolute top-3 right-3 btn btn-sm btn-circle btn-error opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                    aria-label="Hapus Gambar"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Area Kontrol dan Hasil */}
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <Button
                  name={isLoading ? "Classifying..." : "Klasifikasi Bunga"}
                  className={`btn btn-primary btn-lg flex-1 transition-all duration-300 hover:shadow-lg ${
                    isLoading ? "loading" : ""
                  }`}
                  onClick={handleClassify}
                  disabled={isLoading || !selectedImage}
                />
                {selectedImage && (
                  <Button
                    name="Hapus Gambar"
                    className="btn btn-outline btn-error btn-lg flex-1 transition-all duration-300 hover:shadow-lg hover:bg-error hover:text-white"
                    onClick={handleRemoveImage}
                  />
                )}
              </div>

              {/* Placeholder atau Hasil */}
              <div className="w-full max-w-md bg-base-100 p-6 rounded-xl shadow-lg border border-gray-200">
                {classificationResult ? (
                  <div className="space-y-4 animate-fade-in-up">
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 font-noto">
                      Hasil klasifikasi
                    </h2>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-lg md:text-xl">
                        Flower:{" "}
                        <span className="font-semibold text-primary">
                          {classificationResult.flowerName}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <p className="text-lg md:text-xl">
                        Confidence:{" "}
                        <span className="font-semibold text-primary">
                          {(classificationResult.probability * 100).toFixed(2)}%
                        </span>
                      </p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-primary h-3 rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${classificationResult.probability * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <p className="text-lg text-gray-600 font-noto">
                    Unggah gambar untuk mulai klasifikasi!
                    </p>
                    <div className="flex justify-center">
                      <svg
                        className="w-12 h-12 text-primary opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Tips atau Info Tambahan */}
              <div className="w-full max-w-md bg-base-100 p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-3 font-noto">
                  Tips singkat
                </h3>
                <p className="text-gray-600">
                Untuk hasil terbaik, gunakan gambar bunga tunggal yang jelas dan terang dengan latar belakang polos.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Overlay Loading */}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-base-100 p-6 rounded-xl shadow-2xl flex flex-col items-center gap-4">
              <div className="loading loading-spinner loading-lg text-primary"></div>
              <p className="text-lg font-noto text-primary animate-pulse">
                Analyzing your flower...
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ClassificationPage;
