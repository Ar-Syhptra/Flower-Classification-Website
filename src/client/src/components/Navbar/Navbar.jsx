import { Link } from "react-router-dom";
import Logo from "../../assets/img/flower-logo.svg";
import Button from "../Button/Button";

function Navbar() {
  return (
    <nav className="navbar p-2 px-6 sm:px-8 md:px-20 lg:px-30 sticky top-0 z-50 shadow-md backdrop-blur-md bg-base-100/90">
      {/* Logo Section */}
      <div className="navbar-start gap-3 flex items-center">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-12 md:w-18 lg:w-20" />
          </div>
        </Link>
      </div>

      {/* Hamburger Menu untuk Mobile */}
      <div className="navbar-end md:hidden">
        <Link to="/login">
          <Button
            name="Login"
            className="btn btn-primary md:btn-md lg:btn-lg  text-base-100 rounded-lg"
          />
        </Link>
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
