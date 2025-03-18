function Button({ name }) {
  return (
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
      {name}
    </button>
  );
}

export default Button;
