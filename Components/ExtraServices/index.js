import searchicon from '@/pages/assets/search.svg'
import box from '@/pages/assets/box.svg'
import sendicon from '@/pages/assets/send.svg'
import shield from '@/pages/assets/shield.svg'
import image_1 from '@/pages/assets/image_1.jpg'
import image_2 from '@/pages/assets/image_2.jpg'
import image_3 from '@/pages/assets/image_3.jpg'
import image_4 from '@/pages/assets/image_4.jpg'
import Image from 'next/image';


function ExtraServices(props) {
  return (
    <div className="flex flex-col items-stretch px-5">
      <div className="w-full text-4xl font-bold leading-10 tracking-widest text-slate-950 max-md:max-w-full">
        Our extra services
      </div>
      <div className="w-full mt-11 max-md:max-w-full max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch w-full pb-6 bg-white border border-solid rounded-md grow border-neutral-200 max-md:mt-5">
              <img
                loading={"lazy"}
                srcSet={image_1}
                className="aspect-[1.57] object-contain object-center w-full overflow-hidden"
              />
              <span className="self-end mt-[-20px] bg-white rounded-full w-10 h-10 flex justify-center items-center mr-4">
            <Image src={searchicon}/>
            </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch w-full pb-6 bg-white border border-solid rounded-md grow border-neutral-200 max-md:mt-5">
              <img
                loading="lazy"
                srcSet={image_2}
                className="aspect-[1.57] object-contain object-center w-full overflow-hidden"
              />
              <span className="self-end mt-[-20px] bg-white rounded-full w-10 h-10 flex justify-center items-center mr-4">
            <Image src={box}/>
            </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch w-full pb-6 bg-white border border-solid rounded-md grow border-neutral-200 max-md:mt-5">
              <img
                loading="lazy"
                srcSet={image_3}
                className="aspect-[1.6] object-contain object-center w-full overflow-hidden"
              />
              <span className="self-end mt-[-20px] bg-white rounded-full w-10 h-10 flex justify-center items-center mr-4">
            <Image src={sendicon}/>
            </span>
              <div className="flex flex-col items-stretch absolute h-[60px] w-[53px] ml-52 mr-5 mt-24 mb-3.5 p-0.5 -left-1" />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch w-full pb-16 bg-white border border-solid rounded-md grow border-neutral-200 max-md:mt-5">
              <div className="relative flex flex-col w-full overflow-hidden">
              <img src={image_4}
             className="h-[135px] w-[100%] rounded-t-xl" 
            />
            <span className="self-end mt-[-20px] bg-white rounded-full w-10 h-10 flex justify-center items-center mr-4">
            <Image src={shield}/>
            </span>
            <div className="px-5 flex flex-col w-[100%] justify-between h-[50%]"> 
                <div className="absolute flex flex-col items-stretch h-[60px] w-[53px] ml-52 mr-5 mt-24 mb-3.5 p-0.5 -left-1 top-0" />
              </div>
              <div className="items-stretch relative h-auto ml-5 mt-2.5">
              Media monitoring and inspection
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}




export default ExtraServices

