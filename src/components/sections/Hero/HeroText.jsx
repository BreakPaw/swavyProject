const HeroText = () => {
  return (
    <div className="flex-[2]">
      <p className="text-[#006E2D] text-[10px] font-normal leading-[15px] tracking-[1px] mb-2">
        ALBUM OF THE MONTH
      </p>

      <h1 className="font-['Liberation_Serif'] italic text-[96px] leading-[96px] font-normal tracking-tighter text-gray-900">
        Resonance in <br />
        <span className="text-[#1DB954]">Monochrome.</span>
      </h1>

      <p className="font-['Manrope'] text-gray-500 text-[18px] font-normal leading-[29px] mt-4 mb-6">
        Explore the depth of experimental ambient textures. A <br />
curated retrospective on the evolution of soundscapes in the <br />
digital age.
      </p>

      <div className="flex gap-4">
        <button className="bg-[#1DB954] cursor-pointer hover:bg-green-600 hover:text-white text-white px-4 py-2 rounded-full">
          Read Curator Notes
        </button>

        <button className="border-none bg-[#E2E2E2] cursor-pointer hover:bg-gray-300 hover:text-black py-3 px-8 rounded-full">
          Listen Now
        </button>
      </div>
    </div>
  );
};

export default HeroText;