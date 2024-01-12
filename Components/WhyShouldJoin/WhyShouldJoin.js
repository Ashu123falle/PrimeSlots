import React from 'react'
import contactusvector from '@/public/assets/contactusvector.svg'
import contactusvector2 from '@/public/assets/contactusvector2.svg'
import jobsicon1 from '@/public/assets/jobsicon1.svg'
import jobsicon2 from '@/public/assets/jobsicon2.svg'
import jobsvector1 from '@/public/assets/jobsvector1.svg'
import jobsvector2 from '@/public/assets/jobsvector2.svg'
import Image from 'next/image'


const WhyShouldJoin = () => {
    return (
        <>
            <div className='relative flex flex-col gap-14 sm:flex-col lg:flex-row py-14 sm:gap-20 lg:gap-0'>
                <Image src={contactusvector} width={30} height={30} alt='' className='absolute sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] md:left-5 md:top-10 sm:left-5 sm:top-20 left-2 top-16' />
                <Image src={contactusvector2} width={20} height={20} alt='' className='absolute w-[50px] h-[60px] sm:w-[70px] sm:h-[100px] md:w-[60px] md:h-[100px] lg:w-[50px] lg:h-[120px] md:left-0 sm:top-1/4 md:top-1/4 lg:top-52 top-52' />


                {/* onediv */}
                <div className='w-full flex justify-center sm:justify-center'>
                    <div className='w-[240px] sm:w-[350px] md:w-[340px] lg:w-[360px] xl:w-[430px] space-y-3 sm:space-y-5'>
                        <h1 className='text-[#E780E3] uppercase text-sm sm:text-base'>Benefits</h1>
                        <h2 className='text-2xl sm:text-4xl text-[#131C5F] font-bold font-[Playfair]'>Why you Should Join Our Awesome Team</h2>
                        <p className='text-[#131C5F] text-xs sm:text-base'>we want to feel like home when you are working at PrimeSlots Advertising & Consultancy Limited & for that we have curated a great set of benefits for you. It all starts with the free lunch!</p>
                    </div>
                </div>


                {/* seconddiv */}
                <div className='w-full lg:p-5 px-10 sm:px-14 md:px-20 lg:px-5'>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-5 md:gap-10 items-center'>

                        <div className='space-y-2 sm:space-y-3'>
                            <span className='flex justify-center w-fit p-3 bg-[#E7F2FF] rounded-full'>
                                <Image src={jobsvector1} alt='' width={30} className=' sm:w-[35px]' />
                            </span>
                            <h1 className='font-[Playfair] text-[#282933] text-xl font-bold'>Team work</h1>
                            <p className='text-[#131C5F] text-sm sm:text-base lg:text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                        </div>

                        <div className='space-y-2 sm:space-y-3'>
                            <span className='flex justify-center w-fit p-3 bg-[#E7F2FF] rounded-full'>
                                <Image src={jobsicon2} alt='' width={30} className='sm:w-[35px]' />
                            </span>
                            <h1 className='font-[Playfair] text-[#282933] text-xl font-bold'>Secured Future</h1>
                            <p className='text-[#131C5F] text-sm sm:text-base lg:text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                        </div>

                        <div className='space-y-2 sm:space-y-3'>
                            <span className='flex justify-center w-fit p-3 bg-[#E7F2FF] rounded-full'>
                                <Image src={jobsvector2} alt='' width={30} className='sm:w-[35px]' />
                            </span>
                            <h1 className='font-[Playfair] text-[#282933] text-xl font-bold'>Learning Opportunity</h1>
                            <p className='text-[#131C5F] text-sm sm:text-base lg:text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                        </div>

                        <div className='space-y-2 sm:space-y-3'>
                            <span className='flex justify-center w-fit p-3 bg-[#E7F2FF] rounded-full'>
                                <Image src={jobsicon1} alt='' width={30} className='sm:w-[35px]' />
                            </span>
                            <h1 className='font-[Playfair] text-[#282933] text-xl font-bold'>Upgrate Skills</h1>
                            <p className='text-[#131C5F] text-sm sm:text-base lg:text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyShouldJoin