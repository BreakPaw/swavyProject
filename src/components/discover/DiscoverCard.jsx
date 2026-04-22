const DiscoverCard = () => {
  return (
    <div className="space-y-4 cursor-pointer">
      
      <img
        src="https://picsum.photos/400"
        alt="cover"
        className="w-full h-[300px] object-cover rounded-xl"
      />

      <div className="flex justify-between items-center">
        <h3 className="text-xl font-['Newsreader']">
          Ephemeral Echoes
        </h3>

        <span className="text-sm text-gray-400">
          2024
        </span>
      </div>

      <p className="text-sm text-gray-500">
        Julianna Rayne
      </p>

    </div>
  );
};

export default DiscoverCard;