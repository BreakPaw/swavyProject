import album from "../../../assets/images/heroimg.png"
const HeroVisual = () => {
  return (
    <div className="flex-[1]">
      <img
        src={album}
        alt="album"
        className="w-full h-full object-cover rounded-xl shadow-lg"
      />

      <div className="absolute bottom-10 right-80 bg-white/60 p-4 backdrop-blur-[12px] rounded-lg shadow">
        <p className="font-semibold">Ethereal Static</p>
        <p className="text-sm text-gray-500">SOMA RECORDS • 2025</p>
      </div>
    </div>
  );
};

export default HeroVisual;