import React from "react";
import { Upload, Cpu, FileText } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-12 h-12 mb-4 text-green-600" />,
      number: "1️⃣",
      title: "Unggah Gambar",
      description: "Unggah gambar bunga yang ingin kamu identifikasi.",
    },
    {
      icon: <Cpu className="w-12 h-12 mb-4 text-blue-600" />,
      number: "2️⃣",
      title: "Proses AI",
      description:
        "Proses AI akan menganalisis gambar dengan model machine learning.",
    },
    {
      icon: <FileText className="w-12 h-12 mb-4 text-purple-600" />,
      number: "3️⃣",
      title: "Dapatkan Hasil",
      description: "Dapatkan hasil beserta informasi tentang bunga tersebut.",
    },
  ];

  return (
    <div className="items-center py-10 md:py-16 lg:py-20">
      {/* Title */}
      <div className="p-6 md:p-8 lg:p-10 bg-base-100">
        <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold tracking-wide text-center text-base-900 mb-8">
          Bagaimana Cara Kerjanya?
        </h2>
      </div>

      {/* Cards */}

      <div className="flex justify-center items-center px-4 md:px-10 lg:px-20 pb-10 overflow-x-auto">
        <div className="flex flex-col md:flex-row lg:flex-row gap-6 md:gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 w-full md:w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {step.icon}
              <div className="text-xl font-bold mb-2">
                {step.number} {step.title}
              </div>
              <p className="text-center text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
