
import Image from "next/image";
import medium from '@/pages/assets/medium.svg'
import google from '@/pages/assets/google.jpg'
import grab from '@/pages/assets/grab.png'
import microsoft from '@/pages/assets/microsoft.jpg'
import  spotify from '@/pages/assets/spotify.jpg'
import stripe from '@/pages/assets/stripe.png'
import uber from '@/pages/assets/uber.svg'
import youtube from '@/pages/assets/youtube.jpg'
import zoom from '@/pages/assets/zoom.svg'

const JoinTheBrand  = () => {
  return (
    <div>
      <div className="flex flex-col items-stretch px-5">
      <div className="self-center text-4xl text-blue-950 whitespace-nowrap">
        Join these brands
      </div>
      <div className="text-neutral-500 text-center text-lg self-center max-w-[613px] mt-6 max-md:max-w-full">
        We've had the pleasure of working with industry-defining brands. These
        are just some of them.
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-evenly">
    <span className="  self-end mt-[1px] border-black   flex justify-center items-center  ml-4">
            <Image src={spotify} width={160} height={50} />
                </span>
    <span className="  self-end mt-[1px] border-black   flex justify-center items-center  ml-4">
            <Image src={google} width={160} height={50} />
                </span>
    <span className="  self-end mt-[1px] border-black   flex justify-center items-center  ml-4">
            <Image src={stripe} width={160} height={50} />
                </span>
    <span className="  self-end mt-[1px] border-black   flex justify-center items-center  ml-4">
            <Image src={youtube} width={160} height={50} />
                </span>
    <span className="  self-end mt-[1px] border-black   flex justify-center items-center  ml-4">
            <Image src={microsoft} width={160} height={50} />
                </span>
    <span className="  self-end mt-[1px] border-black   flex justify-center items-center  ml-4">
            <Image src={medium} width={160} height={50} />
                </span>
    <span className="  self-end mt-[1px] border-black   flex justify-center items-center  ml-4">
            <Image src={uber} width={160} height={50} />
                </span>
    <span className="  self-end mt-[1px] border-black   flex justify-center items-center  ml-4">
            <Image src={zoom} width={160} height={50} />
                </span>
    <span className="  self-end mt-[1px] border-black   flex justify-center items-center  ml-4">
            <Image src={grab} width={160} height={50} />
                </span>
    </div>
    </div>
  );
};

export default JoinTheBrand ;
