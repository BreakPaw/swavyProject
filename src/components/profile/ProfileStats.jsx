import ProfileStatCard from "./ProfileStatCard";

const stats = [
  { label: "REVIEWS WRITTEN", value: "1,420" },
  { label: "FOLLOWERS", value: "8.4k" },
  { label: "LISTS CURATED", value: "312" },
  { label: "LISTENING HOURS", value: "12.1k" },
];

const ProfileStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {stats.map((item, i) => (
        <ProfileStatCard key={i} {...item} />
      ))}
    </div>
  );
};

export default ProfileStats;