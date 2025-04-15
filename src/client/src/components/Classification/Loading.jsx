import React from "react";

const Loading = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in">
        <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center gap-3 sm:gap-4">
          <div className="loading loading-ball loading-xl text-primary"></div>
          <p className="text-md sm:text-lg text-primary animate-pulse font-semibold">
            Memproses Klasifikasi Gambar...
          </p>
        </div>
      </div>
    )
  );
};

export default Loading;
