import { Link } from "react-router-dom";
import Logo from "../../assets/img/flower-logo.svg";
import Button from "../Button/Button";
import HamburgerMenu from "../HamburgerMenu";

function Navbar() {
  return (
    <nav className="navbar px-6 sm:px-8 md:px-20 lg:px-30 fixed z-50 shadow-sm backdrop-blur-sm bg-base-100/95">
      {/* Logo Section */}
      <div className="navbar-start flex items-center ">
        <Link to="/">
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              alt="Logo"
              className="w-12 sm:w-14 md:w-16 lg:w-18"
            />
            <h1 className="text-md text-center md:text-2xl lg:text-3xl text-primary font-noto font-bold">
              FlorAI
            </h1>
          </div>
        </Link>
      </div>

      {/* Hamburger Menu untuk Mobile */}
      <div className="navbar-end md:hidden">
        <HamburgerMenu />
      </div>

      {/* Login dan Register Button untuk Desktop*/}
      <div className="navbar-end hidden md:flex text-center gap-1">
        <Link to="/login">
          <Button
            name="Login"
            className="btn btn-primary md:btn-md lg:btn-lg  text-base-100 rounded-lg"
          />
        </Link>
        <Link to="/register">
          <Button
            name="Register"
            className="btn btn-outline btn-primary md:btn-md lg:btn-lg hover:text-base-100 rounded-lg"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
