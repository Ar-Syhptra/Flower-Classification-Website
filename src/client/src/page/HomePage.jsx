import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import AboutFlower from "../components/AboutFlower";
import DemoSection from "../components/DemoSection";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Logo from "../assets/img/flower-logo.svg";

// Halaman Utama atau Landing Page
function HomePage() {
  return (
    <>
      <Navbar logo={Logo} tittle="FlorAI" />
      <HeroSection
        header="Pelajari Berbagai Jenis Bunga dengan FlorAI"
        description="FlorAI adalah sebuah aplikasi yang dapat membantu Anda mengidentifikasi berbagai jenis bunga. Kami menggunakan teknologi machine learning untuk mempelajari pola-pola dari data bunga yang telah dikumpulkan."
      />
      <DemoSection />
      <HowItWorks />
      <AboutFlower
        tittle="Bunga Mawar"
        description="Gambar di samping adalah bunga mawar, yang termasuk ke dalam famili
            Rosaceae. Bunga mawar memiliki banyak macam warna, seperti merah,
            pink, kuning, putih, dan lainnya."
      />
      <Footer
        logo={Logo}
        tittle="FlorAI"
        description="lorem ipsum dolor sit amet"
      />
    </>
  );
}

export default HomePage;
