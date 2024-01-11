import ContactUsnavbar from "@/Components/ContactUsnavbar/ContactUsnavbar";
import Image from "next/image";
import { motion } from 'framer-motion'
import MiniNavbar from "@/Components/MiniNavbar/MiniNavbar";

function Blogs() {
    return (
        <>
            
            <MiniNavbar />


            <div className="py-6 banner-container flex flex-col justify-center items-center bg-[#EBEDFD] w-[100vw] px-5 sm:px-10 md:px-16 lg:px-32">

                <h1 className="font-[Playfair] text-[76px] sm:text-[96px] text-[#13165F] font-normal text-center">Our Blogs</h1>
                <p className="font-[DM Sans] text-[18px] sm:text-[20px] text-[#121212] text-center">Get the latest updates and advertising tips from Industry experts</p>

                <div className="image-cont flex flex-col justify-center my-8">
                    <Image src='/assets/BlogImage.png' height={405} className="max-w-[100%]"  width={1880} alt="blog banner"/>
                    <p className="des xs:text-[16px] sm:text-[21px] md:text-[26px] mt-3 text-[#121212] text-left leading-5 sm:leading-6 md:leading-8">
                    Mastering the Art of Outdoor Advertising: A Comprehensive Guide for Businesses
                    </p>
                    <p className="des flex items-center xs:text-[14px] sm:text-[17px] md:text-[20px] mt-2 text-[#717171] text-left leading-5 sm:leading-6 md:leading-8">
                        4 Min &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                        <circle cx="2.5" cy="3" r="2.5" fill="#717171"/>
                        </svg>
                        &nbsp;August 19, 2022
                    </p>
                </div>

               
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='absolute hidden lg:block top-50 mb-32 left-7'>
                    <Image src='/assets/Vectortop.png' alt="Vector Top" height={61} width={40} className='sm:w-[63]'/>
                </motion.div>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='absolute hidden lg:block mt-32 left-0'>
                    <Image src='/assets/Vectormiddle.png' alt="Vector Middle" height={100} width={50} className='sm:w-[70]'/>
                </motion.div>
               
            </div>
        </>
    )
}

export default Blogs;