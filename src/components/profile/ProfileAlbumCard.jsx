const ProfileAlbumCard = () => {
  return (
    <div className="space-y-2">
      <img
        src="https://picsum.photos/200"
        className="w-full h-40 object-cover rounded-lg"
      />

      <p className="text-sm font-medium">Kind of Blue</p>
      <p className="text-xs text-gray-400">Miles Davis</p>
    </div>
  );
};

export default ProfileAlbumCard;