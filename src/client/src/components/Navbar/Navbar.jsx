import { useState, useEffect } from "react";
import Logo from "../../assets/img/flower-logo.svg";
import Button from "../Buttons/Button";
import HamburgerMenu from "../Navbar/HamburgerMenu";

function Navbar() {
  // Fungsi navbar melayang saat scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center w-full bg-base-100/80 shadow-sm backdrop-blur-md transition-all duration-300 z-50 ${
        isScrolled
          ? "p-1 fixed top-0 left-1/2 transform -translate-x-1/2 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-7xl rounded-lg px-4 sm:px-6 md:px-8 lg:px-10 shadow-lg"
          : "relative px-4 sm:px-6 md:px-12 lg:px-16 p-3"
      }`}
    >
      {/* Logo Section */}
      <div className="navbar-start flex items-center ">
        <a href="/">
          <div className="flex items-center gap-1">
            <img
              src={Logo}
              alt="Logo"
              className="w-10 sm:w-12 md:w-14 lg:w-16"
            />
            <h1 className="text-center items-center text-xl md:text-2xl lg:text-3xl font-bold text-primary tracking-tight">
              FlorAI
            </h1>
          </div>
        </a>
      </div>

      {/* Hamburger Menu untuk Mobile */}
      <div className="navbar-end md:hidden">
        <HamburgerMenu />
      </div>

      {/* Login dan Register Button untuk Desktop*/}
      <div className="navbar-end hidden md:flex text-center gap-1">
        <a href="/login">
          <Button
            name="Login"
            className="btn btn-primary md:btn-md lg:btn-lg  text-base-100 rounded-lg"
          />
        </a>
        <a href="/register">
          <Button
            name="Register"
            className="btn btn-outline btn-primary md:btn-md lg:btn-lg hover:text-base-100 rounded-lg"
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
