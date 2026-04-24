import DiscoverCard from "./DiscoverCard";

const dummy = [1, 2, 3, 4, 5, 6];

const DiscoverGrid = () => {
  return (
    <div className="grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  gap-6 md:gap-10">
      {dummy.map((item) => (
        <DiscoverCard key={item} />
      ))}
    </div>
  );
};

export default DiscoverGrid;