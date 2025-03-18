function Button({ name }) {
  return (
    <button className="btn sm:btn-sm md:btn-md xl:btn-md">
      {name}
    </button>
  );
}

export default Button;
