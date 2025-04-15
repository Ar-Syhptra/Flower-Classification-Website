import React from "react";

const InputImage = ({ selectedImage, handleImageUpload, fileInputRef }) => {
  return (
    <section className="flex flex-col items-center w-full gap-4">
      <div className="flex flex-col items-center transition-all w-full">
        <label className="text-lg sm:text-xl md:text-2xl font-semibold text-primary text-center pb-4 pt-2">
          Unggah Gambar Bunga
        </label>
        <div className="w-full">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="file-input file-input-sm md:file-input-md file-input-legend file-input-primary file:text-base-100 w-full"
          />
        </div>
      </div>

      {selectedImage && (
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl overflow-hidden rounded-lg shadow-md hover:shadow-lg backdrop-blur-lg ring ring-primary/20">
          <img
            src={selectedImage}
            className="h-full w-full object-contain rounded-lg"
            onError={(e) => (e.target.style.display = "none")}
            alt="Preview"
          />
        </div>
      )}
    </section>
  );
};

export default InputImage;
