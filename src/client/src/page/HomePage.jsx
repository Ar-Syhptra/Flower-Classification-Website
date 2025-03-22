import HeroSection from "../components/Main/HeroSection";
import DemoSection from "../components/Main/DemoSection";
import HowItWorks from "../components/Main/HowItWorks";
import AboutFlower from "../components/About/AboutFlower";

// Halaman Utama atau Landing Page
function HomePage() {
  return (
    <>
      <HeroSection
        header="Pelajari Berbagai Jenis Bunga dengan FlorAI"
        description="FlorAI adalah sebuah aplikasi yang dapat membantu Anda mengidentifikasi berbagai jenis bunga dengan bantuan Teknologi Machine Learning"
      />
      <DemoSection />
      <HowItWorks />
      <AboutFlower
        tittle="Bunga Mawar"
        description="Gambar di samping adalah bunga mawar, yang termasuk ke dalam famili
            Rosaceae. Bunga mawar memiliki banyak macam warna, seperti merah,
            pink, kuning, putih, dan lainnya."
      />
    </>
  );
}

export default HomePage;
