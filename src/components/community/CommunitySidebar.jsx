import CommunityTopUsers from "./CommunityTopUsers";
import CommunityEditorsNote from "./CommunityEditorsNote";

const CommunitySidebar = () => {
  return (
    <div className="space-y-6 mt-8 md:mt-0">
      <CommunityTopUsers />
      <CommunityEditorsNote />
    </div>
  );
};

export default CommunitySidebar;