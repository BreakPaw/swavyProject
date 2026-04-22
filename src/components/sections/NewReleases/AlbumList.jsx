import React from 'react';
import AlbumCard from "./AlbumCard";

const AlbumList = ({ releases, loading }) => {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
      
      {/* Kondisi jika data sedang dimuat */}
      {loading ? (
        <div className="text-sm font-bold tracking-widest text-[#1DB954] uppercase animate-pulse">
          Memuat data dari Spotify...
        </div>
      ) : (
        /* Kondisi jika data sudah tersedia */
        releases.map((item) => (
          <AlbumCard 
            key={item.id} 
            image={item.images[0]?.url} 
            title={item.name} 
            artist={item.artists.map(a => a.name).join(", ")}  
          />
        ))
      )}

    </div>
  );
};

export default AlbumList;