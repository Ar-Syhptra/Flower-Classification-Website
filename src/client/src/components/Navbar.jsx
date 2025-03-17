import { Link } from "react-router-dom";
import Logo from "../assets/img/flower-logo.svg";
import navItems from "../data/navItems";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  return (
    <nav className="navbar shadow-sm px-4 sm:px-8 md:px-10 lg:px-12 sticky top-0 z-50 bg-base-100">
      {/* Logo Section */}
      <div className="navbar-start gap-3 flex items-center">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12" />
            <h1 className="text-primary text-lg md:text-2xl font-poppins font-bold">
              FlorAI
            </h1>
          </div>
        </Link>
      </div>

      {/* Hamburger Menu untuk Mobile */}
      <div className="navbar-end md:hidden">
        <HamburgerMenu navItems={navItems} />
      </div>

      {/* Menu Desktop */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2 lg:gap-8 font-poppins text-sm lg:text-base">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className="p-3 hover:bg-base-200 transition-colors rounded-lg"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Login dan Register Button untuk Desktop*/}
      <div className="navbar-end hidden md:flex text-center gap-2 ">
        <button className="btn btn-primary btn-sm lg:btn-md hover:opacity-90 transition-opacity rounded-xl">
          Login
        </button>
        <button className="btn btn-sm lg:btn-md transition-colors  rounded-xl">
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
