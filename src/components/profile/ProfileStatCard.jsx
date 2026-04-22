const ProfileStatCard = ({ label, value }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 text-center bg-white">
      
      <p className="text-2xl font-semibold text-gray-900">
        {value}
      </p>

      <p className="text-xs text-gray-400 tracking-widest mt-2">
        {label}
      </p>

    </div>
  );
};

export default ProfileStatCard;