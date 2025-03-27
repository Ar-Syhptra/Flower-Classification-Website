import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

function BackToHome() {
  return (
    <>
      <Link to="/" className="p-2 absolute top-0 left-0 z-50">
        <button className="btn btn-md md:btn-md lg:btn-lg btn-primary  flex items-center rounded-lg  hover:bg-base-200 hover:text-primary transition-all duration-200 ease-in-out">
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full hover:bg-primary hover:text-base-100" />
          <span className="text-sm md:text-md lg:text-xl ">Home</span>
        </button>
      </Link>
    </>
  );
}

export default BackToHome;
