import DiscoverHeader from "../discover/DiscoverHeader";
import DiscoverFilter from "../discover/DiscoverFilter";
import DiscoverGrid from "../discover/DiscoverGrid";
import DiscoverLoadMore from "../discover/DiscoverLoadMore";

const DiscoverSection = () => {
  return (
    <section className="px-6 py-20">
      <DiscoverHeader />
      <DiscoverFilter />
      <DiscoverGrid />
      <DiscoverLoadMore />
    </section>
  );
};

export default DiscoverSection;