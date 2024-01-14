import React from 'react'
import Image from 'next/image'
import ContactUsbackground from '@/public/assets/contactUs-bg-image.png'

const ContactUsimage = () => {
    return (
        <>
            <div className='flex flex-col sm:flex-row bg-gradient-to-r from-[#E780E3] to-[#DF8FDC] mt-16'>
                <div className="w-full">
                    <Image src={ContactUsbackground} alt='bg-image' className='' />
                </div>

                <div className='w-full py-3 flex justify-center items-center'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl text-[#131C5F] font-[Playfair] font-semibold'>Contact Us</h1>
                </div>
            </div>
        </>
    )
}

export default ContactUsimage