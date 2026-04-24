import React from 'react';

// Menerima data dinamis melalui props
const AlbumCard = ({ image, title, artist }) => {
  return (
    <div className="min-w-[140px] md:min-w-[180px] cursor-pointer group">
      <div className="rounded-lg mb-2 w-full h-[140px] md:h-[180px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <p className="font-['Manrope'] text-[14px] font-medium text-[#1A1C1C] truncate">
        {title}
      </p>

      <p className="font-['Manrope'] text-[12px] font-normal text-[#71717A] truncate">
        {artist}
      </p>
    </div>
  );
};

export default AlbumCard;