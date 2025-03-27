import React from "react";
import { Upload, Cpu, FileText } from "lucide-react";

function HowItWorks() {
  const sizeSteps = {
    icon: "w-10 h-10 md:w-14 md:h-14 lg:w-14 lg:h-14",
    number:
      "font-bold text-sm md:text-md lg:text-lg text-primary bg-gray-700 px-3 rounded-full text-white",
    fontTitle:
      "text-md md:text-lg lg:text-xl font-bold tracking-wide text-base-900",
    fontDescription: "text-sm md:text-md lg:text-lg text-center",
  };
  const steps = [
    {
      icon: <Upload className={sizeSteps.icon} />,
      number: "1",
      title: "Unggah Gambar",
      description: "Unggah gambar bunga yang ingin kamu identifikasi.",
    },
    {
      icon: <Cpu className={`${sizeSteps.icon}`} />,
      number: "2",
      title: "Proses AI",
      description:
        "Proses AI akan menganalisis gambar dengan model machine learning.",
    },
    {
      icon: <FileText className={`${sizeSteps.icon}`} />,
      number: "3",
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
      <div className="grid md:grid-cols-3 lg:flex justify-baseline gap-4 px-20 md:px-8 lg:px-20 mb-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col md:flex md:flex-col lg:flex lg:flex-col items-center px-10 p-4 md:p-4 lg:p-6 bg-base-100 transition-all duration-300 rounded-lg gap-4 shadow-md hover:shadow-lg "
          >
            {step.icon}
            <div className={`items-center flex gap-2  ${sizeSteps.fontTitle}`}>
              <span className={`${sizeSteps.number}`}>{step.number}</span>
              {step.title}
            </div>
            <p className={` ${sizeSteps.fontDescription}`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
