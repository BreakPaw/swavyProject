import React from 'react';
const AlbumCardSkeleton = () => {
  return (
    <div className="min-w-[140px] md:min-w-[180px] animate-pulse">
      
      <div className="w-full h-[140px] md:h-[180px] bg-gray-200 rounded-lg mb-2"></div>

      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2"></div>

    </div>
  );
};

export default AlbumCardSkeleton;