import React from "react";
import DemoImage from "../../assets/img/florai-demo.png";

function DemoSection() {
  return (
    <div className="flex flex-col gap-6 p-4 py-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-base-900 tracking-wide mb-8">
        Apa Itu FlorAI?
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8">
        <img
          src={DemoImage}
          alt="FlorAI Demo"
          className="w-48 h-48 md:w-60 md:h-60 lg:w-70 lg:h-70 rounded-full shadow-md"
        />
        <div className="max-w-xl">
          <p className="text-sm md:text-md lg:text-lg text-center md:text-left">
            FlorAI adalah aplikasi berbasis Artificial Intelligence (AI) yang
            dirancang untuk mengklasifikasi berbagai jenis bunga dengan cepat
            dan akurat. Dengan teknologi Machine Learning, FlorAI mampu
            mengenali bunga hanya dari sebuah gambar dan memberikan informasi
            lengkap tentang spesiesnya.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DemoSection;
