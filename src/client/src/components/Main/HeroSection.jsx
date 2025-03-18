import HeroBackground from "../../assets/img/watering-plant.svg";
import { Link } from "react-router-dom";

function HeroSection({ header, description }) {
  return (
    <div className="hero p-10 min-h-screen font-poppins bg-gradient-to-r from-blue-400 to-green-400 drop-shadow-sm">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          key={header}
          src={HeroBackground}
          alt="hero-section"
          className="drop-shadow-lg w-80 "
        />
        <div className="">
          <h1 className="md:text-3xl font-bold text-left text-2xl text-white">
            {header}
          </h1>
          <p className="py-6 text-md text-white ">{description}</p>
          <Link to="/classification" className="pt-6">
            <button className="btn btn-primary rounded-lg">Pelajari</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
