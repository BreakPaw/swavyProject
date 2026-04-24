const DiscoverFilter = () => {
  return (
    <div className="flex flex-col sm:flex-row
      gap-3
      sm:justify-end
      mb-8 md:mb-10">
      
      <button className="w-full sm:w-auto
        px-4 py-2
        border rounded-full text-sm">
        SORT BY: LATEST
      </button>

      <button className="w-full sm:w-auto
        px-4 py-2
        border rounded-full text-sm">
        GENRE: ALL
      </button>

    </div>
  );
};

export default DiscoverFilter;