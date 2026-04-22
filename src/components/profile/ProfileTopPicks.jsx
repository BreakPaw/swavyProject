import ProfileAlbumCard from "./ProfileAlbumCard";

const dummy = [1, 2, 3, 4];

const ProfileTopPicks = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="font-['Newsreader'] text-xl">The Top 4</h2>
        <span className="text-sm text-gray-400">VIEW ALL</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dummy.map((item) => (
          <ProfileAlbumCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default ProfileTopPicks;