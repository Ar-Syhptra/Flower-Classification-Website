import React from "react";
import Card from "../Card/Card";

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

      <div className="px-4 md:px-8 lg:px-16 pb-6 md:pb-10">
        <div className="flex flex-wrap justify-center gap-4">
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
  );
}

export default AboutFlower;
