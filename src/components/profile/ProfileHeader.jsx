const ProfileHeader = () => {
  return (
    <div className="text-center space-y-3 md:space-y-4">
      
      <img
        src="https://i.pravatar.cc/100"
        className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto"
      />

      <h1 className="text-xl sm:text-2xl md:text-3xl font-['Newsreader']">
        Julian Thorne
      </h1>

      <p className="text-xs md:text-sm text-gray-400">
        @j.thorne_curates
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-3 mt-4">
        <button className="px-4 md:px-5 py-2 bg-black text-white rounded-full text-sm">
          FOLLOW
        </button>

        <button className="px-4 md:px-5 py-2 bg-gray-100 rounded-full text-sm">
          MESSAGE
        </button>
      </div>

    </div>
  );
};

export default ProfileHeader;