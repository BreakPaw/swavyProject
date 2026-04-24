import HeroText from "./HeroText";
import HeroVisual from "./HeroVisual";

const HeroSection = () => {
  return (
    <section className=" flex flex-col md:flex-row
      items-center
      px-4 md:px-10
      py-10 md:py-16
      gap-10
      relative">
      <HeroText />
      <HeroVisual />
    </section>
  );
};

export default HeroSection;