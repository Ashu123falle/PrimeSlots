import Navbar from "@/components/Navbar/Navbar"
import { useRouter } from "next/router";
import Link from "next/link";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";

import OurStory from "@/components/OurStory/OurStory";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import Footer from "@/components/Footer/Footer";
import StayLoop from "@/components/StayLoop/StayLoop";
import OurFundamental from "@/components/OurFundamental/OurFundamentals";
import OurTeams from "@/components/OurTeams/OurTeam";

const About = () => {

    const router = useRouter();
    const { pathname } = router;
    const [,pageName] = pathname.split("/")

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <div>
                <div className='px-5 py-4 mb-[-10px] text-[16px] ml-6 md:px-7 xl:px-14'>
                    <Link href="/">
                        <span className= "text-zinc-400 text-base font-normal font-['Figtree'] leading-tight " > Home &nbsp; / </span> </Link>
                    <span className= "text-slate-950 text-base font-normal font-['Figtree'] leading-tight" >  &nbsp; {pageName} &nbsp; /</span> 
                </div>
        
                    <hr className='border border-gray-300 my-3 w-[99vw]' />

            </div>

            <WhoWeAre />
          
          <div className="my-12 sm:p-4">
          <OurStory />
          </div>

          <div className="sm:py-4">
          <TrustedBy />
          </div>

          <div className="mb-10 sm:mb-14">
          <OurFundamental/>
          </div>
          <div className="my-8 sm:my-10">
          <OurTeams/>
          </div>
          
          <div className="mb-20">
            <StayLoop/>
          </div>
          
          <Footer/>
        </div>
    )
}

export default About;