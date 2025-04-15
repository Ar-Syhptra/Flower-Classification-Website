import React from "react";
import { Waves,Sprout,Sun,Flower } from "lucide-react";

const ResultCard = ({ classificationResult, resultRef }) => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-6 md:py-10" ref={resultRef}>
      {classificationResult ? (
        <div className="space-y-4 animate-fade-in-up max-w-4xl">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary text-center">
            Hasil Klasifikasi Bunga
          </h2>

          <div className="grid gap-3 sm:gap-4">
            {/* Main Info Section */}
            <div className="bg-primary/5 rounded-xl p-4 sm:p-4 border border-primary/20 hover:bg-primary/10 transition-colors cursor-default">
              <div className="">
                <h4 className="font-semibold text-primary mb-2 sm:mb-3 text-sm sm:text-base flex gap-1">
                  <Flower/>{classificationResult.flowerName}
                </h4>
                <p className="text-sm md:text-lg text-primary/80">
                  Tingkat Akurasi: {(classificationResult.probability * 100).toFixed(2)}%
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {classificationResult.description}
                </p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-secondary/5 p-3 sm:p-4 rounded-xl border border-secondary/50 hover:bg-secondary/20 transition-colors cursor-default">
                <h4 className="font-semibold text-emerald-700 mb-2 text-sm sm:text-base">
                  Manfaat Kesehatan
                </h4>
                <p className="text-emerald-800 text-sm sm:text-base">
                  {classificationResult.health_uses}
                </p>
              </div>
              <div className="bg-orange-50/5 p-3 sm:p-4 rounded-xl border border-orange-200/50 hover:bg-orange-100/20 cursor-default">
                <h4 className="font-semibold text-orange-700 mb-2 text-sm sm:text-base">
                  Manfaat Budaya
                </h4>
                <p className="text-amber-800 text-sm sm:text-base">
                  {classificationResult.culture_uses}
                </p>
              </div>
            </div>

            {/* Care Tips Section */}
            <div className="bg-sky-500/5 p-3 sm:p-4 rounded-xl border border-sky-500/20 hover:bg-sky-500/10 cursor-default">
              <h4 className="font-semibold text-sky-700 mb-2 sm:mb-3 text-sm sm:text-base">
                Tips Perawatan
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <p className="font-medium text-sky-700 text-sm sm:text-base flex gap-1">
                    <Sun /> Pencahayaan
                  </p>
                  <p className="text-sky-800 text-sm sm:text-base">
                    {classificationResult.sunlight_tips}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-sky-700 text-sm sm:text-base flex gap-1">
                    <Waves />Pengairan
                  </p>
                  <p className="text-sky-800 text-sm sm:text-base">
                    {classificationResult.water_tips}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-sky-700 text-sm sm:text-base flex gap-1">
                    <Sprout/> Media Tanam
                  </p>
                  <p className="text-sky-800 text-sm sm:text-base flex">
                    {classificationResult.soil_tips}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-indigo-500/10 p-3 sm:p-4 rounded-xl border border-indigo-800/20 hover:bg-indigo-500/20 transition-colors">
                <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                  Habitat
                </h4>
                <p className="text-gray-800 text-sm sm:text-base">
                  {classificationResult.habitat}
                </p>
              </div>
              <div className="bg-gray-500/10 p-3 sm:p-4 rounded-xl border border-gray-900/20 hover:bg-gray-500/20 cursor-default">
                <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                  Status
                </h4>
                <p className="text-gray-800 text-sm sm:text-base">
                  {classificationResult.status}
                </p>
              </div>
            </div>

            {/* Wikipedia Link */}
            <a
              href={`https://en.wikipedia.org/wiki/${classificationResult.wikipedia}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary transition-colors text-sm sm:text-base"
            >
              <span className="hover:underline">
                Baca selengkapnya di Wikipedia
              </span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 sm:py-12 space-y-4">
          <svg
            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-primary/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <p className="text-base sm:text-lg text-gray-500 font-noto">
            Unggah gambar untuk mulai klasifikasi!
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultCard;
