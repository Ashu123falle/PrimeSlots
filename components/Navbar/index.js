import React, { useEffect, useState } from "react";
import Image from 'next/image' ;

import mainlogo from '@/pages/assets/mainlogo.png'


function Navbar() {

    return (
        <>
        <nav className="flex items-center justify-around flex-wrap p-6">
            <Image src={mainlogo} className="w-[136.7px] h-8 relative"></Image>
            <div className="">
            <div className={"bg-[#fbfbff] rounded-[10px] border-solid border-[#d4d9ff] border w-[580px] h-[47px] relative flex justify-end items-center"}>
            <input type="text"/>
            <a><svg
                className={"w-6 h-6 relative overflow-visible "}
               
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                    fill="#131C5F"
                />
            </svg>
            </a>

            <div
            className={
                "border-solid border-[#c7cfd9] border-t border-r-[0] border-b-[0] border-l-[0] w-[33px] h-0 relative "
            }
            style={{ transform: "rotate(90deg) scale(1, 1)" }}
            ></div>
            
            <a>
                <svg
                className={"w-6 h-6 relative overflow-visible "}
               
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M15.0001 19.88C15.0401 20.18 14.9401 20.5 14.7101 20.71C14.6176 20.8027 14.5077 20.8762 14.3868 20.9264C14.2658 20.9766 14.1361 21.0024 14.0051 21.0024C13.8742 21.0024 13.7445 20.9766 13.6235 20.9264C13.5025 20.8762 13.3926 20.8027 13.3001 20.71L9.29013 16.7C9.18107 16.5934 9.09814 16.463 9.04783 16.319C8.99752 16.175 8.9812 16.0213 9.00013 15.87V10.75L4.21013 4.62C4.04774 4.41153 3.97446 4.14726 4.00632 3.88493C4.03817 3.6226 4.17257 3.38355 4.38013 3.22C4.57013 3.08 4.78013 3 5.00013 3H19.0001C19.2201 3 19.4301 3.08 19.6201 3.22C19.8277 3.38355 19.9621 3.6226 19.9939 3.88493C20.0258 4.14726 19.9525 4.41153 19.7901 4.62L15.0001 10.75V19.88ZM7.04013 5L11.0001 10.06V15.58L13.0001 17.58V10.05L16.9601 5H7.04013Z"
                    fill="#131C5F"
                />
                </svg>
            </a>
            </div>
            </div>
            <div className="flex justify-around items-center">
            <h1
                className="text-[#848484] text-center font-['Figtree-Regular',_sans-serif] text-base leading-[101%] font-normal relative w-[129px]"
                >
                Marketplace
            </h1>
            <h1
                className="text-[#848484] text-center font-['Figtree-Regular',_sans-serif] text-base leading-[101%] font-normal relative w-[129px]"
                >
                Partners
            </h1>
            </div>
            <div className="flex justify-between items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="m-2">
            <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="#131C5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="m-2">
            <path d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z" stroke="#131C5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z" stroke="#131C5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 5H7L10 22H26" stroke="#131C5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 16.6667H25.59C25.7056 16.6668 25.8177 16.6268 25.9072 16.5536C25.9966 16.4803 26.0579 16.3783 26.0806 16.2649L27.8806 7.26487C27.8951 7.1923 27.8934 7.11741 27.8755 7.0456C27.8575 6.9738 27.8239 6.90687 27.7769 6.84965C27.73 6.79242 27.6709 6.74633 27.604 6.7147C27.5371 6.68308 27.464 6.6667 27.39 6.66675H8" stroke="#131C5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="m-2">
            <path d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z" stroke="black" stroke-width="1.5"/>
            </svg>
            </div>
        </nav>
        </>
    )
}

export default Navbar