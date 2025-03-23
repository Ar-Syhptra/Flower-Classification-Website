import React from "react";
import Card from "../Card";

function AboutFlower() {
  const cards = [
    {
      title: "Mudah Digunakan",
      description:
        "Antarmuka yang ramah pengguna, cukup unggah gambar bunga dan dapatkan hasilnya.",
    },
    {
      title: "Akurasi Tinggi",
      description:
        "Menggunakan teknologi AI yang canggih untuk klasifikasi bunga dengan akurasi tinggi.",
    },
    {
      title: "Informasi Lengkap",
      description:
        "Menampilkan informasi detail tentang spesies bunga berdasarkan hasil klasifikasi AI.",
    },
  ];
  return (
    <div className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-primary to-secondary">
      <div className="flex justify-center text-center py-6 md:py-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-[1000] tracking-wide text-base-100">
          Kenapa Menggunakan FlorAI?
        </h2>
      </div>

      {/* Cards Container */}
      <div className="px-4 md:px-8 lg:px-16 pb-6 md:pb-10">
        {/* Mobile & Tablet Scrollable View (visible on screens smaller than lg) */}
        <div className="lg:hidden w-full overflow-x-auto pb-4">
          <div className="flex flex-row gap-4 min-w-max px-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 w-64 md:w-72 bg-white rounded-lg shadow-md"
              >
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-center text-sm md:text-base text-gray-700 ">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View (only visible on lg screens and above) */}
        <div className="hidden lg:flex justify-center text-center">
          <div className="grid grid-cols-3 gap-8 lg:gap-10">
            {cards.map((card, index) => (
              <Card
                key={index}
                cardTittle={card.title}
                cardDescription={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFlower;
