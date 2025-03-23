import React from "react";
import { Upload, Cpu, FileText } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-green-600" />,
      number: "1️⃣",
      title: "Unggah Gambar",
      description: "Unggah gambar bunga yang ingin kamu identifikasi.",
    },
    {
      icon: <Cpu className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-blue-600" />,
      number: "2️⃣",
      title: "Proses AI",
      description:
        "Proses AI akan menganalisis gambar dengan model machine learning.",
    },
    {
      icon: <FileText className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-purple-600" />,
      number: "3️⃣",
      title: "Dapatkan Hasil",
      description: "Dapatkan hasil beserta informasi tentang bunga tersebut.",
    },
  ];

  return (
    <div className="items-center w-full py-8 md:py-12 lg:py-16">
      {/* Title */}
      <div className="p-4 md:p-6 lg:p-8 bg-base-100">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-center text-base-900 mb-6 md:mb-8">
          Bagaimana Cara Kerjanya?
        </h2>
      </div>

      {/* Cards Container */}
      <div className="px-4 md:px-8 lg:px-16 pb-6 md:pb-10">
        {/* Mobile Scrollable View (visible only on smallest screens) */}
        <div className="md:hidden w-full overflow-x-auto pb-4">
          <div className="flex flex-row gap-4 min-w-max px-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 w-64 bg-white rounded-lg shadow-md"
              >
                {step.icon}
                <div className="text-lg font-bold mb-1">
                  {step.number} {step.title}
                </div>
                <p className="text-center text-sm text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet and Desktop View */}
        <div className="hidden md:flex justify-center">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 w-full max-w-6xl">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {step.icon}
                <div className="text-lg md:text-xl font-bold mb-2 text-center">
                  {step.number} {step.title}
                </div>
                <p className="text-center text-gray-700 text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;