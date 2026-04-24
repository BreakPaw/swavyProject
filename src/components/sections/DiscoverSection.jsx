import DiscoverHeader from "../discover/DiscoverHeader";
import DiscoverFilter from "../discover/DiscoverFilter";
import DiscoverGrid from "../discover/DiscoverGrid";
import DiscoverLoadMore from "../discover/DiscoverLoadMore";

const DiscoverSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12
  py-12 md:py-20
  max-w-7xl mx-auto">
      <DiscoverHeader />
      <DiscoverFilter />
      <DiscoverGrid />
      <DiscoverLoadMore />
    </section>
  );
};

export default DiscoverSection;