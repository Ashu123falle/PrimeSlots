import Image from 'next/image'
import React from 'react'
import blankphoto from '@/pages/assets/photoFill.svg'

const OurAdvantage = () => {
    return (
        <>
            <div className="main bg-gradient-to-r from-[#EEE1FF] via-[#EEE1FF] to-[#FFFFFF] sm:px-8 md:px-14 lg:px-24 xl:px-40  py-10 sm:space-y-2 md:space-y-6">

                <div className='sm:h-[220px] md:h-[240px] lg:h-[300px] bg-[#232526] flex justify-center items-center rounded-xl'>
                    <Image src={blankphoto} className='' />
                </div>

                <div className="">
                    <div className=''>
                        <span className='text-[#242565] sm:text-3xl md:text-4xl font-bold'>our</span>
                        <h1 className='sm:text-5xl md:text-6xl text-[#242565] font-bold'>advantages</h1>
                    </div>

                    <div className='grid grid-cols-2 mt-10 gap-y-20 py-5'>
                        <div className='flex items-center space-x-4 text-[#131C5F] pl-5'>
                            <Image src={blankphoto} className='w-[8%] text-white bg-gray-300 p-2 rounded-full mt-[-30px]' />
                            <div className='leading-[1rem] space-y-5'>
                                <h2 className='text-[1.4rem] font-semibold'>Global Visibility</h2>
                                <p className='sm:text-[0.8rem] md:text-[1rem]'>Enhance and Capitalise the number <br /> of people for your venue</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4 text-[#131C5F] pl-5'>
                            <Image src={blankphoto} className='w-[8%] text-white bg-gray-300 p-2 rounded-full mt-[-30px]' />
                            <div className='leading-[1rem] space-y-5'>
                                <h2 className='text-[1.4rem] font-semibold'>Global Visibility</h2>
                                <p className='sm:text-[0.8rem] md:text-[1rem]'>Enhance and Capitalise the number <br /> of people for your venue</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4 text-[#131C5F] pl-5 '>
                            <Image src={blankphoto} className='w-[8%] text-white bg-gray-300 p-2 rounded-full mt-[-30px]' />
                            <div className='leading-[1rem] space-y-5'>
                                <h2 className='text-[1.4rem] font-semibold'>Global Visibility</h2>
                                <p className='sm:text-[0.8rem] md:text-[1rem]'>Enhance and Capitalise the number <br /> of people for your venue</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4 text-[#131C5F] pl-5'>
                            <Image src={blankphoto} className='w-[8%] text-white bg-gray-300 p-2 rounded-full mt-[-30px]' />
                            <div className='leading-[1rem] space-y-5'>
                                <h2 className='text-[1.4rem] font-semibold'>Global Visibility</h2>
                                <p className='sm:text-[0.8rem] md:text-[1rem]'>Enhance and Capitalise the number <br /> of people for your venue</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurAdvantage