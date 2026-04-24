import album from "../../../assets/images/heroimg.png";

const HeroVisual = () => {
  return (
    <div className="w-full md:flex-[1] relative">

      <img
        src={album}
        alt="album"
        className="w-full h-[250px] md:h-full object-cover rounded-xl shadow-lg"
      />

      <div className="
        absolute
        bottom-4 left-4 md:bottom-6 md:left-6
        bg-white/70
        backdrop-blur-md
        p-3 md:p-4
        rounded-lg shadow
      ">
        <p className="font-semibold text-sm md:text-base">
          Ethereal Static
        </p>
        <p className="text-xs md:text-sm text-gray-500">
          SOMA RECORDS • 2025
        </p>
      </div>

    </div>
  );
};

export default HeroVisual;