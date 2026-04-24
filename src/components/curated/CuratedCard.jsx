const CuratedCard = ({ images }) => {
  return (
    <div className="space-y-3 md:space-y-4 cursor-pointer group">
      
      {/* IMAGE STACK */}
      <div className="relative w-full aspect-square max-w-[200px]">
        {images[2] && (
          <img
            src={images[2].images[0]?.url}
            alt="album"
            className="absolute top-4 left-4 w-full h-full object-cover rounded-lg opacity-60 transition group-hover:top-6 group-hover:left-6"
          />
        )}

        {images[1] && (
          <img
            src={images[1].images[0]?.url}
            alt="album"
            className="absolute top-2 left-2 w-full h-full object-cover rounded-lg opacity-80 transition"
          />
        )}

        {images[0] && (
          <img
            src={images[0].images[0]?.url}
            alt="album"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg transition group-hover:scale-105"
          />
        )}
      </div>

      {/* TEXT */}
      <div>
        <p className="text-xs text-green-600 tracking-widest">
          VOLUME 01
        </p>

        <h3 className="text-base md:text-lg lg:text-xl font-['Newsreader'] mt-2 text-gray-900">
          Nocturnal Textures
        </h3>

        <p className="font-['Manrope'] text-xs md:text-sm text-[#3D4A3D]">
          By Elena Voss • 42 Albums
        </p>
      </div>

    </div>
  );
};

export default CuratedCard;