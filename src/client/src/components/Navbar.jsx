import { Link } from "react-router-dom";
import Logo from "../assets/img/flower-logo.svg";
import navItems from "../data/navItems";
import HamburgerMenu from "./HamburgerMenu";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="navbar p-4 px-6 sm:px-8 md:px-12 lg:px-20 sticky top-0 z-50 bg-base-100 shadow-xs">
      {/* Logo Section */}
      <div className="navbar-start gap-3 flex items-center">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Logo"
              className="w-12 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
            <h1 className=" text-primary text-lg md:text-2xl lg:text-3xl">
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
        <ul className="menu-horizontal gap-10 rounded-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link to={item.path} className="hover:text-primary transition-all">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Login dan Register Button untuk Desktop*/}
      <div className="navbar-end hidden md:flex text-center">
        <Link to="/login">
          <Button name="Login" className="btn btn-primary text-white" />
        </Link>
        <Link to="/register">
          <Button name="Register" className="text-primary px-4 hover:bg-base-400 btn btn-ghost" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
