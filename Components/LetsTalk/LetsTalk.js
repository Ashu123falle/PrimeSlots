import React from 'react'
import Image from 'next/image'
import contactusvector from '@/public/assets/contactusvector.svg'
import contactusvector2 from '@/public/assets/contactusvector2.svg'
import contactus from '@/public/assets/contactus.svg'
import contactuscall from '@/public/assets/contactuscall.svg'
import contactusemail from '@/public/assets/contactusemail.svg'

const LetsTalk = () => {
    return (
        <>
            <div className='relative py-5 sm:py-10 md:py-5 sm:gap-10 md:gap-0 flex flex-col md:flex-row md:h-[550px]'>
                <Image src={contactusvector} width={30} height={30} alt='' className='absolute sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] md:left-5 md:top-36 sm:left-5 sm:top-20 left-2 top-16' />
                <Image src={contactusvector2} width={20} height={20} alt='' className='absolute w-[50px] h-[70px] sm:w-[70px] sm:h-[100px] md:w-[50px] md:h-[100px] lg:w-[50px] lg:h-[120px] md:left-0 sm:top-1/4 md:top-2/4 lg:top-2/3 top-60' />

                <div className='w-full flex justify-center sm:justify-center md:justify-end lg:justify-center items-center'>
                    <div className='w-[280px] sm:w-[350px] md:w-[300px] lg:w-[350px] p-5 space-y-5'>
                        <h1 className='text-3xl lg:text-4xl font-bold text-[#011334]'>Let's talk with us</h1>
                        <p className='text-sm'>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</p>
                        <div className='space-y-3'>
                            <div className='flex gap-3'>
                                <Image src={contactus} width={15} height={15} alt='' />
                                <p className='text-base font-bold text-[#011334]'>3,4th floor, Siddharth Bandodkar Bhavan, Panaji, Goa 403001</p>
                            </div>
                            <div className='flex gap-3'>
                                <Image src={contactuscall} width={15} height={15} alt='' />
                                <p className='text-base font-bold text-[#011334]'>+1 234 678 9108 99</p>
                            </div>
                            <div className='flex gap-3'>
                                <Image src={contactusemail} width={15} height={15} alt='' />
                                <p className='text-base font-bold text-[#011334]'>Contact@primeslots.com</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* second content */}
                <div className='w-full p-5 sm:p-0 flex justify-center sm:justify-center md:justify-center lg:justify-start items-center'>
                    <div className='border border-[#DDE5EE] shadow-xl sm:shadow-2xl rounded-lg p-3 sm:p-8 md:w-[350px] lg:w-[400px]'>
                        <div className='content space-y-5'>
                            <div className='flex gap-5'>
                                <input type="text" placeholder='First Name' className='bg-[#DDE5EE80] px-2 py-2 w-full rounded-lg' />
                                <input type="text" placeholder='Last Name' className='bg-[#DDE5EE80] px-2 py-2 w-full rounded-lg' />
                            </div>
                            <div>
                                <input type="email" name="" id="" placeholder='Email' className='bg-[#DDE5EE80] px-2 py-2 rounded-lg w-full' />
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder='Mobile Number' className='bg-[#DDE5EE80] px-2 py-2 rounded-lg w-full' />
                            </div>
                            <div>
                                <textarea name="" id="" cols="5" rows="5" placeholder='Your Message' className='bg-[#DDE5EE80] px-2 py-2 rounded-lg w-full'>
                                </textarea>
                            </div>
                            <button type="button" className='w-full bg-[#F5167E] text-white  py-2 rounded-full'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LetsTalk