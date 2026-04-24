const HeroSkeleton = () => {
  return (
    <section className="px-4 md:px-10 py-10 md:py-16 flex flex-col md:flex-row gap-10 animate-pulse">

      <div className="flex-1 space-y-4">
        <div className="h-3 bg-gray-200 w-24"></div>
        <div className="h-10 bg-gray-200 w-3/4"></div>
        <div className="h-4 bg-gray-200 w-2/3"></div>

        <div className="flex gap-3">
          <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
          <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      <div className="flex-1">
        <div className="w-full h-[250px] bg-gray-200 rounded-xl"></div>
      </div>

    </section>
  );
};

export default HeroSkeleton;