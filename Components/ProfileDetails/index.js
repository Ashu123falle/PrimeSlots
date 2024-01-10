// components/ProfileDetails.js

import React from 'react';
import Image from 'next/image';


const ProfileDetails = () => {
  return (
    <>
      {/* Visible on medium and above devices */}
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-around   mt-4 hidden md:flex border rounded p-8 ' >

        <form className="flex flex-col md:flex-row gap-4 mx-4">
          <div className='flex flex-col'>
            <div className="mb-4 md:mb-6 mr-4">
              <label htmlFor="name" className="block text-md font-medium text-gray-700">Name:</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full md:w-64 bg-gray-200" placeholder='Sahil Nexocide' />
            </div>
            <div className="mb-8 md:mb-0">
              <label htmlFor="phone" className="block text-md font-medium text-gray-700">Phone No.:</label>
              <input type="tel" id="phone" name="phone" className="mt-1 p-2 border border-gray-300 rounded-md w-full md:w-64 bg-gray-200" placeholder='9999999999'/>
            </div>
           
          </div>
          <div className='flex flex-col'>
           
            <div className="mb-4 md:mb-6 mr-4">
              <label htmlFor="email" className="block text-md font-medium text-gray-700">Email:</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full md:w-64 bg-gray-200" placeholder='abc@gmail.com'/>
            </div>
            <div>
              <label htmlFor="website" className="block text-md font-medium text-gray-700">Website URL:</label>
              <input type="url" id="website" name="website" className="mt-1 p-2 border border-gray-300 rounded-md w-full md:w-64 bg-gray-200" placeholder='www.abc.com'/>
            </div>
          </div>
        </form>
        <div className="profile-image mb-4 md:mb-0 flex flex-col items-center">
  <Image
    className="mx-auto object-cover"
    src="/assets/profile.png"
    alt="Profile"
    width={120} 
    height={120} 
    layout='fixed'
  />
  <a href="#" className="mt-2 text-sm text-blue-500 underline">Upload Image</a>
</div>

      </div>

      {/* Visible on extra small (xs) devices and hidden on medium and above devices */}
      <div className=' md:hidden p-5 border rounded p-6 m-5'>
      <div className="profile-image mb-4 md:mb-0 flex flex-col items-center ">
  <Image
    className="mx-auto"
    src="/assets/profile.png"
    alt="Profile"
    width={120} // Set your desired width
    height={120} // Set your desired height
  />
  <a href="#" className="mt-2 text-sm text-blue-500 underline">Upload Image</a>
</div>

        <form className="flex flex-col md:flex-row gap-4 mx-4 ">
          <div className="mb-4 md:mb-0">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full md:w-64 bg-gray-200" placeholder='Sahil Nexocide' />
          </div>
          <div className="mb-4 md:mb-0">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full md:w-64 bg-gray-200 " placeholder='9999999999' />
          </div>
          <div className="mb-8 md:mb-0">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone No.:</label>
            <input type="tel" id="phone" name="phone" className="mt-1 p-2 border border-gray-300 rounded-md w-full md:w-64 bg-gray-200 " placeholder='abc@gmail.com'/>
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website URL:</label>
            <input type="url" id="website" name="website" className="mt-1 p-2 border border-gray-300 rounded-md w-full md:w-64 bg-gray-200 " placeholder='www.abc.com'/>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileDetails;
