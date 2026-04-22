const ProfileEditorial = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      
      <img
        src="https://picsum.photos/500"
        className="rounded-xl"
      />

      <div>
        <p className="text-xs text-green-600 mb-2">
          IN-DEPTH REVIEW
        </p>

        <h2 className="text-2xl font-['Newsreader'] mb-4">
          The Deconstruction of Ambient Modernism
        </h2>

        <p className="text-gray-500">
          The shift towards minimalist soundscapes...
        </p>

        <p className="text-xs text-gray-400 mt-4">
          12 MIN READ • APRIL 14, 2024
        </p>
      </div>

    </div>
  );
};

export default ProfileEditorial;