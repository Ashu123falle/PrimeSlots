import Image from 'next/image'
import React from 'react'


const OurFundamental = () => {
    return (
        <>
            <div className="main p-5 sm:p-10 space-y-10 xl:px-28 sm:space-y-16 md:space-y-20">
                <div className='text-center space-y-4 md:px-20 mb-[-25px]'>
                    <h1 className='text-[40px] text-[#242565] font-[Playfair]'>Our Fundamental principles</h1>
                    <p className='text-lg text-pretty leading-4 text-[#6A6A6A] text-[Figtree]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className='flex flex-col justify-evenly md:flex-row gap-5 md:gap-0'>
                    <div className="p-5 flex gap-3">
                        <div>
                            <Image width={30} height={90} src='/assets/Vector0.svg' alt="vector0" className='sm:w-[40px] sm:h-[90px] md:w-[40px] md:h-[90px] mt-10' />
                        </div>

                        <div className="content grid gap-4 md:gap-6 lg:gap-10">
                            <Image width={50} height={40} src='/assets/Group1.svg' alt="group1"
                             className=' md:w-[45px] sm:w-[10%]' />
                            <h1 className='text-4xl  uppercase text-[#6979F8] font-[Playfair]'>Lorem Ipsum is simply</h1>
                            <p className='leading-5 text-[27.03px] font-[Nexa] text-[#9F9E9E]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>


                    {/* Two */}
                    <div className="p-5 flex gap-3">
                        <div>
                            <Image width={30} height={90} src='/assets/Vector2.svg' alt="vector2" className='sm:w-[40px] sm:h-[90px] md:w-[40px] md:h-[90px] mt-10' />
                        </div>

                        <div className="content grid gap-4 md:gap-6 lg:gap-10">
                            <Image width={50} height={40} src='/assets/Group2.svg' alt="group2" className='md:w-[45px] sm:w-[10%]' />
                            <h1 className='text-4xl uppercase text-[#6979F8] font-[Playfair]'>Lorem Ipsum is simply</h1>
                            <p className='leading-5 text-[27.03px] font-[Nexa] text-[#9F9E9E]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>


                    {/* Three */}
                    <div className="p-5 flex gap-3">
                        <div>
                            <Image width={30} height={90} alt="vector3" src='/assets/Vector3.svg' className='sm:w-[40px] sm:h-[90px] md:w-[40px] md:h-[90px] mt-10' />
                        </div>

                        <div className="content grid gap-4 md:gap-6 lg:gap-10">
                            <Image width={50} height={40} src='/assets/Group3.svg' alt="group3" className='md:w-[45px] sm:w-[10%]' />
                            <h1 className='text-4xl uppercase text-[#6979F8] font-[Playfair]'>Lorem Ipsum is simply</h1>
                            <p className='leading-5 text-[27.03px] font-[Nexa] text-[#9F9E9E]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OurFundamental