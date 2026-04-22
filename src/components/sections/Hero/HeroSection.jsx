import HeroText from "./HeroText";
import HeroVisual from "./HeroVisual";

const HeroSection = () => {
  return (
    <section className="flex items-stretch px-10 py-16 relative">
      <HeroText />
      <HeroVisual />
    </section>
  );
};

export default HeroSection;