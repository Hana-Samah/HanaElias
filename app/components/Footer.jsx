import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
         {/* Logo */}
        {/* <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2"/> */}
        
        <div className="w-max flex items-center gap-2 mx-auto">
            <Image src={assets.mail_icon} alt="" className="w-6"/>
            hana.samoh948@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-200 mx-[10%] mt-12 py-6">
        <p className="text-gray-500">© 2025 Hana Samah. All rights reserved.</p>
        <ul className="flex gap-10 justify-center mt-4 sm:mt-0 text-gray-500">
            <li><a target='_blank' href="https://github.com/Hana-Samah" className='hover:text-black'>GitHub</a></li>
            <li><a target='_blank' href="https://linkedin.com/in/hana-samah" className='hover:text-black'>LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;