import HeroSection from "../components/Main/HeroSection";
import HowItWorks from "../components/Main/HowItWorks";
import AboutFlower from "../components/Main/AboutFlower";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// Halaman Utama atau Landing Page
function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <HowItWorks />
      <AboutFlower />
      <Footer />
    </>
  );
}

export default HomePage;
