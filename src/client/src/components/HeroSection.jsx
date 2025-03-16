import HeroBackground from "../assets/img/watering-plant.svg";

function HeroSection({ header, description }) {
  return (
    <div className="p-10 min-h-screen font-poppins shadow-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          key={header}
          src={HeroBackground}
          alt="hero-section"
          className="drop-shadow-lg overflow-hidden w-80 "
        />
        <div className="z-10">
          <h1 className="text-4xl font-bold text-left">{header}</h1>
          <p className="py-6">{description}</p>
          <button className="btn btn-soft btn-primary py-4 px-6">
            Pelajari
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
