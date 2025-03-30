import React, { useState, useEffect, useRef } from "react";
import Button from "../components/Buttons/Button";
import BackToHome from "../components/Navbar/NavbarLogout";
import { fetchFlowersData } from "../api/data";

const user = localStorage.getItem("user");

const ClassificationPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [flowerData, setFlowerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFlowersData();
        setFlowerData(data.data);
      } catch (error) {
        console.error("Failed to fetch flower data:", error);
      }
    };
    fetchData();
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setClassificationResult(null);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setClassificationResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClassify = () => {
    if (!selectedImage) {
      alert("Unggah gambar terlebih dahulu!");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const flower = flowerData[0];
      setClassificationResult({
        flowerName: flower.name,
        probability: 0.95,
        description: flower.description,
        health_uses: flower.health_uses,
        culture_uses: flower.culture_uses,
        sunlight_tips: flower.sunlight_tips,
        water_tips: flower.water_tips,
        soil_tips: flower.soil_tips,
        habitat: flower.habitat,
        status: flower.status,
        wikipedia: flower.wikipedia,
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <BackToHome />
      <div className="min-h-screen bg-base-200 flex flex-col relative overflow-hidden">
        <main className="flex-grow container mx-auto px-4 py-12 sm:py-16 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-8 sm:mb-12 font-noto animate-fade-in-down">
            Selamat Datang, {user}!
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

              <div className="w-full max-w-md bg-base-100 p-6 rounded-xl shadow-lg border border-gray-200">
                {classificationResult ? (
                  <div className="space-y-4 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-noto">
                      Hasil Klasifikasi Bunga
                    </h2>
                    <p className="text-lg md:text-xl font-semibold text-primary">
                      Nama Bunga: {classificationResult.flowerName}
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-primary">
                      Kemungkinan: {classificationResult.probability}
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-primary">
                      Deskripsi: {classificationResult.description}
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-primary">
                      Manfaat Kesehatan: {classificationResult.health_uses}
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-primary">
                      Manfaat Budaya: {classificationResult.culture_uses}
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-primary">
                      Tips Pencahayaan: {classificationResult.sunlight_tips}
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-primary">
                      Tips Pengairan: {classificationResult.water_tips}
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-primary">
                      Tips Media Tanam: {classificationResult.soil_tips}
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-primary">
                      Habitat: {classificationResult.habitat}
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-primary">
                      Status: {classificationResult.status}
                    </p>
                    <p className="text-lg md:text-xl font-semibold text-primary">
                      Wikipedia: {classificationResult.wikipedia}
                    </p>
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

              <div className="w-full max-w-md bg-base-100 p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-primary mb-3 font-noto">
                  Tips singkat
                </h3>
                <p className="text-gray-600">
                  Untuk hasil terbaik, gunakan gambar bunga tunggal yang jelas
                  dan terang dengan latar belakang polos.
                </p>
              </div>
            </div>
          </div>
        </main>

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

