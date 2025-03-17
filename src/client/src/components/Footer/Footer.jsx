import ListItem from "./ListItem";
import Logo from "../../assets/img/flower-logo.svg";

function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav className="footer-title">
          <ListItem />
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img className="w-12 h-12" src={Logo} alt="Logo" />
          <p className="md:text-md">
            FlorAI
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
            consequatur.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>&copy; 2025 - All right reserved</a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
