import React from 'react'
import Image from 'next/image'
import light from '@/pages/assets/light.png'

const LightBox = () => {
    return (
        <>
            <div className='p-3 main bg-[#FFF] h-[240px] sm:h-[280px] md:h-[350px] flex flex-col justify-center items-center'>
                <div className='border p-1 rounded-3xl bg-[#D9D9D9] w-[95%] sm:w-[92%] md:w-[85%] lg:w-[80%] xl:w-[70%]'>
                    <div className='rounded-3xl bg-[#0A0D26]'>
                        <div className="lights grid grid-flow-col sm:pl-4">
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                            <Image src={light} className='sm:w-[70%] mt-[-12px]' />
                        </div>

                        <div className="content mt-[-10px] text-center sm:px-5 text-[#FFF] grid grid-flow-col justify-around pb-4 sm:pb-8 md:pb-12 lg:pb-16">
                            <div className='space-y-2 pb-5'>
                                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>150+</h1>
                                <p className='sm:text-[16px] text-[11px]'>Achievements</p>
                            </div>
                            <span className='w-[1px] bg-[#6B68B9]'></span>

                            <div className='space-y-2'>
                                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>1589+</h1>
                                <p className='sm:text-[16px] text-[11px]'>Brands Advertise</p>
                            </div>
                            <span className='w-[1px] bg-[#6B68B9]'></span>

                            <div className='space-y-2'>
                                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>4569</h1>
                                <p className='sm:text-[16px] text-[11px]'>Happy Clients</p>
                            </div>
                            <span className='w-[1px] bg-[#6B68B9]'></span>

                            <div className='space-y-2'>
                                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>4569</h1>
                                <p className='sm:text-[16px] text-[11px]'>Achievements</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-evenly px-10 sm:px-28 w-[95%] sm:w-[92%] md:w-[85%] lg:w-[80%] xl:w-[70%]'>
                    <div class="w-5 h-[25px] sm:h-[30px] md:h-[34px] lg:h-[38px]  xl:h-[42px] bg-zinc-300 border-b border-zinc-400"></div>
                    <div class="w-5 h-[25px] sm:h-[30px] md:h-[34px] lg:h-[38px]  xl:h-[42px] bg-zinc-300 border-b border-zinc-400"></div>
                </div>
            </div>
        </>
    )
}

export default LightBox