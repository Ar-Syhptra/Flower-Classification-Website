import Card from "../Card";

function AboutFlower() {
  return (
    <div className="py-10 bg-gradient-to-br from-primary to-secondary">
      <div className="flex justify-center text-center py-10">
        <h2 className="text-3xl font-[1000] tracking-wide text-base-100">
          Kenapa Menggunakan FlorAI?
        </h2>
      </div>
      <div className="px-10 md:px-10 lg:px-30 flex flex-col md:grid md:grid-cols-2 gap-6 lg:flex lg:flex-row justify-center place-items-center">
        <Card cardTittle="Mudah Digunakan" cardDescription="Antarmuka yang ramah pengguna, cukup unggah gambar bunga dan dapatkan hasilnya." />
        <Card cardTittle="Akurasi Tinggi" cardDescription="Menggunakan teknologi AI yang canggih untuk klasifikasi bunga dengan akurasi tinggi." />
        <Card cardTittle="Informasi Lengkap" cardDescription="Menampilkan informasi detail tentang spesies bunga berdasarkan hasil klasifikasi AI." />
      </div>
    </div>
  );
}

export default AboutFlower;
