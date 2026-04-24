import CuratedCard from "./CuratedCard";
import CuratedCTA from "./CuratedCTA";
const CuratedGrid = ({ releases, loading }) => {
    if (loading) {
      return (
        <div className="py-10 text-center text-sm text-gray-400 animate-pulse">
          Loading collections...
        </div>
      );
    }
    const grouped = [
        releases.slice(0, 3),
        releases.slice(3, 6),
        releases.slice(6, 9),
        releases.slice(9, 12),
    ];
  return (
    
    <div className="grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-6">
      
      {grouped.map((group, index) => (
        <CuratedCard key={index} images={group} />
      ))}

      <CuratedCTA />

    </div>
  );
};

export default CuratedGrid;