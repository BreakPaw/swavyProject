const ProfileEditorial = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2
  gap-6 md:gap-8
  items-center">
      
      <img
        src="https://picsum.photos/500"
        className="w-full
      h-[200px] sm:h-[250px] md:h-auto
      object-cover
      rounded-xl"
      />

      <div>
        <p className="text-[10px] md:text-xs text-green-600 mb-2">
          IN-DEPTH REVIEW
        </p>

        <h2 className="text-lg sm:text-xl md:text-2xl
      font-['Newsreader']
      mb-3 md:mb-4">
          The Deconstruction of Ambient Modernism
        </h2>

        <p className="text-xs md:text-sm text-gray-500">
          The shift towards minimalist soundscapes...
        </p>

        <p className="text-[10px] md:text-xs text-gray-400 mt-3 md:mt-4">
          12 MIN READ • APRIL 14, 2024
        </p>
      </div>

    </div>
  );
};

export default ProfileEditorial;