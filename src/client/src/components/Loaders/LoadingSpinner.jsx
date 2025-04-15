function LoadingSpinner() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
        <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
        <p className="text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-primary">
          Loading...
        </p>
      </div>
    </>
  );
}

export default LoadingSpinner;
