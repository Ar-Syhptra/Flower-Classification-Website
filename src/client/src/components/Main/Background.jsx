function BakcgroundPattern() {
  return (
    <>
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="flower-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M30 20c-5-10-15-10-20 0 5 10 15 10 20 0zm0 20c-5 10-15 10-20 0 5-10 15-10 20 0z"
              fill="currentColor"
              className="text-primary"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#flower-pattern)" />
        </svg>
      </div>
    </>
  );
}

export default BakcgroundPattern;
