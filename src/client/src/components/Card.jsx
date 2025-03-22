function Card({ cardTittle, cardDescription }) {
  return (
    <>
      <div className="card w-80 shadow-xl p-3 hover:scale-105 ease-in duration-200 transition-all bg-base-100">
        <div className="card-body items-left text-left">
          <h2 className="card-title text-xl md:text-xl lg:text-2xl text-center underline">
            {cardTittle}
          </h2>
          <p className="text-md md:text-md lg:text-lg mt-4">
            {cardDescription}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
