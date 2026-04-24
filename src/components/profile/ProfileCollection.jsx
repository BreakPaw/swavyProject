import ProfileCollectionCard from "./ProfileCollectionCard";

const dummy = Array(12).fill(0);

const ProfileCollection = () => {
  return (
    <div>
      
      <div className="flex flex-col sm:flex-row
    sm:justify-between
    gap-3
    mb-4">
        <h2 className="text-sm md:text-base font-semibold">RECENT COLLECTION</h2>

        <div className="flex gap-2
      overflow-x-auto
      pb-1">
          <button className="px-3 py-1 bg-green-500 text-white rounded-full text-xs whitespace-nowrap">ALL</button>
          <button className="px-3 py-1 bg-gray-100 rounded-full text-xs whitespace-nowrap">VINYL</button>
          <button className="px-3 py-1 bg-gray-100 rounded-full text-xs whitespace-nowrap">DIGITAL</button>
        </div>
      </div>

      <div className="grid
    grid-cols-2 sm:grid-cols-3 md:grid-cols-6
    gap-2 md:gap-3">
        {dummy.map((_, i) => (
          <ProfileCollectionCard key={i} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-4 md:px-6
  py-2
  border
  rounded-full
  text-xs md:text-sm">
          LOAD ENTIRE COLLECTION
        </button>
      </div>

    </div>
  );
};

export default ProfileCollection;