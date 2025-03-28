import { Link } from "react-router-dom";
import Logo from "../../assets/img/flower-logo.svg";

function BackToHome() {
  return (
    <>
      <div className="absolute top-2 left-4 right-0 z-50">
        <Link to="/">
          <button className="flex items-center gap-1">
            <img src={Logo} alt="logo" className="w-10 h-10" />
            <h1 className="text-primary text-xl font-[1000] tracking-tight">
              FlorAI
            </h1>
          </button>
        </Link>
      </div>
    </>
  );
}

export default BackToHome;
