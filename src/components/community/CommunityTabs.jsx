const tabs = [
  { key: "fresh", label: "Fresh" },
  { key: "trending", label: "Trending 🔥" },
  { key: "top", label: "Top 🏆" },
];

const CommunityTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className=" flex gap-2 md:gap-3
  overflow-x-auto
  pb-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`whitespace-nowrap
  px-3 md:px-4 py-2
  rounded-full text-xs md:text-sm ${
            activeTab === tab.key
              ? "bg-green-500 text-white"
              : "bg-gray-100"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default CommunityTabs;