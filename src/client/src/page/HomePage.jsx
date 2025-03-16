import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Logo from "../assets/img/flower-logo.svg";

// Halaman Utama atau Landing Page
function HomePage() {
  return (
    <>
      <Navbar logo={Logo} tittle="Bloomora" />
      <HeroSection
        header="Pelajari Berbagai Jenis Bunga"
        description="Temukan dan Identifikasi berbagai jenis bunga."
      />
    </>
  );
}

export default HomePage;
