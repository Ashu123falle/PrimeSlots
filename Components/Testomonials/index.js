import Image from 'next/image';
import user1 from '@/pages/assets/user1.png'
import user2 from '@/pages/assets/user2.png'
import user3 from '@/pages/assets/user3.png'

function Testomonials() {
  return (
    <div className="flex flex-col items-center px-5">
      <div className="text-4xl text-blue-950 whitespace-nowrap">
        Testimonials
      </div>
      <div className="text-neutral-500 text-center mb-6 text-lg self-stretch w-full mt-11 mx-3.5 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </div>
      <div className='flex justify-center max-md:flex-wrap '>
    
      <div className="flex flex-col w-full max-md:max-w-full max-md:mt-2">
        <div className="flex my-4 max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-center w-[45%] max-md:w-full max-md:ml-0">
            <Image
              src={user1}
              
              className="aspect-[1.06] object-contain object-center w-full overflow-hidden grow"
            />
          </div>
          <div className="flex flex-col items-stretch w-[55%]  max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-start w-full pl-6 pr-3 bg-stone-800 grow py-7 max-md:max-w-full max-md:pl-5">
              <div className="self-stretch text-5xl font-semibold leading-10 text-white">
                “Amazing Team with Lorem Ipsum”
              </div>
              <div className="self-stretch mt-8 text-base font-light text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet,
              </div>
              <div className="flex gap-2 ml-2.5 mt-14 items-start max-md:mt-10">
                <div className="text-base font-medium text-right text-white grow whitespace-nowrap">
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
        <div className="flex gap-0 my-4 max-md:flex-col-reverse max-md:items-stretch max-md:gap-0">
         
          <div className="flex flex-col items-stretch w-[55%]  max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-start w-full pl-6 pr-3 bg-stone-800 grow py-7 max-md:max-w-full max-md:pl-5">
              <div className="self-stretch text-5xl font-semibold leading-10 text-white">
                “Amazing Team with Lorem Ipsum”
              </div>
              <div className="self-stretch mt-8 text-base font-light text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet,
              </div>
              <div className="flex gap-2 ml-2.5 mt-14 items-start max-md:mt-10">
                <div className="text-base font-medium text-right text-white grow whitespace-nowrap">
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
          <div className="flex flex-col items-center w-[45%] max-md:w-full max-md:ml-0">
            <Image
              src={user2}
              
              className="aspect-[1.06] object-contain object-center w-full overflow-hidden grow"
            />
          </div>
          
        </div>
      </div>
      <div className="flex flex-col gap-0 m-4 max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-center w-[80%] h-[48%]  max-md:w-full max-md:ml-0">
            <Image
              src={user3}
              
              className="aspect-[1.06] object-contain object-center w-full overflow-hidden grow"
            />
          </div>
          <div className="flex flex-col items-stretch w-[80%] h-[52%]  max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-start w-full pl-6 pr-3 bg-stone-800 grow py-7 max-md:max-w-full max-md:pl-5">
              <div className="self-stretch text-5xl font-semibold leading-10 text-white">
                “Amazing Team with Lorem Ipsum”
              </div>
              <div className="self-stretch mt-8 text-base font-light text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet,
              </div>
              <div className="flex gap-2 ml-2.5 mt-14 items-start max-md:mt-10">
                <div className="text-base font-medium text-right text-white grow whitespace-nowrap">
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