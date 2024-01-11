
import ContactUsnavbar from "@/Components/ContactUsnavbar/ContactUsnavbar";
import Image from "next/image";
import { motion } from 'framer-motion'
import MiniNavbar from "@/Components/MiniNavbar/MiniNavbar";

import BlogItemCard from "@/Components/BlogItemCard/BlogItemCard"
import StayLoop from "@/Components/StayLoop/StayLoop"
import Footer from "@/Components/Footer/Footer"

const blogsList = [
    {
        id : 1,
        image :"/assets/blog1.png",
        text : "Outshine the Competition: A Deep Dive into Effective Outdoor Advertising Tactics",
    },
    {
        id : 2,
        image :"/assets/blog2.png",
        text : "Breaking Boundaries: Innovative Approaches to OOH Media Advertising",
    },
    {
        id : 3,
        image :"/assets/blog3.png",
        text : "Driving Success: How OOH Media Enhances Your Marketing ROI",
    },
    {
        id : 4,
        image :"/assets/blog4.png",
        text : "Beyond the Streets: The Evolution of OOH Advertising in a Dynamic Marketplace",
    },
    {
        id : 5,
        image :"/assets/blog5.png",
        text : "Cracking the Code: How OOH Media Drives Brand Recognition and Customer Engagement",
    }
    
]



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

           <ContactUsnavbar />
            
            <div className="flex flex-col justify-center items-center">
                <ul className="px-2 py-5 sm:px-10 md:px-16 lg:px-32  xl:flex xl:flex-col xl:justify-center xl:items-center">
                    {
                        blogsList.map((each) => <BlogItemCard blogItemDetails={each} key={each.id}/>)
                    }
                </ul>
                <button className="text-pink-600 text-base font-normal font-['Figtree'] tracking-wide w-[145.79px] h-[49.40px] px-[30.40px] py-[15.20px] bg-white rounded-[50px] shadow border border-pink-600 justify-center items-center gap-[7.60px] inline-flex mb-5 sm:mb-10 md:mb-15 lg:mb-20">Load More</button>
            </div>
            <StayLoop />
            <Footer />

        </>
    )
}

export default Blogs;