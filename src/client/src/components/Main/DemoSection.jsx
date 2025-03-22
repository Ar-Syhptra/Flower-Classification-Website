import React from "react";

function DemoSection() {
  return (
    <div className="min-h-80 flex flex-col md:grid-cols-1 lg:grid-cols-1 gap-6 p-4 ">
      <div className="pt-10 bg-base-100">
        <h2 className="text-2xl md:text-2xl lg:text-3xl font-[1000] text-center text-base-900 tracking-wide">
          Apa Itu FlorAI?
        </h2>
      </div>

      <div className="flex flex-row justify-center items-center gap-10">
        <div className="skeleton w-5xl h-30 rounded-full md:w-2xl md:h-54 lg:w-80 lg:h-80"></div>
        <p className="max-w-xl text-md md:text-md lg:text-xl">
          FlorAI adalah aplikasi berbasis Artificial Intelligence (AI) yang
          dirancang untuk mengklasifikasi berbagai jenis bunga dengan cepat dan
          akurat. Dengan teknologi Machine Learning, FlorAI mampu mengenali
          bunga hanya dari sebuah gambar dan memberikan informasi lengkap
          tentang spesiesnya.
        </p>
      </div>
    </div>
  );
}

export default DemoSection;
