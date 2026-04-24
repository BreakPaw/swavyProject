import ProfileAlbumCard from "./ProfileAlbumCard";

const dummy = [1, 2, 3, 4];

const ProfileTopPicks = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row
    sm:justify-between
    gap-2
    mb-4">
        <h2 className="text-lg md:text-xl font-['Newsreader']">The Top 4</h2>
        <span className="text-xs md:text-sm text-gray-400">VIEW ALL</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {dummy.map((item) => (
          <ProfileAlbumCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default ProfileTopPicks;