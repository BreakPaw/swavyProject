import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="
      flex items-center justify-between
      px-4 md:px-10
      py-4
      bg-white border-b border-gray-100
      sticky top-0 z-50
    ">

      {/* LOGO */}
      <div className="text-xl md:text-2xl font-bold tracking-tighter">
        Swavy<span className="text-[#1DB954]">.</span>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
        <a href="/" className="hover:text-[#1DB954]">Home</a>
        <a href="/discover" className="hover:text-[#1DB954]">Discover</a>
        <a href="/list" className="hover:text-[#1DB954]">Lists</a>
        <a href="/community" className="hover:text-[#1DB954]">Community</a>
        <a href="/profile" className="hover:text-[#1DB954]">Profile</a>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">

        {/* SEARCH (desktop only) */}
        <input
          type="text"
          placeholder="Search..."
          className="
            hidden md:block
            bg-gray-50 border border-gray-200
            text-sm rounded-full px-4 py-2 w-40
            focus:outline-none focus:ring-1 focus:ring-[#1DB954]
          "
        />

        {/* HAMBURGER */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="
          absolute top-full left-0 w-full
          bg-white border-t
          flex flex-col items-center gap-4 py-6
          md:hidden
        ">
          <a href="/">Home</a>
          <a href="/discover">Discover</a>
          <a href="/list">Lists</a>
          <a href="/community">Community</a>
          <a href="/profile">Profile</a>

          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-50 border px-4 py-2 rounded-full w-3/4"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;