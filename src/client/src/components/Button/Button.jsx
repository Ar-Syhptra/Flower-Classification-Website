function Button({ name, className, src, alt }) {
  return (
    <button className={className}>
      {name}
      <img
        src={src}
        alt={alt}
        className="bg-blue-400 bg-clip-text border-l-2  border-base-100 rounded-full"
      />
    </button>
  );
}

export default Button;
