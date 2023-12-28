import React from 'react'
import Image from 'next/image'
import light from '@/pages/assets/light.png'

const LightBox = () => {
    return (
        <>
            <div className='main bg-gradient-to-r to-[#ffffff] sm:h-[280px] md:h-[350px] flex justify-center items-center'>
                <div className='border p-1 rounded-3xl bg-[#D9D9D9] sm:w-[92%] md:w-[85%] lg:w-[80%] xl:w-[70%]'>
                    <div className='rounded-3xl bg-[#0A0D26]'>
                        <div className="lights grid grid-flow-col">
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                            <Image src={light} className='w-[70%] mt-[-12px]' />
                        </div>

                        <div className="content mt-[-10px] text-center px-5 text-[#FFF] grid grid-flow-col justify-around sm:pb-8 md:pb-12 lg:pb-16">
                            <div className='space-y-2 pb-5'>
                                <h1 className='sm:text-2xl md:text-3xl lg:text-4xl'>150+</h1>
                                <p>Achievements</p>
                            </div>
                            <span className='w-[1px] bg-[#6B68B9]'></span>

                            <div className='space-y-2'>
                                <h1 className='sm:text-2xl md:text-3xl lg:text-4xl'>1589+</h1>
                                <p>Brands Advertise</p>
                            </div>
                            <span className='w-[1px] bg-[#6B68B9]'></span>

                            <div className='space-y-2'>
                                <h1 className='sm:text-2xl md:text-3xl lg:text-4xl'>4569</h1>
                                <p>Happy Clients</p>
                            </div>
                            <span className='w-[1px] bg-[#6B68B9]'></span>

                            <div className='space-y-2'>
                                <h1 className='sm:text-2xl md:text-3xl lg:text-4xl'>4569</h1>
                                <p>Achievements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LightBox