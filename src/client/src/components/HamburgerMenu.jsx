import { Link } from "react-router-dom";
import "../data/navItems";

function HamburgerMenu({ navItems }) {
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
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className=" hover:bg-base-200 transition-colors rounded-lg"
            >
              {item.name}
            </Link>
          </li>
        ))}
        <div className="divider my-2"></div>
        <div className="gap-2 flex flex-col items-center">
          <Link to="/login">
            <button className="btn btn-primary text-base-100">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-ghost text-primary">Register</button>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
