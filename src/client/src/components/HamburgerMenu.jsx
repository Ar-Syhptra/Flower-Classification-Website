import { Link } from "react-router-dom";
import Button from "./Button";

function HamburgerMenu({ navItems }) {
  return (
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[51] mt-3 p-3 shadow-lg"
      >
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
        <div className="divider my-2"></div>
        <ul className="gap-2 flex">
          <li>
            <Button name="Login" />
            <Button name="Register" />
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
