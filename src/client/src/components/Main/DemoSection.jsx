import React from "react";

function DemoSection() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-10">
        <h2 className="text-2xl font-bold text-center mb-10">Demo FlorAI</h2>
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_960_720.jpg"
            alt="robot"
            className="w-60 h-60 object-cover rounded-full"
          />
          <p className="text-center mt-5">
            FlorAI adalah sebuah aplikasi yang dapat membantu Anda
            mengidentifikasi berbagai jenis bunga. Kami menggunakan teknologi
            machine learning untuk mempelajari pola-pola dari data bunga yang
            telah dikumpulkan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DemoSection;
