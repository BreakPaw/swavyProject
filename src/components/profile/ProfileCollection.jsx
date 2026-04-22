import ProfileCollectionCard from "./ProfileCollectionCard";

const dummy = Array(12).fill(0);

const ProfileCollection = () => {
  return (
    <div>
      
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold">RECENT COLLECTION</h2>

        <div className="flex gap-2">
          <button className="px-3 py-1 bg-green-500 text-white rounded-full text-xs">ALL</button>
          <button className="px-3 py-1 bg-gray-100 rounded-full text-xs">VINYL</button>
          <button className="px-3 py-1 bg-gray-100 rounded-full text-xs">DIGITAL</button>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {dummy.map((_, i) => (
          <ProfileCollectionCard key={i} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-2 border rounded-full text-sm">
          LOAD ENTIRE COLLECTION
        </button>
      </div>

    </div>
  );
};

export default ProfileCollection;