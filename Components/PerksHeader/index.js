// PerksHeader.js

import React from 'react';
import Image from 'next/image';
import nobglogo from '@/pages/assets/nobglogo.png';


const PerksHeader = () => {
  return (
<div className=" text-white p-8 ">
  <div className=''>
    <nav className="navbar flex justify-between items-center">
      <div className="logo">
        <Image src={nobglogo} alt="Logo" className="" />
      </div>
      <div className="nav-text flex p-3 text-white">
      <p className="mx-2 text-sm sm:text-md md:text-base">Marketplace</p>
<p className="mx-2 text-sm sm:text-md md:text-base">Become a Vendor</p>

      </div>
    </nav>
  </div>
  <div className='ml-4 mt-4'>
    <h1 className='md:text-3xl xs:text-2xl'>Renting your Media just <br/> got easier!</h1>
    <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-5 rounded-full">
      Become a Vendor
    </button>
  </div>
</div>

  );
};

export default PerksHeader;
