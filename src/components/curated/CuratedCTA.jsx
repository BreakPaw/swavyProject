const CuratedCTA = () => {
  return (
    <div className="bg-gray-100 rounded-2xl
  p-4 md:p-8
  flex flex-col justify-center">
      
      <p className="text-xs text-green-600 tracking-widest">
        COMMUNITY CHOICE
      </p>

      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-2">
        Create Your Own Narrative
      </h3>

      <p className="text-gray-500 mt-2">
        Join the curator board...
      </p>

      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full">
        Start Curating
      </button>

    </div>
  );
}; 

export default CuratedCTA;