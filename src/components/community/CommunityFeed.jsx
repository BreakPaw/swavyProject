import CommunityPost from "./CommunityPost";

const CommunityFeed = ({ posts, activeTab }) => {
  let sortedPosts = [...posts];

  if (activeTab === "fresh") {
    sortedPosts.sort((a, b) => b.createdAt - a.createdAt);
  }

  if (activeTab === "trending") {
    sortedPosts = posts
      .filter(p => Date.now() - p.createdAt < 86400000) // 24 jam
      .sort((a, b) => b.likes - a.likes);
  }

  if (activeTab === "top") {
    sortedPosts.sort((a, b) => b.likes - a.likes);
  }

  return (
    <div className="md:col-span-2 space-y-4 md:space-y-6">
      {sortedPosts.map((post) => (
        <CommunityPost key={post.id} {...post} />
      ))}
    </div>
  );
};

export default CommunityFeed;