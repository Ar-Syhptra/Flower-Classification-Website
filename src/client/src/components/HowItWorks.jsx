function HowItWorks() {
  return (
    <section className="bg-base-200 py-20">
      <div className="container mx-auto px-10">
        <h2 className="md:text-2xl text-xl font-bold text-center mb-10">
          Bagaimana cara kerjanya?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_960_720.jpg"
                alt="leaf"
                className="w-full h-40 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Pengumpulan Data</h2>
              <p>
                Kami mengumpulkan data bunga dari berbagai sumber, seperti hasil
                riset, data dari internet, dan kontribusi dari komunitas.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_960_720.jpg"
                alt="robot"
                className="w-full h-40 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Pelatihan Model</h2>
              <p>
                Kami menggunakan model machine learning untuk mempelajari
                pola-pola dari data bunga yang telah dikumpulkan.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_960_720.jpg"
                alt="robot"
                className="w-full h-40 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Prediksi</h2>
              <p>
                Setelah model selesai dilatih, kami menggunakan model tersebut
                untuk memprediksi jenis bunga berdasarkan foto yang diupload.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
