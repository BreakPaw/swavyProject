import ProfileHeader from "../profile/ProfileHeader";
import ProfileStats from "../profile/ProfileStats";
import ProfileTopPicks from "../profile/ProfileTopPicks";
import ProfileEditorial from "../profile/ProfileEditorial";
import ProfileCollection from "../profile/ProfileCollection";

const ProfileSection = () => {
  return (
    <section className="px-6 py-20 space-y-20">
      <ProfileHeader />
      <ProfileStats />
      <ProfileTopPicks />
      <ProfileEditorial />
      <ProfileCollection />
    </section>
  );
};

export default ProfileSection;