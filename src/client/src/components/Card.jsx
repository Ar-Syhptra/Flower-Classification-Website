import ButtonModals from "./Button/Button-Modal";

function Card({ cardTittle, cardDescription, cardImage, altImage }) {
  return (
    <>
      <div className="card bg-base-100 w-90 shadow-2xl">
        <figure>
          <img src={cardImage} alt={altImage} />
        </figure>
        <div className="skeleton h-60 w-full"></div>
        <div className="card-body items-left text-left">
          <h2 className="card-title text-xl md:text-xl lg:text-2xl">
            {cardTittle}
          </h2>
          <p className="text-md md:text-md lg:text-lg mt-6 text-md">
            {cardDescription}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
