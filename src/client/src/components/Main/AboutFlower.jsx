import React from "react";

function AboutFlower() {
  const sizeCard = {
    fontTitle:
      "text-md md:text-lg lg:text-xl font-bold tracking-wide text-base-900 text-center  ",
    fontDescription: "text-sm md:text-md lg:text-lg text-center w-full",
  };

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
    <div className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-primary to-secondary">
      <div className="flex justify-center items-center p-4 md:p-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-[1000] tracking-wide text-base-100">
          Kenapa Menggunakan FlorAI?
        </h2>
      </div>

      {/* Cards Container Responsive: Hp, Tablet, Desktop */}
      <div className="grid md:grid-cols-3 lg:flex justify-baseline gap-4 px-20 md:px-8 lg:px-20 mb-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex md:flex-col lg:flex lg:flex-col items-center p-8 md:p-10 lg:p-10 bg-base-100 transition-all duration-500 rounded-lg gap-4 shadow-md hover:shadow-xl "
          >
            <div className={`${sizeCard.fontTitle}`}>{card.title}</div>
            <p className={sizeCard.fontDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutFlower;
