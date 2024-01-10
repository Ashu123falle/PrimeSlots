import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const StayLoop = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });

  return (
    <div className="main h-[160px] sm:h-[160px] md:h-[180px]  bg-gradient-to-b from-[#241E1F] to-[#0A075F]  flex justify-center items-center  max-sm:pt-14 ">
                <div className='xl:p-7 lg:p-5 xl:w-[75%] lg:w-[85%] md:w-[90%] sm:w-[92%] w-[90%] flex sm:flex-row flex-col justify-center items-center lg:space-x-10 sm:space-y-0 space-y-7'>

                    <div className="content w-full">
                        <div className='sm:space-y-5 space-y-2 sm:text-justify text-center'>
                            <span>
                                <h1 className='sm:text-2xl text-xl font-semibold text-[#F6F6F7]'>Stay in the loop</h1>
                            </span>
                            <p className='text-[#F5F5F6] leading-4 sm:mt-4 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem]'>Join our mailing list to stay in the loop <br />with our newest for Event and Offers.</p>
                        </div>
                    </div>

        <div className="w-[70vw] sm:w-[100vw] max-w-[400px] h-[60px] flex items-center bg-white rounded-[45px] px-4 pl-2 pr-1.5 max-md:h-auto max-sm:rounded-[20px] max-sm:flex-col">
          <input
            className="w-full rounded-[50px] text-gray-700 mr-3 py-1 pl-2 leading-tight max-sm:mt-4 outline-none"
            type="text"
            placeholder="Enter your email address.."
            aria-label="Email Address"
          />
          <button
            className="h-12 w-38 rounded-[50px] flex-shrink-0 bg-pink-600 hover:bg-pink-800 border-pink-600 hover:border-pink-800 text-lg border-4 text-white py-1 px-1 max-sm:w-[70px]  max-sm:border-white  max-sm:bg-white max-sm:hover:bg-white max-sm:hover:border-white"
            type="button"
          >
            {isSmallScreen ? (
              <Image src="/assets/subscribe.png" width={70} height={70} alt="Subscribe" className='bg-white  rounded-[50px]'/>
            ) : (
              <span className="p-2">Subscribe Now</span>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default StayLoop;