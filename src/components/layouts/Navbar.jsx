import React from 'react';

const Navbar = () => {
  return (
  
    <nav className='flex items-center justify-between px-14 py-4 gap-auto bg-white border-b border-gray-100 sticky top-0 z-50'>

      <div className='text-2xl font-bold tracking-tighter text-black'>Swavy<span className='text-[#1DB954]'>.</span>
      </div>

      <div className='hidden md:flex gap-10 text-md font-medium text-gray-500'>
        <a href="/" className='hover:text-[#1DB954] transition'>Home</a>
        <a href="/discover" className='hover:text-[#1DB954] transition'>Discover</a>
        <a href="/list" className='hover:text-[#1DB954] transition'>Lists</a>
        <a href="#" className='hover:text-[#1DB954] transition'>Community</a>
        <a href="/profile" className='hover:text-[#1DB954] transition'>Profile</a>
      </div>

      <div className='relative'>
        <input
          type="text"
          className="bg-gray-50 border border-gray-200 text-sm rounded-full px-4 py-2 w-48 focus:outline-none focus:ring-1 focus:ring-[#1DB954] transition"
          placeholder='Search Curator...'
        />
      </div>
    </nav>
  );
};

export default Navbar;