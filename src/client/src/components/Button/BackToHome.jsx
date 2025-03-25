import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

function BackToHome() {
  return (
    <Link
      to="/"
      className="p-2 absolute top-0 left-0 md:top-0 md:left-0 lg:top-0 lg:left-0 z-50"
    >
      <button className="btn btn-md md:btn-md lg:btn-lg xl:btn-xl btn-primary flex items-center gap-2 rounded-full hover:bg-base-200 hover:text-primary transition-all duration-200 ease-in-out">
        <ChevronLeft className="w-6 h-6" />
        <span className="text-sm md:text-md lg:text-lg xl:text-xl">Home</span>
      </button>
    </Link>
  );
}

export default BackToHome;
