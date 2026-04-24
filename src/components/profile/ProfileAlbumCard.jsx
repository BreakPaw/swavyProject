const ProfileAlbumCard = () => {
  return (
    <div className="space-y-2">
      <img
        src="https://picsum.photos/200"
        className="w-full
      h-[120px] sm:h-[140px] md:h-[160px]
      object-cover
      rounded-lg"
      />

      <p className="text-xs sm:text-sm font-medium">Kind of Blue</p>
      <p className="text-[10px] sm:text-xs text-gray-400">Miles Davis</p>
    </div>
  );
};

export default ProfileAlbumCard;