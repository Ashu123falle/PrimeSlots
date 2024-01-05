
import Image from "next/image";

const TrustedBy  = () => {
  return (
    <div className="p-8 my-3 mb-6">
      <div className="flex flex-col text-center px-5">
      <h1 className=" text-[40px] text-blue-950 self-center w-[90%] font-[Playfair]">
      Trusted by 1500+ companies since 2002
      </h1>
      <p className="text-neutral-500 text-center text-lg self-center max-w-[613px] mt-6 max-md:max-w-full">
        We've had the pleasure of working with industry-defining brands. These
        are just some of them.
      </p>
      </div>

      <div className="flex flex-wrap items-center justify-evenly">
    <span className="  self-end mt-[1px]   flex justify-center items-center  ml-4">
            <Image src='/assets/spotify.svg' width={180} height={50} className="items-stretch pb-6 mb-4 " />
                </span>
    <span className="  self-end mt-[1px]   flex justify-center items-center  ml-4">
            <Image src='/assets/google.jpg' width={160} height={50} className="object-cover object-center pb-6 mb-4 " />
                </span>
    <span className="  self-end mt-[1px]   flex justify-center items-center  ml-4">
            <Image src='/assets/stripe.png' width={120} height={40} className="object-cover object-center pb-8 mb-4 " />
                </span>
    <span className="  self-end mt-[1px]    flex justify-center items-center  ml-4">
            <Image src='/assets/youtube.jpg' width={160} height={50} className="object-cover object-center pb-6 mb-4 " />
                </span>
    <span className="  self-end mt-[1px]    flex justify-center items-center  ml-4">
            <Image src='/assets/microsoft.jpg' width={160} height={50} className="object-cover object-center pb-8 mb-4 " />
                </span>
    <span className="  self-end mt-[1px]    flex justify-center items-center  ml-4">
            <Image src='/assets/medium.svg' width={170} height={50} className="object-cover object-center mb-4 pb-14" />
                </span>
    <span className="  self-end mt-[1px]    flex justify-center items-center  ml-4">
            <Image src='/assets/uber.svg' width={110} height={50} className="object-cover object-center pb-8 mb-4 " />
                </span>
    <span className="  self-end mt-[1px]    flex justify-center items-center  ml-4">
            <Image src='/assets/zoom.svg' width={140} height={50} className="object-cover object-center pb-10 mb-4 " />
                </span>
    <span className="  self-end mt-[1px]    flex justify-center items-center  ml-4">
            <Image src='/assets/grab.png' width={120} height={50} className="object-cover object-center pb-10 mb-4 " />
                </span>
    </div>

    </div>
  );
};

export default TrustedBy ;
