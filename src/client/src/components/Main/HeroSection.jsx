import HeroBackground from "../../assets/img/watering-plant.svg";
import { Link } from "react-router-dom";
import Button from "../Button";

function HeroSection({ header, description }) {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content px-10 md:px-28 lg:px-30 gap-2 md:gap-4 lg:gap-30 flex-col lg:flex-row-reverse pb-20 ">
        <img
          key={header}
          src={HeroBackground}
          alt="hero-section"
          className="drop-shadow-md w-60 md:w-72 lg:w-80"
        />
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl  font-poppins font-bold">
            {header}
          </h1>
          <p className="py-6">{description}</p>
          <Link to="/classification">
            <Button name="Pelajari Sekarang" className="btn btn-primary text-base-100"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
