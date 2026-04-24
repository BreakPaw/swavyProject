import { useState } from "react";
import CommunityHeader from "../community/CommunityHeader";
import CommunityTabs from "../community/CommunityTabs";
import CommunityFeed from "../community/CommunityFeed";
import CommunitySidebar from "../community/CommunitySidebar";

const dummyPosts = [
  {
    id: 1,
    user: "Elena Vance",
    content: "gave 5 stars to 'Kind of Blue'",
    likes: 12,
    createdAt: Date.now() - 1000 * 60 * 60 * 2, // 2 jam lalu
  },
  {
    id: 2,
    user: "Julian Koster",
    content: "published a new curation",
    likes: 40,
    createdAt: Date.now() - 1000 * 60 * 60 * 10,
  },
  {
    id: 3,
    user: "Sarah Jenkins",
    content: "A masterpiece of ambient textures",
    likes: 120,
    createdAt: Date.now() - 1000 * 60 * 60 * 30,
  },
];

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState("fresh");

  return (
    <section className="px-4 md:px-8 lg:px-12
  py-10 md:py-12
  max-w-7xl mx-auto
  grid grid-cols-1 md:grid-cols-3
  gap-8 md:gap-10">
      
      {/* LEFT */}
      <div className="md:col-span-2">
        <CommunityHeader />
        <CommunityTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <CommunityFeed posts={dummyPosts} activeTab={activeTab} />
      </div>

      {/* RIGHT */}
      <CommunitySidebar />

    </section>
  );
};

export default CommunitySection;