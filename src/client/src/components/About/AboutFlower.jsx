function AboutFlower({ tittle, description }) {
  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-primary to-secondary">
      <h2 className="text-2xl font-bold text-center">About Flower</h2>
      <div className="px-16 container mx-auto">
        <div className="flex flex-col items-start">
          <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_960_720.jpg"
                alt="Album"
                className="w-76"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{tittle}</h2>
              <p>{description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFlower;
