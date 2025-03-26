import "../data/navItems";

function HamburgerMenu() {
  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle"
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
        className="menu menu-md dropdown-content bg-base-100 rounded-lg z-[51] shadow-lg"
      >
        <div className="flex flex-col items-center gap-1">
          <a href="/login">
            <button className="btn btn-primary text-base-100 rounded-lg px-12">
              Login
            </button>
          </a>
          <a href="/register">
            <button className="btn btn-ghost text-primary rounded-lg px-10">
              Register
            </button>
          </a>
        </div>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
