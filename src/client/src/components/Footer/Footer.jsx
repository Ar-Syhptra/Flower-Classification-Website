import { Link } from "react-router-dom";
import Logo from "../../assets/img/flower-logo.svg";

function Footer() {
  return (
    <div className="p-6 ">
      <div className="flex justify-between px-40 items-center p-10">
        <footer className="footer  bg-base-100 text-base-content">
          <nav className="footer footer-horizontal">
            <div>
              <h6 className="footer-title">About</h6>
              <a
                href="https://github.com/Ar-Syhptra/Flower-Classification-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover text-base-800 font-bold flex items-center gap-1"
              >
                <img
                  src="https://img.icons8.com/material/24/github.png"
                  alt="github"
                  className="w-6 h-6"
                />
                Github
              </a>
            </div>
            <div>
              <h6 className="footer-title">Contributor</h6>

              <a
                href=""
                className="flex gap-1 link link-hover text-blue-700 font-bold"
              >
                <img
                  src="https://img.icons8.com/material/24/batch-assign.png"
                  alt="contributors"
                  className="w-6 h-6"
                />
                Contributors
              </a>
            </div>
          </nav>
        </footer>
        <footer className="flex flex-row-reverse">
          <img className="w-18 h-18" src={Logo} alt="Logo" />
        </footer>
      </div>
      <div className="footer footer-horizontal pt-4 flex justify-center">
        <p className="tracking-tight font-semibold flex text-xs md:text-sm lg:text-sm">
          Copyright &copy; 2025 - All right reserved by
          <a href="#" className="text-primary">
            FlorAI
          </a>
          Teams
        </p>
      </div>
    </div>
  );
}

export default Footer;
