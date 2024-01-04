import Navbar from "@/Components/Navbar"
import { useRouter } from "next/router";
import Link from "next/link";
import OurStory from "@/pages/About/OurStory";
import TrustedBy from "@/pages/About/TrustedBy";
import Footer from "@/Components/Footer";
import StayLoop from "@/Components/StayLoop";

const About = () => {

    const router = useRouter();
    const { pathname } = router;
    const [,pageName] = pathname.split("/")

    return (
        <>
          <Navbar />
          <div>
            <div className='px-5 py-4 mb-[-10px] text-[16px] ml-6 md:px-7 xl:px-14'>
                <Link href="/">
                    <span className= "text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " > Home &nbsp; / </span> </Link>
                  <span className= "text-slate-950 text-base font-normal font-['Figtree'] leading-tight" >  &nbsp; {pageName} &nbsp; /</span> 
            </div>
          
            <hr className='border border-gray-300 my-3 w-[99vw]' />
          </div>
          <OurStory />
          <TrustedBy />
          <div className="mb-20">
            <StayLoop/>
          </div>
          
          <Footer/>
        </>
    )
}

export default About;