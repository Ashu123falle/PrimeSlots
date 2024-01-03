import Image from 'next/image'
import React from 'react'
import blankphoto from '@/pages/assets/photoFill.svg'

const OurAdvantage = () => {
    return (
        <>
            <div className="px-10 grid grid-flow-row main bg-gradient-to-t from-violet-100 via-violet-100 to-white sm:px-8 md:px-14 lg:px-24 xl:px-40  py-10 sm:space-y-2 md:space-y-6">

                <div className='h-[180px] sm:h-[220px] md:h-[240px] lg:h-[300px] bg-[#232526] flex justify-center items-center rounded-xl'>
                    <Image src={blankphoto} className='' />
                </div>


                {/* content  */}
                <div className="mt-3 px-4">
                    <div className=''>
                        <span className="text-[#242565] text-xl sm:text-3xl md:text-4xl font-bold font-['Playfair']">our</span>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl text-[#242565] font-['Playfair'] font-bold ">advantages</h1>
                    </div>


                    <div className='mt-5 py-3 grid sm:grid-cols-2 sm:mt-10 sm:gap-y-20 gap-y-12 sm:py-5'>
                        <div className='flex items-center space-x-4  text-[#131C5F] pl-5'>
                            <Image src={blankphoto} className='w-[8%] text-white bg-gray-300 p-2 rounded-full mt-[-30px]' />
                            <div className='leading-[1rem] space-y-5'>
                                <h2 className="sm:text-[1.4rem] text-[1.2rem] font-bold font-['Playfair']">Global Visibility</h2>
                                <p className='text-[0.9rem] sm:text-[0.8rem] md:text-[1rem]'>Enhance and Capitalise the number <br /> of people for your venue</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4 text-[#131C5F] pl-5'>
                            <Image src={blankphoto} className='w-[8%] text-white bg-gray-300 p-2 rounded-full mt-[-30px]' />
                            <div className='leading-[1rem] space-y-5'>
                                <h2 className="sm:text-[1.4rem] text-[1.2rem] font-['Playfair'] font-bold">Global Visibility</h2>
                                <p className='text-[0.9rem] sm:text-[0.8rem] md:text-[1rem]'>Enhance and Capitalise the number <br /> of people for your venue</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4 text-[#131C5F] pl-5 '>
                            <Image src={blankphoto} className='w-[8%] text-white bg-gray-300 p-2 rounded-full mt-[-30px]' />
                            <div className='leading-[1rem] space-y-5'>
                                <h2 className="sm:text-[1.4rem] font-['Playfair'] text-[1.2rem] font-bold">Global Visibility</h2>
                                <p className='text-[0.9rem] sm:text-[0.8rem] md:text-[1rem]'>Enhance and Capitalise the number <br /> of people for your venue</p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4 text-[#131C5F] pl-5 '>
                            <Image src={blankphoto} className='w-[8%] text-white bg-gray-300 p-2 rounded-full mt-[-30px]' />
                            <div className='leading-[1rem] space-y-5'>
                                <h2 className="sm:text-[1.4rem] font-['Playfair'] text-[1.2rem] font-bold">Global Visibility</h2>
                                <p className='text-[0.9rem] sm:text-[0.8rem] md:text-[1rem]'>Enhance and Capitalise the number <br /> of people for your venue</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurAdvantage