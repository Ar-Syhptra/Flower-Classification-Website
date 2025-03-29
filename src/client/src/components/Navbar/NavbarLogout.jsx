import React from "react";
import { CircleUser } from "lucide-react";
import Profile from "../../assets/img/flower-logo.svg";
import { Link } from "react-router-dom";

function NavbarLogout() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm p-4 px-4 sm:px-8 md:px-10 lg:px-12">
        {/* Navbar Logo and Profile */}
        <div className="flex-1 flex items-center">
          <Link to="/" className="flex items-center gap-1">
            <img
              src={Profile}
              alt="logo"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
            <h1 className="text-xl md:text-2xl lg:text-3xl text-primary font-bold tracking-tight">
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
              <div className="rounded-full text-center flex  transition-all duration-300 ease-out hover:shadow-lg">
                <CircleUser className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer p-1 bg-primary rounded-full text-base-100 active:text-primary active:bg-white transition-all duration-300 ease-out" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-auto p-2 shadow"
            >
              <li>
                <button className="btn btn-primary btn-sm md:btn-md lg:btn-lg text-white text-sm md:text-md lg:text-lg rounded-lg px-6">
                  <Link to="/">Logout</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* End of Profile Dropdown */}
      </div>
    </>
  );
}

export default NavbarLogout;
