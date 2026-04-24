const CommunityEditorsNote = () => {
  return (
    <div className="bg-gray-100 p-3 md:p-4 rounded-xl">
      <h3 className="text-xs md:text-sm font-semibold mb-2">
        Editor's Note
      </h3>

      <p className="text-xs md:text-sm text-gray-600">
        The community thrives on nuanced criticism.
      </p>

      <button className="text-green-600 text-xs md:text-sm mt-2">
        Guidelines →
      </button>
    </div>
  );
};

export default CommunityEditorsNote;