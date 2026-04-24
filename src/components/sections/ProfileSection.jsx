import ProfileHeader from "../profile/ProfileHeader";
import ProfileStats from "../profile/ProfileStats";
import ProfileTopPicks from "../profile/ProfileTopPicks";
import ProfileEditorial from "../profile/ProfileEditorial";
import ProfileCollection from "../profile/ProfileCollection";

const ProfileSection = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12
  py-10 md:py-16
  space-y-12 md:space-y-20
  max-w-7xl mx-auto">
      <ProfileHeader />
      <ProfileStats />
      <ProfileTopPicks />
      <ProfileEditorial />
      <ProfileCollection />
    </section>
  );
};

export default ProfileSection;