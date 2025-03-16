// Navbar Komponen
function Navbar({ tittle, logo }) {
  const navItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Contact" },
  ];

  return (
    <div className="navbar shadow-xs bg-base-100 px-10 sticky top-0 z-50">
      <div className="navbar-start gap-2 flex items-center">
        <img src={logo} alt="Logo" className="w-15 h-15" />
        <h1 className="text-primary text-2xl font-poppins font-bold">
          {tittle}
        </h1>
      </div>

      {/* Hamburger Menu untuk Mobile */}
      <div className="navbar-end md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-auto p-2 shadow"
          >
            {navItems.map((item) => (
              <li key={item.id} className="p-2">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hamburger Menu untuk Desktop */}
      <div className="navbar-center hidden md:flex ">
        <ul className="menu menu-horizontal gap-8 font-poppins text-[16px]">
          {navItems.map((item) => (
            <li key={item.id} className="p-2">
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Login dan Register Button untuk Desktop*/}
      <div className="navbar-end hidden md:flex items-center gap-1">
        <button className="btn btn-primary py-4 px-6">Login</button>
        <button className="btn btn-soft border-none py-4 px-6">Register</button>
      </div>
    </div>
  );
}

export default Navbar;
