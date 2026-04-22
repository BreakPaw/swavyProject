import CuratedCard from "./CuratedCard";
import CuratedCTA from "./CuratedCTA";
const CuratedGrid = ({ releases, loading }) => {
    if (loading) {
      return (
        <div className="text-center py-10 text-gray-500">
          Loading...
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
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      
      {grouped.map((group, index) => (
        <CuratedCard key={index} images={group} />
      ))}

      <CuratedCTA />

    </div>
  );
};

export default CuratedGrid;