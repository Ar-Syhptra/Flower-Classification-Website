import React from "react";
import { Upload, Cpu, FileText } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="text-green-600" />,
      number: "1️⃣",
      title: "Unggah Gambar",
      description: "Unggah gambar bunga yang ingin kamu identifikasi.",
    },
    {
      icon: <Cpu className="text-blue-600" />,
      number: "2️⃣",
      title: "Proses AI",
      description:
        "Proses AI akan menganalisis gambar dengan model machine learning.",
    },
    {
      icon: <FileText className="text-purple-600" />,
      number: "3️⃣",
      title: "Dapatkan Hasil",
      description: "Dapatkan hasil beserta informasi tentang bunga tersebut.",
    },
  ];

  return (
    <div className="items-center py-8 md:py-12 lg:py-16">
      {/* Title */}
      <div className="p-4 md:p-6 lg:p-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-center text-base-900 mb-6 md:mb-8">
          Bagaimana Cara Kerjanya?
        </h2>
      </div>

      {/* Cards Container Responsive: Hp, Tablet, Desktop */}
      <div className="px-4 md:px-8 lg:px-16 pb-6 md:pb-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {step.icon}
            <div className="text-lg md:text-xl font-bold mb-2 text-center">
              {step.number} {step.title}
            </div>
            <p className="text-center text-gray-700 text-sm md:text-md lg:text-lg">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
