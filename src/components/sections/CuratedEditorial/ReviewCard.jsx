import React from 'react';
import album from "../../../assets/images/homebg.png"
const ReviewCard = ({ title, artist, rating, snippet, isGray }) => {
  return (
    <div className="flex items-start gap-4 group cursor-pointer">
      {/* Cover Album Kecil */}
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-400 group-hover:scale-105 transition">
        <img className='w-full h-full object-cover rounded-md' src={album} alt="" />
      </div>
      
      {/* Info Ulasan */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h4 className="text-sm font-bold text-gray-900 leading-none mb-1">{title}</h4>
            <p className="text-xs text-gray-500">{artist}</p>
          </div>
          {/* Badge Rating */}
          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold text-white ${isGray ? 'bg-gray-300 text-gray-700' : 'bg-[#1DB954]'}`}>
            {rating}
          </span>
        </div>
        <p className="text-xs text-gray-500 italic line-clamp-2">
          {snippet}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;