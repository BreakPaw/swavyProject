const users = ["Marcus Thorne", "Aria Chen", "Lydia Fox"];

const CommunityTopUsers = () => {
  return (
    <div>
      <h3 className="text-sm text-gray-400 mb-3">
        TOP REVIEWERS
      </h3>

      <div className="space-y-3">
        {users.map((user, i) => (
          <div key={i} className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              className="w-6 h-6 md:w-8 md:h-8 rounded-full"
            />
            <p className="text-xs md:text-sm">{user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityTopUsers;