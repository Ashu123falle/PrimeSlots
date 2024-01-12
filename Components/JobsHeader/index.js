// PerksHeader.js
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
const JobsHeader = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  return (
<div className=" text-white p-2 px-8 sm:px-16 ">
  <div>
  <nav className="flex items-center justify-between ">
      <Link href="/" className="ml-20 bg-white max-md:ml-4 ">
        <Image src='/assets/FAQlogo.png' alt="Logo" height={32} width={135.7} />
      </Link>
      
      {isSmallScreen ? (
              <Image src="/assets/menu.png" width={30} height={30} alt="Subscribe" className=' filter brightness-0 invert'/>
              
            ) : (
               <div className="flex p-3 text-white nav-text">
      <Link href="/Marketplace" className="mx-2 text-sm sm:text-md md:text-base">Marketplace</Link>
      <Link href="/Partner" className="mx-2 text-sm sm:text-md md:text-base">Become a Partner</Link>
       </div> 
            )}
    </nav>
  </div>
</div>

  );
};

export default JobsHeader;
