import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* خلفية علوية صغيرة ثابتة */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} className="w-full" alt="bg" />
      </div>

      {/* شريط التنقل */}
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between py-4 top-0 left-0 bg-white z-50 shadow-md">
        <a href="#">
          {/*<Image src={assets.logo} alt="Logo" className="cursor-pointer w-28 mr-14" />*/}
        </a>

        {/* روابط سطح المكتب */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skilles">Skilles</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>

        {/* زر الوضع المظلم + زر القائمة */}
        <div className="flex items-center gap-4">
     
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} className="w-6 cursor-pointer" alt="menu" />
          </button>
        </div>
      </nav>

      {/* قائمة الجوال الجانبية */}
      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-xs bg-white z-[999] shadow-2xl transform transition-transform duration-500 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="absolute top-5 right-5" onClick={closeMenu}>
          <Image src={assets.close_black} className="w-5 cursor-pointer" alt="close" />
        </div>

        <ul className="flex flex-col gap-6 text-center text-lg font-medium mt-20">
          <li><a onClick={closeMenu} href="#top">Home</a></li>
          <li><a onClick={closeMenu} href="#about">About Me</a></li>
          <li><a onClick={closeMenu} href="#skilles">Skilles</a></li>
          <li><a onClick={closeMenu} href="#project">Project</a></li>
          <li><a onClick={closeMenu} href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
