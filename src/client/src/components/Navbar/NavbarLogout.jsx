import React from "react";
import { UserRound } from "lucide-react";
import Profile from "../../assets/img/flower-logo.svg";
import { Link, useNavigate } from "react-router-dom";

function NavbarLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rememberedUsername");
    navigate("/");
  };

  return (
    <>
      <navbar className="navbar bg-base-100 shadow-lg p-4 px-4 sm:px-8 md:px-10 lg:px-12">
        {/* Navbar Logo and Profile */}
        <div className="flex-1 flex items-center">
          <Link to="/" className="flex items-center gap-1">
            <img
              src={Profile}
              alt="logo"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
            <h1 className="text-xl md:text-2xl lg:text-3xl text-primary font-bold tracking-tight hover:drop-shadow-md">
              FlorAI
            </h1>
          </Link>
        </div>
        {/* End of Navbar Logo and Profile */}

        {/* Profile Dropdown */}
        <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              {/* Profile Picture */}
              <div className="rounded-full transition-all duration-300 ease-out bg-primary/10 hover:bg-primary/20 p-2 border border-primary/50">
                <UserRound className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer hover:drop-shadow-md text-primary" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-auto p-2 shadow"
            >
              <li>
                <button
                  className="btn btn-primary btn-sm md:btn-md lg:btn-lg text-white text-sm md:text-md lg:text-lg rounded-lg px-6"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* End of Profile Dropdown */}
      </navbar>
    </>
  );
}

export default NavbarLogout;
