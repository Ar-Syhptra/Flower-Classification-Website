import HeroSection from "../components/Main/HeroSection";
import DemoSection from "../components/Main/DemoSection";
import HowItWorks from "../components/Main/HowItWorks";
import AboutFlower from "../components/About/AboutFlower";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// Halaman Utama atau Landing Page
function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection
        header="Pelajari Berbagai Jenis Bunga dengan FlorAI"
        description="FlorAI adalah aplikasi berbasis AI yang dapat membantu Anda mengklasifikasi berbagai jenis bunga secara instan menggunakan teknologi Machine Learning."
      />
      <DemoSection />
      <HowItWorks />
      <AboutFlower
        tittle="Bunga Mawar"
        description="Gambar di samping adalah bunga mawar, yang termasuk ke dalam famili
            Rosaceae. Bunga mawar memiliki banyak macam warna, seperti merah,
            pink, kuning, putih, dan lainnya."
      />
      <Footer />
    </>
  );
}

export default HomePage;
