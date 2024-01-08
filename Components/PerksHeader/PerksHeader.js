// PerksHeader.js
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


const PerksHeader = () => {
  return (
<div className=" text-white p-2 px-8 sm:px-16 pb-16">
  <div className=''>
    <nav className="navbar flex justify-between items-center">
      <Link href="/" className="logo">
        <Image src='/assets/nobglogo.png' alt="Logo" height={56} width={150}/>
      </Link>
      <div className="nav-text flex p-3 text-white">
      <Link href="/Marketplace" className="mx-2 text-sm sm:text-md md:text-base">Marketplace</Link>
<a href="#" className="mx-2 text-sm sm:text-md md:text-base">Become a Vendor</a>


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
