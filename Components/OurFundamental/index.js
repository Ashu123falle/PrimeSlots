import Image from 'next/image'
import React from 'react'
import Vector0 from '@/pages/assets/Vector0.svg'
import Group1 from '@/pages/assets/Group1.svg'
import Vector2 from '@/pages/assets/Vector2.svg'
import Group2 from '@/pages/assets/Group2.svg'
import Vector3 from '@/pages/assets/Vector3.svg'
import Group3 from '@/pages/assets/Group3.svg'



const OurFundamental = () => {
    return (
        <>
            <div className="main p-5 sm:p-10 space-y-10 xl:px-28 sm:space-y-16 md:space-y-20">
                <div className='text-center space-y-4 md:px-20'>
                    <h1 className='text-2xl sm:text-3xl text-[#242565] font-[Playfair]'>Our Fundamental principles</h1>
                    <p className='text-sm text-pretty leading-4 text-[#6A6A6A] text-[Figtree]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>



                <div className='flex flex-col justify-evenly md:flex-row gap-5 md:gap-0'>
                    <div className="p-5 flex gap-3">
                        <div>
                            <Image src={Vector0} className='w-[30px] h-[90px] sm:w-[40px] sm:h-[90px] md:w-[40px] md:h-[90px] mt-10' />
                        </div>

                        <div className="content grid gap-4 md:gap-6 lg:gap-10">
                            <Image src={Group1}
                             className='w-[15%] md:w-[45px] sm:w-[10%]' />
                            <h1 className='text-4xl  uppercase text-[#6979F8] font-[Playfair]'>Lorem Ipsum is simply</h1>
                            <p className='leading-5 text-xl font-[Nexa] text-[#9F9E9E]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>


                    {/* Two */}
                    <div className="p-5 flex gap-3">
                        <div>
                            <Image src={Vector2} className='w-[30px] h-[90px] sm:w-[40px] sm:h-[90px] md:w-[40px] md:h-[90px] mt-10' />
                        </div>

                        <div className="content grid gap-4 md:gap-6 lg:gap-10">
                            <Image src={Group2} className='w-[15%] md:w-[45px] sm:w-[10%]' />
                            <h1 className='text-4xl uppercase text-[#6979F8] font-[Playfair]'>Lorem Ipsum is simply</h1>
                            <p className='leading-5 text-xl font-[Nexa] text-[#9F9E9E]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>


                    {/* Three */}
                    <div className="p-5 flex gap-3">
                        <div>
                            <Image src={Vector3} className='w-[30px] h-[90px] sm:w-[40px] sm:h-[90px] md:w-[40px] md:h-[90px] mt-10' />
                        </div>

                        <div className="content grid gap-4 md:gap-6 lg:gap-10">
                            <Image src={Group3} className='w-[15%] md:w-[45px] sm:w-[10%]' />
                            <h1 className='text-4xl uppercase text-[#6979F8] font-[Playfair]'>Lorem Ipsum is simply</h1>
                            <p className='leading-5 text-xl font-[Nexa] text-[#9F9E9E]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurFundamental