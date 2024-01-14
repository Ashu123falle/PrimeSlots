import Link from 'next/link'
import { useState } from "react";
import { useRouter } from 'next/router';
import PriceFilter from '../FilterMobileView/FilterMobileView';
import Popup from 'reactjs-popup';
import Image from 'next/image';



function MiniNavbar() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [dropDown, setdropDown] = useState(true);


    return (
        <>
       <div className="navbar hidden md:block bg-[#011334] fixed top-0 right-0 left-0 z-50">
                <div className="Navbar py-5 flex justify-around relative">
                    <Link href="/"
                        className={"bg-[#ffffff] xs:w-[90px] sm:w-[149px] xs:h-[32px] sm:h-[37px] relative "}
                    >
                        <Image
                            className="xs: w-[80px] sm:w-[136.7px] h-8 relative" height={32} width={136.7}
                            src='/assets/mainlogo.png' alt="main logo" />
                    </Link>
                    <div className="links flex  justify-between">
                        <Link href="/Marketplace" className="xs:mr-4 sm:mx-3 text-[#d9d9d9] text-center font-['Figtree-Medium',_sans-serif] xs:text-[16px] sm:text-base leading-[101%] font-medium relative xs:w-[62px] sm:w-[129px]">Marketplace</Link>
                        <Link href="/Partner" className="xs:ml-4 sm:mx-3 text-[#d9d9d9] text-center font-['Figtree-Medium',_sans-serif] xs:text-[16px] sm:text-base leading-[101%] font-medium relativew xs:w-[118px] sm:w-[129px] ">Become a partner</Link>
                    </div>
                </div>
            </div>

        <div className="flex items-center justify-between bg-[#011334] border-gray-400 py-8 px-8 md:hidden bg-[#011334] fixed top-0 right-0 left-0 z-50">
      <Link href="/">
      <Image alt="" src='/assets/mainlogo.png' width={136.7} height={32} className="ml-5 relative"></Image>
      </Link>
      <nav>
        <section className="MOBILE-MENU px-5 text-left flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-2 py-8 bg-transperant"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col justify-start p-5">
            <div className="flex-col justify-start items-start text-left min-h-[250px]">
              <li className="h-[45px] rounded-lg flex justify-center items-center my-8 text-center font-['figtree'] text-base font-normal relative w-[129px] hover:bg-gray-200">
                <Link href="/Marketplace">Marketplace</Link>
              </li>

              <li className="h-[45px] rounded-lg flex justify-center items-center my-8 text-center font-['figtree'] text-base leading-[101%] font-normal relative w-[129px] hover:bg-gray-200">
                <Link href="/Partner">Become a Partner</Link>
              </li>
              
            </div>
            </div>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
        </> 
    )
}

export default MiniNavbar