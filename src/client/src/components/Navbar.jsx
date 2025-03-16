function Navbar({ tittle, logo }) {
  const navItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Contact" },
  ];

  return (
    <nav className="navbar shadow-sm px-4 sm:px-8 md:px-10 lg:px-12 sticky top-0 z-50 bg-base-100">
      {/* Logo Section */}
      <div className="navbar-start gap-3 flex items-center">
        <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12" />
        <h1 className="text-primary text-lg md:text-2xl font-poppins font-bold">
          {tittle}
        </h1>
      </div>

      {/* Hamburger Menu untuk Mobile */}
      <div className="navbar-end md:hidden">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle hover:bg-primary/10 transition-colors"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[51] mt-3 w-32 p-3 shadow-lg"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a className="p-3 hover:bg-base-200 transition-colors rounded-lg">
                  {item.name}
                </a>
              </li>
            ))}
            <div className="divider my-2"></div>
            <li>
              <button className="btn btn-primary w-full">Login</button>
            </li>
            <li>
              <button className="btn btn-ghost w-full">Register</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Menu Desktop */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2 lg:gap-8 font-poppins text-sm lg:text-base">
          {navItems.map((item) => (
            <li key={item.id}>
              <a className="p-3 hover:bg-primary/10 transition-colors rounded-lg">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Login dan Register Button untuk Desktop*/}
      <div className="navbar-end hidden md:flex text-center gap-2 ">
        <button className="btn btn-primary btn-sm lg:btn-md hover:opacity-90 transition-opacity ">
          Login
        </button>
        <button className="btn btn-ghost underline lg:btn-md transition-colors">
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
