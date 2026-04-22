import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] pt-16 pb-12 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Bagian Atas: Brand, Deskripsi, dan Ikon Sosial */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          
          {/* Sisi Kiri: Logo & Teks */}
          <div>
            <h2 className="text-3xl font-serif italic text-gray-900 mb-4 tracking-wide">
              Swavy
            </h2>
            <p className="font-['Manrope'] text-sm text-gray-500 max-w-sm leading-relaxed">
              Elevating music discovery through surgical curation and high-end editorial storytelling.
            </p>
          </div>

          {/* Sisi Kanan: Ikon (Share, RSS, Email) */}
          <div className="flex gap-5 text-gray-400">
            {/* Ikon Share */}
            <button className="hover:text-gray-900 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
              </svg>
            </button>
            {/* Ikon RSS */}
            <button className="hover:text-gray-900 transition">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
               </svg>
            </button>
            {/* Ikon Mail */}
            <button className="hover:text-gray-900 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Bagian Bawah: Link dan Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] sm:text-xs font-bold text-gray-400 tracking-[0.15em] uppercase">
          
          {/* Tautan Navigasi Footer */}
          <div className=" flex flex-wrap gap-8">
            <a href="#" className="font-['Nimbus_Sans'] font-normal tracking-[1px] hover:text-gray-900 transition">About</a>
            <a href="#" className="font-['Nimbus_Sans'] font-normal tracking-[1px] hover:text-gray-900 transition">Editorial Policy</a>
            <a href="#" className="font-['Nimbus_Sans'] font-normal tracking-[1px] hover:text-gray-900 transition">Privacy</a>
            <a href="#" className="font-['Nimbus_Sans'] font-normal tracking-[1px] hover:text-gray-900 transition">Contact</a>
          </div>
          
          {/* Teks Hak Cipta */}
          <p className="text-right font-['Nimbus_Sans'] font-[400] tracking-[1px]">
            © 2024 MELODIA DIGITAL CURATOR. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;