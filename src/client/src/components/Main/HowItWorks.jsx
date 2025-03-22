function HowItWorks() {
  return (
    <div className="items-center py-30">
      {/* Title */}
      <div className="p-10 bg-base-100">
        <h2 className="text-3xl font-[1000] tracking-wide text-center text-base-900">
        Bagaimana Cara Kerjanya?
        </h2>
      </div>

      <div className="flex flex-row justify-center items-center px-10 md:px-15 lg:px-20 pb-10 overflow-scroll">
        {/* Cards */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-10">
          <div className="flex w-80 flex-col gap-4">
            <div className="skeleton h-42 w-full"></div>
            <div className="skeleton h-5 w-28"></div>
            <div className="skeleton h-5 w-full"></div>
            <div className="skeleton h-5 w-full"></div>
          </div>
          <div className="flex w-80 flex-col gap-4">
            <div className="skeleton h-42 w-full"></div>
            <div className="skeleton h-5 w-28"></div>
            <div className="skeleton h-5 w-full"></div>
            <div className="skeleton h-5 w-full"></div>
          </div>
          <div className="flex w-80 flex-col gap-4">
            <div className="skeleton h-42 w-full"></div>
            <div className="skeleton h-5 w-28"></div>
            <div className="skeleton h-5 w-full"></div>
            <div className="skeleton h-5 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
