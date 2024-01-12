import React, { useEffect, useState } from "react";
import JobsHeader from "@/Components/JobsHeader";
import WhyShouldJoin from "@/Components/WhyShouldJoin/WhyShouldJoin";


const backgroundImageUrl = '/assets/border.png'
const Jobs = () => {

  return (
    <>
      <div>
        <div className='h-[70px]' style={{ background: 'linear-gradient(to bottom, rgba(12, 12, 66, 1), rgba(36, 37, 101, 1))' }}>
          <JobsHeader />
          <div className=" relative w-full bg-cover text-white flex flex-col justify-center items-center" style={{ backgroundImage: 'url("/assets/Border.png")', height: 'auto' }}>
            <div className="absolute inset-0" style={{ backgroundImage: 'url("/assets/BorderLayer.png")', opacity: 2 }}></div>
            <div className="relative z-20 text-center mt-32 mb-10 max-w-[655px] p-5">
              <h1
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}
                className="xs:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-2"
              >
                JOIN US
              </h1>

              <p
                className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-5"
              >
                Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
              </p>

              <button
                className="bg-pink-500 rounded-full px-4 py-2 text-white sm:px-6 sm:py-3 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
              >
                Join the team
              </button>
            </div>
          </div>
          <WhyShouldJoin />
        </div>
      </div>
    </>
  );
};

export default Jobs;

