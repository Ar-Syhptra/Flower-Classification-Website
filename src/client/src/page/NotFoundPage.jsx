function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center opacity-55">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
          404
        </h1>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold mt-1 sm:mt-2 md:mt-3 lg:mt-4">
          Page Not Found
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
