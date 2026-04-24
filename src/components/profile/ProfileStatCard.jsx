const ProfileStatCard = ({ label, value }) => {
  return (
    <div className="border border-gray-200
  rounded-xl
  p-3 md:p-5
  text-center bg-white">
      
      <p className="text-lg md:text-2xl font-semibold">
        {value}
      </p>

      <p className="text-[10px] md:text-xs text-gray-400 mt-1 md:mt-2">
        {label}
      </p>

    </div>
  );
};

export default ProfileStatCard;