import Image from 'next/image';
import React from 'react';

const ReadyToConnect = () => {

    return (
        <>
        <div className="flex flex-col justify-center items-center relative ">

            <div >
                    <svg xmlns="http://www.w3.org/2000/svg"  className="absolute z-10 left-[85%] sm:left-[90%] top-[-15px] md:top-[-25px] w-[37px] h-[35px] md:w-[57px] md:h-[65px]" viewBox="0 0 57 65" fill="none">
                    <path d="M0.160679 28.4793C0.408286 18.4117 1.54453 4.53983 8.33162 1.49925C15.1187 -1.54134 32.918 4.78599 40.8832 10.2358C48.8484 15.6857 55.577 26.2099 56.1227 34.1983C56.6685 42.1867 52.3705 53.5485 44.1577 58.1662C35.9449 62.784 14.1788 66.8528 6.84597 61.905" fill="url(#paint0_linear_525_1707)"/>
                    <defs>
                    <linearGradient id="paint0_linear_525_1707" x1="50.4235" y1="52.8766" x2="-4.65708" y2="20.8649" gradientUnits="userSpaceOnUse">                      
                      <stop stop-color="#BD80FF"/>
                    <stop offset="1" stop-color="#FF80C1"/>
                    </linearGradient>
                    </defs>
                    </svg>
            </div>

                <div className="w-full  md:pt-[100px] p-10 bg-violet-100 bg-opacity-80 flex flex-col justify-center items-center">
                        <p className="w-full md:w-3/4 text-center text-blue-950 text-[18px] md:text-[30px] font-bold font-['Figtree'] ">Ready to connect with more customers through Primeslots and seamless bookings?</p>
                        <button class="w-[150px] md:w-[250px] h-[40px] md:h-[60px] mt-10 bg-pink-600 rounded-[50px] shadow text-white text-[15px] md:text-lg font-bold font-['Figtree']">Get Started Now!</button>    
                </div>

                <div className="h-[70px] md:h-[150px] mr-auto bg-violet-100 w-full bg-opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[50px] h-[100px] md:w-[77px] md:h-[205px]" viewBox="0 0 77 205" fill="none">
                        <path d="M75.915 98.7957C77.903 125.998 70.3402 165.475 51.9278 182.183C33.5154 198.892 -15.2333 211.544 -34.5595 199.044C-53.8856 186.544 -62.9391 139.062 -64.0293 107.182C-65.1194 75.3018 -58.4386 22.4666 -41.1004 7.76446C-23.7622 -6.93769 20.4972 3.79693 39.9998 18.9688" fill="url(#paint0_linear_525_2661)"/>
                        <defs>
                            <linearGradient id="paint0_linear_525_2661" x1="-69.9946" y1="60.2917" x2="79.2925" y2="134.693" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A680FF"/>
                            <stop offset="1" stop-color="#FF80D9"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
        </div>

        {/* Stay in the Loop section bg-[#0a075f] */}
        <div className="main h-[160px] sm:h-[160px] md:h-[180px] bg-[#0A075F]  flex justify-center items-center  max-sm:pt-14 ">
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
            className="h-12 w-38 rounded-[50px] flex-shrink-0 bg-pink-600 hover:bg-pink-800 border-pink-600
             hover:border-pink-800 text-lg border-4 text-white py-1 px-1 max-sm:w-[70px]  max-sm:border-white  
             max-sm:bg-white max-sm:hover:bg-white max-sm:hover:border-white flex items-center"
            type="button"
          >
            
              <Image src="/assets/subscribe.png" width={70} height={70} alt="Subscribe" className='bg-white sm:hidden flex rounded-[50px]'/>
              <span className="p-2  hidden sm:flex ">Subscribe Now</span>
          
          </button>
        </div>

      </div>
    </div>
</>
    )
}

export default ReadyToConnect