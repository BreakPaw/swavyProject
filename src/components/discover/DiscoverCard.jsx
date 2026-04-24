const DiscoverCard = () => {
  return (
    <div className="space-y-3 md:space-y-4 cursor-pointer">
      
      <img
        src="https://picsum.photos/400"
        alt="cover"
        className=" w-full
          h-[200px] sm:h-[240px] md:h-[300px]
          object-cover
          rounded-xl"
      />

      <div className="flex justify-between items-center">
        <h3 className="text-base sm:text-lg md:text-xl
          font-['Newsreader']">
          Ephemeral Echoes
        </h3>

        <span className="text-xs sm:text-sm text-gray-400">
          2024
        </span>
      </div>

      <p className="text-xs sm:text-sm text-gray-500">
        Julianna Rayne
      </p>

    </div>
  );
};

export default DiscoverCard;