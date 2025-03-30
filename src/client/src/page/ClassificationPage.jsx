import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
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
  const resultRef = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFlowersData();
        setFlowerData(data.data);
      } catch (error) {
        console.error("Gagal mengambil data bunga:", error);
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
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Unggah gambar terlebih dahulu!",
        showConfirmButton: false,
        timer: 2000,
      });
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

      setTimeout(() => {
        smoothScrollTo(resultRef.current.offsetTop, 480); 
      }, 100);
    }, 2000);
  };
  const smoothScrollTo = (targetY, duration) => {
    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();
  
    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + difference * progress);
  
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  };

  return (
    <>
      <BackToHome />
      <div className="min-h-screen bg-gradient-to-b from-blue-90 via-blue-290 to-blue-400 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 w-full h-auto"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Definisi Linear Gradient */}
            <defs>
              <linearGradient
                id="blueGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="20%" stopColor="blue" /> {/* Biru Tua */}
                <stop offset="80%" stopColor="#6dd5ed" /> {/* Biru Muda */}
              </linearGradient>
            </defs>

            {/* Wave Background */}
            <path
              fill="url(#blueGradient)"
              fillOpacity="1"
              d="M0,256L60,250.7C120,245,240,235,360,234.7C480,235,600,245,720,240C840,235,960,213,1080,181.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        {/* Konten Utama */}
        <main className="flex-grow container mx-auto px-4 py-8 sm:py-12 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-6 sm:mb-8 md:mb-12 font-noto animate-fade-in-down">
            Selamat Datang, {user}!
          </h1>
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Area Unggah dan Pratinjau */}
            <div className="flex flex-col items-center gap-4 sm:gap-6 flex-1">
              <div className="w-full max-w-md">
                <label className="block mb-2 text-base sm:text-lg font-medium text-black-700 font-noto">
                  Unggah gambar
                </label>
                <div className="relative group">
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    className="file-input file-input-bordered file-input-primary w-full text-sm sm:text-base transition-all duration-300 hover:shadow-md hover:border-primary-focus"
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 group-hover:text-primary transition-colors duration-300">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
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

              <div className="w-full max-w-md relative flex flex-col items-center justify-center p-3 sm:p-6 rounded-xl bg-white shadow-md transition-all">
                <img
                  src={selectedImage}
                  alt=""
                  className="w-full h-48 sm:h-64 object-cover"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              {/* Area Kontrol dan Hasil */}
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                  <Button
                    name={isLoading ? "Classifying..." : "Klasifikasi Bunga"}
                    className={`btn btn-primary btn-md sm:btn-lg text-sm sm:text-base flex-1 transition-all duration-300 hover:shadow-lg ${
                      isLoading ? "loading" : ""
                    }`}
                    onClick={handleClassify}
                    disabled={isLoading || !selectedImage}
                  />
                  {selectedImage && (
                    <Button
                      name="Hapus Gambar"
                      className="btn btn-outline btn-error btn-md sm:btn-lg text-sm sm:text-base flex-1 transition-all duration-300 hover:shadow-lg hover:bg-error hover:text-white"
                      onClick={handleRemoveImage}
                    />
                  )}
                </div>
                {/* Placeholder atau Hasil */}
                <div className="w-full bg-base-100 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 mt-4 sm:mt-10" ref={resultRef}>
                  {classificationResult ? (
                    <div className="space-y-3 sm:space-y-4 animate-fade-in-up">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4 font-noto">
                        Hasil Klasifikasi Bunga
                      </h2>
                      <div className="overflow-x-auto">
                        <div className="space-y-2 sm:space-y-3">
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary">
                            Nama Bunga: {classificationResult.flowerName}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary">
                            Kemungkinan: {classificationResult.probability}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary">
                            Deskripsi: {classificationResult.description}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary">
                            Manfaat Kesehatan: {classificationResult.health_uses}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary">
                            Manfaat Budaya: {classificationResult.culture_uses}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary">
                            Tips Pencahayaan: {classificationResult.sunlight_tips}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary">
                            Tips Pengairan: {classificationResult.water_tips}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary">
                            Tips Media Tanam: {classificationResult.soil_tips}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary">
                            Habitat: {classificationResult.habitat}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary">
                            Status: {classificationResult.status}
                          </p>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary">
                            Wikipedia: {classificationResult.wikipedia}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-3 sm:space-y-4 py-4 sm:py-6">
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 font-noto">
                        Unggah gambar untuk mulai klasifikasi!
                      </p>
                      <div className="flex justify-center">
                        <svg
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary opacity-50"
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
                <div className="w-full bg-base-100 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-base sm:text-lg font-bold text-primary mb-2 sm:mb-3 font-noto">
                    Tips singkat
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    Untuk hasil terbaik, gunakan gambar bunga tunggal yang jelas
                    dan terang dengan latar belakang polos.
                  </p>
                </div>
              </div> 
            </div>
          </div>
        </main>

        {isLoading && (
          <div className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-base-100 p-4 sm:p-6 rounded-xl shadow-2xl flex flex-col items-center gap-3 sm:gap-4">
              <div className="loading loading-spinner loading-md sm:loading-lg text-primary"></div>
              <p className="text-base sm:text-lg font-noto text-primary animate-pulse">
                Memproses gambar...
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ClassificationPage;