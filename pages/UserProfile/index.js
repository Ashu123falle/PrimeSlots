import Navbar from "@/Components/Navbar/Navbar"
import { useRouter } from 'next/router';
import MyBookings from "@/Components/MyBookings/MyBookings.js"
import Image from "next/image"; 


export default function Userprofile () {

    const router = useRouter();
    const { category } = router.query;
    const { pathname } = router;
    const [,pageName] = pathname.split("/")
  
    
    return (
        <>
            <Navbar />
            <div>
                <div className='px-5 py-4 mb-[-10px] text-[14px] ml-8'>
                <span className= "text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " > Home &nbsp; / </span> 
                <span className= " mx-3 text-slate-950 text-base font-normal font-['Figtree'] leading-tight " >  {pageName} &nbsp; /</span> 
                
                </div>
                <hr className='border border-gray-300 w-[100vw] mb-3' />
            </div>
            <div className="m-5 md:m-10 xl:flex xl:flex-col xl:justify-center xl:items-center">
                <h1 className="text-zinc-900 xl:self-start text-2xl font-semibold font-['Figtree'] leading-loose">My Bookings</h1>
                <div className="rounded-md border border-zinc-200 width-full xl:w-3/4 ">
                    <MyBookings />
                    <hr className='border border-zinc-200 w-[85%] mb-10 md:mb-20 ml-2  sm:ml-10' />
                    <MyBookings />
                    <hr className='border border-zinc-200 w-[85%] mb-10 md:mb-20 ml-2  sm:ml-10' />
                    <MyBookings />
                    <hr className='border border-zinc-200 w-[85%] mb-5 md:mb-10 ml-2  sm:ml-10' />
                    <button className="w-[159px] h-10 m-1 lg:ml-10 sm:ml-3 mb-5 md:mb-10 pl-[9px] pr-[13.50px] py-[9px] bg-indigo-500 rounded-md justify-start items-end gap-[13.50px] inline-flex text-white text-base font-medium font-['Inter']">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M18.3332 10.0833H7.17734L12.3015 4.95916L10.9998 3.66666L3.6665 11L10.9998 18.3333L12.2923 17.0408L7.17734 11.9167H18.3332V10.0833Z" fill="white"/>
                        </svg>
                        <p>Browse more</p>
                    </button>
                </div>
            </div>
            
        </>
    )
}