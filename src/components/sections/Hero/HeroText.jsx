const HeroText = () => {
  return (
    <div className="w-full md:flex-[2]">

      <p className="text-[#006E2D] text-[10px] tracking-[1px] mb-2">
        ALBUM OF THE MONTH
      </p>

      <h1 className="
        font-['Liberation_Serif'] italic
        text-3xl sm:text-4xl md:text-5xl lg:text-[72px]
        leading-tight md:leading-[1.1]
        tracking-tight
        text-gray-900
      ">
        Resonance in <br />
        <span className="text-[#1DB954]">Monochrome.</span>
      </h1>

      <p className="
        font-['Manrope']
        text-sm md:text-base
        text-gray-500
        mt-4 mb-6
        max-w-md
      ">
        Explore the depth of experimental ambient textures.
        A curated retrospective on the evolution of soundscapes in the digital age.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <button className="bg-[#1DB954] text-white px-5 py-2 rounded-full hover:bg-green-600">
          Read Curator Notes
        </button>

        <button className="bg-[#E2E2E2] px-6 py-2 rounded-full hover:bg-gray-300">
          Listen Now
        </button>
      </div>

    </div>
  );
};

export default HeroText;