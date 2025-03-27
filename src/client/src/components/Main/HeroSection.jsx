import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroBackground from "../../assets/img/watering-plant.svg";

function HeroSection() {
  const navigate = useNavigate();
  const [hasRemembered, setHasRemembered] = useState(false);

  useEffect(() => {
    const rememberedUsername = localStorage.getItem("rememberedUsername");
    setHasRemembered(!!rememberedUsername);
  }, []);

  const handleStart = () => {
    if (hasRemembered) {
      navigate("/classification");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="hero-content px-10 md:px-24 lg:px-23 gap-2 md:gap-4 lg:gap-6 flex-col lg:flex-row-reverse">
        <img
          src={HeroBackground}
          alt="hero-section"
          className="drop-shadow-md w-60 md:w-72 lg:w-80"
        />
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[1000] tracking-tight mb-6 leading-tight text-base-100">
            Pelajari Berbagai Jenis Bunga dengan FlorAI
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-[#ebf2fa] mt-6 leading-relaxed tracking-normal max-w-xl">
            FlorAI adalah aplikasi berbasis AI yang dapat membantu Anda
            mengklasifikasi berbagai jenis bunga secara instan menggunakan
            teknologi Machine Learning.
          </p>
          <button
            onClick={handleStart}
            className="btn md:btn-md lg:btn-lg btn-primary mt-6 py-3 text-base-100 rounded-lg"
          >
            Mulai Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
