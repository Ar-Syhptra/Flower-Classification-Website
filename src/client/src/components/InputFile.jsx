import { useState } from "react";

function InputFile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteImage = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      const response = await fetch("/api/classify", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      alert(`Hasil klasifikasi: ${data.result}`);
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat mengklasifikasi gambar");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <label htmlFor="file-input" className="btn btn-primary mb-4">
          Pilih File
        </label>
        <input
          type="file"
          id="file-input"
          className="hidden"
          onChange={handleFileChange}
        />
        {selectedFile && (
          <div className="relative">
            <img
              src={preview}
              alt={selectedFile.name}
              className="max-w-full h-auto my-4"
            />
            <button
              className="absolute top-0 right-0 btn btn-error"
              onClick={handleDeleteImage}
            >
              X
            </button>
          </div>
        )}
        {selectedFile && (
          <button
            className="btn btn-primary mt-4"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Mengklasifikasi..." : "Klasifikasi"}
          </button>
        )}
      </div>
    </>
  );
}

export default InputFile;
