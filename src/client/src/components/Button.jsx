function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
}

export default Button;
