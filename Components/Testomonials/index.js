import Image from 'next/image';
import user1 from '@/pages/assets/user1.png'
import user2 from '@/pages/assets/user2.png'
import user3 from '@/pages/assets/user3.png'

function Testomonials() {
  return (
    <div className="flex flex-col items-center px-5">
      <div className="text-blue-950 text-4xl whitespace-nowrap">
        Testimonials
      </div>
      <div className="text-neutral-500 text-center mb-6 text-lg self-stretch w-full mt-11 mx-3.5 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </div>
      <div className='flex flex-col  justify-center border-4 border-black '>
    
      <div className=" border-2 border-black w-full flex flex-col  max-md:max-w-full max-md:mt-2">
        <div className=" my-4 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-center w-[40%] max-md:w-full max-md:ml-0">
            <Image
              src={user1}
              
              className="aspect-[1.06] object-contain object-center w-full overflow-hidden grow"
            />
          </div>
          <div className="flex flex-col items-stretch w-[43%]  max-md:w-full max-md:ml-0">
            <div className="bg-stone-800 flex grow flex-col w-full pl-6 pr-3 py-7 items-start max-md:max-w-full max-md:pl-5">
              <div className="text-white text-5xl font-semibold leading-10 self-stretch">
                “Amazing Team with Lorem Ipsum”
              </div>
              <div className="text-white text-base font-light self-stretch mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet,
              </div>
              <div className="flex gap-2 ml-2.5 mt-14 items-start max-md:mt-10">
                <div className="text-white text-right text-base font-medium grow whitespace-nowrap">
                  See full review{" "}
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f9b322ebb949643c473e33c628fd70aa74460722881af7b0daa19f21570ec59?"
                  className="aspect-[1.52] object-contain object-center w-8 stroke-[2.19px] stroke-white overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
          
        </div>
        <div className="gap-0  my-4 flex max-md:flex-col-reverse max-md:items-stretch max-md:gap-0">
         
          <div className="flex flex-col items-stretch w-[43%]  max-md:w-full max-md:ml-0">
            <div className="bg-stone-800 flex grow flex-col w-full pl-6 pr-3 py-7 items-start max-md:max-w-full max-md:pl-5">
              <div className="text-white text-5xl font-semibold leading-10 self-stretch">
                “Amazing Team with Lorem Ipsum”
              </div>
              <div className="text-white text-base font-light self-stretch mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet,
              </div>
              <div className="flex gap-2 ml-2.5 mt-14 items-start max-md:mt-10">
                <div className="text-white text-right text-base font-medium grow whitespace-nowrap">
                  See full review{" "}
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f9b322ebb949643c473e33c628fd70aa74460722881af7b0daa19f21570ec59?"
                  className="aspect-[1.52] object-contain object-center w-8 stroke-[2.19px] stroke-white overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
            </div>
            
          </div>
          <div className="flex flex-col items-center w-[40%] max-md:w-full max-md:ml-0">
            <Image
              src={user2}
              
              className="aspect-[1.06] object-contain object-center w-full overflow-hidden grow"
            />
          </div>
          
        </div>
      </div>
      <div className="gap-0 flex-col my-4 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-center w-[40%] max-md:w-full max-md:ml-0">
            <Image
              src={user3}
              
              className="aspect-[1.06] object-contain object-center w-full overflow-hidden grow"
            />
          </div>
          <div className="flex flex-col items-stretch w-[43%]  max-md:w-full max-md:ml-0">
            <div className="bg-stone-800 flex grow flex-col w-full pl-6 pr-3 py-7 items-start max-md:max-w-full max-md:pl-5">
              <div className="text-white text-5xl font-semibold leading-10 self-stretch">
                “Amazing Team with Lorem Ipsum”
              </div>
              <div className="text-white text-base font-light self-stretch mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet,
              </div>
              <div className="flex gap-2 ml-2.5 mt-14 items-start max-md:mt-10">
                <div className="text-white text-right text-base font-medium grow whitespace-nowrap">
                  See full review{" "}
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f9b322ebb949643c473e33c628fd70aa74460722881af7b0daa19f21570ec59?"
                  className="aspect-[1.52] object-contain object-center w-8 stroke-[2.19px] stroke-white overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
          
        </div>
    </div>
    
    <div className="text-stone-950 text-right text-2xl font-semibold whitespace-nowrap justify-center items-stretch mt-12 pl-10 pr-6 py-8 rounded-[38.9px] border-[1.361px] border-solid border-stone-800 max-md:mt-10 max-md:px-5">
        See All Reviews
      </div>
    </div>
   
  );
}

export default Testomonials