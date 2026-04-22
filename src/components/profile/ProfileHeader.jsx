const ProfileHeader = () => {
  return (
    <div className="text-center space-y-4">
      
      <img
        src="https://i.pravatar.cc/100"
        className="w-20 h-20 rounded-full mx-auto"
      />

      <h1 className="text-3xl font-['Newsreader']">
        Julian Thorne
      </h1>

      <p className="text-gray-400 text-sm">
        @j.thorne_curates
      </p>

      <div className="flex justify-center gap-3 mt-4">
        <button className="px-5 py-2 bg-black text-white rounded-full">
          FOLLOW
        </button>

        <button className="px-5 py-2 bg-gray-100 rounded-full">
          MESSAGE
        </button>
      </div>

    </div>
  );
};

export default ProfileHeader;