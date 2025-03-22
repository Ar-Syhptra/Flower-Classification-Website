import HeroBackground from "../../assets/img/watering-plant.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function HeroSection({ header, description }) {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-primary to-secondary">
      <div className="hero-content px-10 md:px-24 mb-10 lg:px-23 gap-2 md:gap-4 lg:gap-6 flex-col lg:flex-row-reverse ">
        <img
          key={header}
          src={HeroBackground}
          alt="hero-section"
          className="drop-shadow-md w-60 md:w-72 lg:w-80"
        />
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[1000] tracking-wide mb-6 leading-tight text-base-900">
            {header}
          </h1>
          <p className="text-lg md:text-xl lg:text-xl text-gray-300 mt-6 leading-relaxed tracking-normal max-w-xl">
            {description}
          </p>
          <Link to="/classification">
            <Button
              name="Mulai Sekarang"
              className="btn md:btn-md lg:btn-lg btn-primary mt-6 py-3 text-base-100 rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
