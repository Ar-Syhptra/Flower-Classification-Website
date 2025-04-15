import Swal from "sweetalert2";
import React, { useState, useEffect, useRef } from "react";
import { fetchFlowersData } from "../api/data";
import Button from "../components/Buttons/Button";
import BackToHome from "../components/Navbar/NavbarLogout";
import Loading from "../components/Classification/Loading";
import InputImage from "../components/Classification/InputImage";
import ResultCard from "../components/Classification/ResultCard";
import TipsSection from "../components/Classification/TipsSection";

const user = localStorage.getItem("user");

const ClassificationPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [flowerData, setFlowerData] = useState(null);
  const resultRef = useRef(null);

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

  const classifyImage = async (imageFile) => {
    try {
      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      const base64Image = await toBase64(imageFile);
      const response = await fetch("https://ml.florai.my.id/api/classify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64Image }),
      });
      const data = await response.json();
      console.log("Prediksi:", data);
      return data;
    } catch (err) {
      console.error("Klasifikasi error:", err);
      return null;
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setSelectedFile(file);
      setClassificationResult(null);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setSelectedFile(null);
    setClassificationResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClassify = async () => {
    if (!selectedFile) {
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
    try {
      const result = await classifyImage(selectedFile);
      if (!result) throw new Error("Tidak ada hasil prediksi");
      const flowerIndex = result.predicted_class;
      const matchedFlower = flowerData[flowerIndex] || flowerData[0];
      setClassificationResult({
        flowerName: matchedFlower.name,
        probability: result.prediction[0][flowerIndex],
        description: matchedFlower.description,
        health_uses: matchedFlower.health_uses,
        culture_uses: matchedFlower.culture_uses,
        sunlight_tips: matchedFlower.sunlight_tips,
        water_tips: matchedFlower.water_tips,
        soil_tips: matchedFlower.soil_tips,
        habitat: matchedFlower.habitat,
        status: matchedFlower.status,
        wikipedia: matchedFlower.wikipedia,
      });
      setTimeout(() => {
        smoothScrollTo(resultRef.current.offsetTop, 480);
      }, 100);
    } catch (error) {
      console.error("Klasifikasi error:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal Klasifikasi",
        text: "Terjadi kesalahan saat mengklasifikasi gambar.",
      });
    } finally {
      setIsLoading(false);
    }
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
      <main className="min-h-screen bg-gradient-to-b from-primary/90 via-accent to-secondary to-70%">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-8">
            <header className="text-center">
              <h1 className="font-bold text-xl sm:text-2xl md:text:3xl lg:text-4xl text-white mb-2 drop-shadow-md">
                Selamat Datang, {user}!
              </h1>
              <p className="text-white text-sm sm:text-md md:text-lg lg:text-xl">
                Unggah gambar bunga untuk memulai Klasifikasi!
              </p>
            </header>

            <div
              className={`w-full transition-all duration-500 ease-in-out ${
                classificationResult
                  ? "flex flex-col md:flex-col lg:flex-row gap-4 "
                  : "max-w-lg md:max-w-xl lg:max-w-2xl"
              }`}
            >
              {/* Input Image Section */}
              <section
                className={`h-full bg-white backdrop-blur-md rounded-xl p-8 shadow-lg transition-all duration-500 ease-in-out
                ${classificationResult ? "grid" : "w-full"}`}
              >
                <InputImage
                  selectedImage={selectedImage}
                  handleImageUpload={handleImageUpload}
                  handleRemoveImage={handleRemoveImage}
                  fileInputRef={fileInputRef}
                />

                <div className="w-full grid grid-cols-1 md:flex lg:flex mt-6 items-center justify-center gap-1">
                  <Button
                    name={
                      isLoading ? "Mengklasifikasi..." : "Klasifikasi Gambar"
                    }
                    className={`bg-primary rounded-lg px-4 py-3 text-white font-semibold hover:bg-white hover:text-primary border transition-all text-sm md:text-md lg:text-[16px] w-full ${
                      isLoading ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                    onClick={handleClassify}
                    disabled={isLoading || !selectedImage}
                  />
                  {selectedImage && (
                    <Button
                      name="Hapus Gambar"
                      className="bg-red-500 rounded-lg px-4 py-3 text-white font-semibold hover:bg-white hover:text-red-500 hover:border border transition-all text-sm md:text-md lg:text-[16px] w-full"
                      onClick={handleRemoveImage}
                    />
                  )}
                </div>
              </section>

              {/* Result Card Section - Only shown after classification */}
              {classificationResult && (
                <div
                  className="flex md:flex bg-white backdrop-blur-md rounded-lg shadow-lg animate-slideIn h-full"
                  style={{
                    animation: "slideIn 0.10s  forwards",
                  }}
                >
                  <ResultCard
                    classificationResult={classificationResult}
                    resultRef={resultRef}
                  />
                </div>
              )}
            </div>

            {/* Tips Section */}
            {!classificationResult && (
              <div className="max-w-lg md:max-w-xl lg:max-w-2xl bg-primary/20 shadow-lg p-4 border-l-4 border-blue-600 rounded-xl">
                <TipsSection />
              </div>
            )}
          </div>
          <Loading isLoading={isLoading} />
        </div>
      </main>
    </>
  );
};

export default ClassificationPage;