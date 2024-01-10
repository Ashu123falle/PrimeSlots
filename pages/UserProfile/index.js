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
                </div>
            </div>
            
        </>
    )
}