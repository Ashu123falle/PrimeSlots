import Navbar from "@/components/Navbar/Navbar"
import { useRouter } from 'next/router';

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
        </>
    )
}